/* eslint-ignore-file */

import { clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export const POST = async (request: Request) => {
  if (!process.env.STRIPE_WEBHOOK_SECRET || !process.env.STRIPE_SECRET_KEY) {
    return NextResponse.error();
  }

  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.error();
  }
  const text = await request.text();
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2025-02-24.acacia",
  });

  const event = stripe.webhooks.constructEvent(
    text,
    signature,
    process.env.STRIPE_WEBHOOK_SECRET,
  );

  switch (event.type) {
    case "invoice.paid": {
      const invoice = event.data.object;

      const customer = invoice.customer;
      // @ts-expect-error - Stripe type mismatch
      const subscriptionId = invoice.parent?.subscription_details?.subscription;

      const clerkUserId =
        // @ts-expect-error - Stripe type mismatch
        invoice.parent?.subscription_details?.metadata?.clerk_user_id;

      const clerk = await clerkClient();
      await clerk.users.updateUser(clerkUserId, {
        privateMetadata: {
          stripeCustomerId: String(customer),
          stripeSubscriptionId: String(subscriptionId),
        },
        publicMetadata: {
          subscriptionPlan: "premium",
        },
      });

      break;
    }
    case "customer.subscription.deleted": {
      const subscription = await stripe.subscriptions.retrieve(
        event.data.object.id,
      );
      const clerkUserId = subscription.metadata.clerk_user_id;
      if (!clerkUserId) {
        return NextResponse.error();
      }

      await clerkClient().users.updateUser(clerkUserId, {
        privateMetadata: {
          stripeCustomerId: null,
          stripeSubscriptionId: null,
        },
        publicMetadata: {
          subscriptionPlan: null,
        },
      });
    }
  }
  return NextResponse.json({ received: true });
};
