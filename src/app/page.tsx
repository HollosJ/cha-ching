import GetStartedButton from "@/app/components/GetStartedButton";

export default function HomePage() {
  return (
    <main className="container my-8 md:my-16 md:max-w-screen-lg dark:text-slate-300">
      <div className="grid md:grid-cols-2">
        <div>
          <h1 className="text-4xl text-pretty">
            Your Personal Finance Dashboard
          </h1>
          <p className="mt-4">
            Take control of your finances with Cha-Ching—an interactive
            dashboard to track income, manage expenses, and get a clear
            financial overview, all in one place.
          </p>

          <GetStartedButton className="mt-8" />
        </div>
      </div>

      <div className="my-8 md:my-16">
        <h2 className="text-2xl text-pretty">Features</h2>
        <ul className="mt-4 grid gap-4 md:grid-cols-2">
          <li className="border-2 p-4 dark:border-slate-700">
            💰 Track Your Income and Expenses: Easily add your income sources
            and bills.
          </li>
          <li className="border-2 p-4 dark:border-slate-700">
            📊 Instant Financial Summary: Get a clear snapshot of your net
            income and spending patterns.
          </li>
          <li className="border-2 p-4 dark:border-slate-700">
            📈 Interactive Visuals: See your finances come to life with dynamic
            charts and graphs.
          </li>
          <li className="border-2 p-4 dark:border-slate-700">
            💾 Data Persistence: Your data stays saved with localStorage, so you
            never lose track.
          </li>
        </ul>
      </div>
    </main>
  );
}
