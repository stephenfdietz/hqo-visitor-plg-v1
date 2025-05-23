# HqO Visitor Management PLG MVP

This is an early MVP (minimum viable product) of HqO’s Visitor Management platform, designed to support a **product-led growth (PLG)** motion. It enables users to self-serve their way into a trial experience and begin exploring the product without sales involvement.

---

## 🌐 Target Audience

Two possible user types may enter the flow:
- **Landlord**: Buys the system for front desk and building-wide use.
- **Tenant Company**: Buys the system for their own office use only.

We ask users to select which path they’re on during onboarding. This choice is recorded in both our database and HubSpot.

---

## 🛠️ Tech Stack

- **Frontend**: Built with [Next.js](https://nextjs.org/) and [Vercel](https://vercel.com/)
- **Cursor**: AI coding assistant (primary dev environment)
- **Supabase**: Auth and database (PostgreSQL)
- **HubSpot API**: Captures leads and user info for sales tracking + nurture
- **Stripe**: Payments platform for converting trials to paid
- **GitHub**: Version control
- **Plasmic (optional)**: Fine-tuned visual editing (may explore as needed)

---

## 🔐 Authentication

We use **Supabase Auth** with email verification.

All new users must:
- Sign up with name, email, phone, title, and building address
- Verify email before accessing the platform

---

## 🧪 Trial Experience

All users begin on a **free trial** with:
- Full feature access to Visitor Management
- ✖️ **No access control integrations** (QR codes or mobile credentials are disabled during trial)

---

## 💳 Converting to Paid

- Users can upgrade at any time.
- **Stripe** will handle billing + plan enforcement.
- Paid tier unlocks **access control integration features** like QR entry and mobile credentials.

---

## 📊 Data Flow

All lead/user data will be:
- Stored in Supabase
- Sent to HubSpot using their API (for CRM + email nurture)
- Linked with metadata like role (tenant/landlord) and signup source

---

## 🚀 Deployment

- Developed locally using Cursor and GitHub
- Live preview + production deploys powered by Vercel

---

## 💡 Notes

- Visual design is based on the current HqO style guide.
- This is a working MVP. Code may evolve significantly during iteration.
- Further pages (pricing, support, etc.) may still be generated in v0 and merged via Git.

