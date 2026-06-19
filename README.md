# 💸 Finance AI

![Status](https://img.shields.io/badge/status-active-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Tech](https://img.shields.io/badge/tech-Next.js%2C_TypeScript%2C_PostgreSQL%2C_Prism%2C_Stripe%2C_OpenAI-informational)

## 📖 About the Project

**Finance AI** is a personal finance management web application built with **Next.js**, **TypeScript**, **PostgreSQL**, **Prisma**, **Clerk**, **Stripe**, and **OpenAI**.

The project helps users track their financial transactions, organize expenses by category, analyze monthly income and spending, and generate AI-powered financial reports with personalized insights. The application also includes authentication, subscription plans, Stripe Checkout, and premium features for subscribed users.

Key features include:

* User authentication with Clerk
* Personal finance dashboard
* Monthly transaction filtering
* Transaction creation, editing, and deletion
* Transaction classification by type, category, and payment method
* Summary cards for balance, deposits, investments, and expenses
* Expense distribution by category
* Transaction percentage charts
* Recent transactions overview
* Basic and Premium subscription plans
* Monthly transaction limit for basic users
* Stripe Checkout subscription integration
* Stripe webhook integration for subscription status updates
* Stripe Customer Portal access for premium users
* AI-generated financial reports using OpenAI
* Responsive UI built with Tailwind CSS, Shadcn/UI, Radix UI, and Recharts

🔗 **Live Demo:** [Click here](https://finance-ai-one-opal.vercel.app/?month=6)

📂 **GitHub Repository:** [Click here](https://github.com/AlexWalkerGD/finance-ai)

---

## 🖼️ Preview

  <tr>
    <td><img width="1919" height="957" alt="image" src="https://github.com/user-attachments/assets/be65092c-b79a-4e51-b827-0ce99ae8d579" />
</td>
    <td><img width="1913" height="951" alt="Captura de tela 2026-06-19 154129" src="https://github.com/user-attachments/assets/66df990e-6ae5-4f69-bc6f-e3a4272b2dae" />
</td>
    <td><img width="1919" height="955" alt="Captura de tela 2026-06-19 154200" src="https://github.com/user-attachments/assets/5045ffc6-8f96-4d2f-a8b6-b1d07e5cf309" />
</td>
    <td><img width="1919" height="956" alt="Captura de tela 2026-06-19 154225" src="https://github.com/user-attachments/assets/056e8140-de02-4e8b-ac8f-1522eb432f2a" />
</td>
    
  </tr>

---

## 🚀 Features

* 🔐 User authentication with Clerk
* 📊 Financial dashboard with monthly insights
* 💰 Balance, deposits, investments, and expenses summary
* 📅 Monthly transaction filtering
* ➕ Create transactions
* ✏️ Edit existing transactions
* 🗑️ Delete transactions
* 🏷️ Transaction categories such as housing, food, health, education, salary, and more
* 💳 Payment method selection including credit card, debit card, bank transfer, cash, and others
* 📈 Charts for transaction type distribution
* 📉 Expense analysis by category
* 🧾 Recent transactions list
* 🤖 AI-powered financial reports for premium users
* 🧠 Personalized finance insights using OpenAI
* 📦 Basic and Premium subscription plans
* 🔒 Basic plan limited to 10 transactions per month
* ♾️ Premium plan with unlimited transactions
* 💳 Stripe Checkout integration
* 🔁 Stripe webhooks for subscription updates
* ⚙️ Stripe Customer Portal for plan management
* 📱 Responsive interface for different screen sizes

---

## 🛠️ Technologies and Libraries

### Frameworks & Languages

* Next.js
* React
* TypeScript
* HTML5 & CSS3

### Styling & UI

* Tailwind CSS
* Shadcn/UI
* Radix UI
* Lucide React
* Next Themes
* Recharts

### Authentication

* Clerk
* Clerk Middleware
* Clerk User Metadata

### Database

* PostgreSQL
* Prisma ORM
* Prisma PostgreSQL Adapter

### Payments

* Stripe Checkout
* Stripe Subscriptions
* Stripe Webhooks
* Stripe Customer Portal

### Artificial Intelligence

* OpenAI API
* AI-generated financial reports

### Forms & Validation

* React Hook Form
* Zod
* Hookform Resolvers

### Utilities

* date-fns
* clsx
* class-variance-authority
* tailwind-merge
* Sonner
* React Number Format

---

## ⚙️ Running Locally

### 1. Clone the repository

```bash
git clone https://github.com/AlexWalkerGD/finance-ai.git
```

### 2. Navigate to the project folder

```bash
cd finance-ai
```

### 3. Install dependencies

```bash
npm install
```

## 4. Create a .env file in the project root

```bash
DATABASE_URL="postgresql://user:password@host:port/database_name"

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
CLERK_SECRET_KEY="your_clerk_secret_key"

HOST_URL="http://localhost:3000"

STRIPE_SECRET_KEY="your_stripe_secret_key"
STRIPE_WEBHOOK_SECRET="your_stripe_webhook_secret"
STRIPE_PREMIUM_PLAN_PRICE_ID="your_stripe_price_id"
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="your_stripe_publishable_key"
NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL_URL="your_stripe_customer_portal_url"

OPENAI_API_KEY="your_openai_api_key"
```

### 5. Run database migrations

```bash
npx prisma migrate dev
```

### 6. Generate the Prisma Client

```bash
npx prisma generate
```

### 7. Start the development server

```bash
npm run dev
```

### 8. Open in your browser

```bash
http://localhost:3000
```

---

## 💳 Stripe Webhooks

To test subscription updates locally, configure the Stripe CLI and forward events to:

```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

Then copy the generated webhook secret into:

```bash
STRIPE_WEBHOOK_SECRET="your_stripe_webhook_secret"
```

The application listens for Stripe events such as:

* invoice.paid
* customer.subscription.deleted
  
These events update the user's subscription metadata in Clerk.

---

## 🤖 AI Reports

Premium users can generate AI-powered financial reports based on their monthly transactions.
The report uses transaction data such as:

* Date
* Type
* Amount
* Category

OpenAI then generates personalized insights, tips, and financial organization suggestions.

---

## 👨‍💻 Author

Developed by **Alex Walker**

💼 [GitHub](https://github.com/AlexWalkerGD)  
📧 alexwalkerson@hotmail.com

---

## 🪪 License

This project is licensed under the MIT License.

Feel free to use, modify, and distribute it.
