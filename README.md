# 💪 BoomFit – Your Modern Fitness Companion

A sleek, responsive fitness tracking web app built with **Next.js 13+ (App Router)**, **TailwindCSS**, **ShadCN UI**, and **Prisma ORM**. Track workouts, meals, and progress—all in one place.

![FitTrack Banner](./public/banner.png)

---

## 🚀 Features

- 🧠 **Authentication**
  - Secure login/signup with password confirmation
  - Session management via **NextAuth.js**
  - Protected routes for dashboard and user profile

- 💪 **Workout Tracking**
  - Add custom workouts & exercises
  - Save and reuse workout routines
  - Visual progress charts

- 🍎 **Nutrition Logging**
  - Track daily meals & calories
  - Set nutrition goals (protein, carbs, fat)
  - Daily summary dashboard

- 🎯 **Fitness Goals**
  - Set weight/activity goals
  - Habit tracking (sleep, water, steps)

- 📈 **User Dashboard**
  - Personalized welcome
  - Weekly overview & insights
  - Logout functionality

- 🧾 **Admin Panel** *(optional)*
  - View user data & app analytics

---

## 🛠️ Tech Stack

| Tech               | Purpose                        |
|--------------------|--------------------------------|
| Next.js 13+        | React Framework (App Router)   |
| TailwindCSS        | Utility-first styling          |
| ShadCN UI          | Accessible UI components       |
| Prisma             | ORM for DB interaction         |
| MongoDB/PostgreSQL | Database                       |
| NextAuth.js        | Authentication                 |
| Vercel             | Deployment                     |
| Recharts/Chart.js  | Data Visualization             |

---

## 📁 Project Structure

components.json    next-env.d.ts  package-lock.json   public/    tsconfig.json
eslint.config.mjs  node_modules/  postcss.config.mjs  README.md
next.config.ts     package.json   prisma/             src/


---

## ⚙️ Setup Instructions

1. **Clone the repo**

```bash
git clone https://github.com/kadelcode/fitness-app.git
cd fitness-app
```

2. **Install dependencies**

```
npm install
```

3. **Set up environment variables**
Create a ```.env``` file based on example below

```
DATABASE_URL=your_db_url_here
NEXTAUTH_SECRET=supersecret
NEXTAUTH_URL=http://localhost:3000
```

4. **Set up Prisma**

```
npx prisma generate
npx prisma db push      # or migrate dev if using PostgreSQL
```

5. **Run the dev server**

```
npm run dev
```

---

## 🧪 Coming Soon
-  Mobile PWA support
-  Social login (Google, Facebook)
-  Push notifications
-  Community challenges
-  Mobile app (Flutter or React Native)

---

## 🧠 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss.

---

## 📄 License
This project is licensed under the [MIT License]().

---

## 👏 Acknowledgements
-  [Next.js](https://nextjs.org/)
-  [ShadCN UI]()
-  [Prisma](https://www.prisma.io/)
-  [Tailwind CSS](https://tailwindcss.com/)

---

Let me know if you'd like a badge section (e.g., GitHub stars, deploy preview, etc.) or if you're deploying with Vercel and want that badge added!


