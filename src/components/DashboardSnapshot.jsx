export default function DashboardSnapshot({ user }) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-900">
          <div className="text-sm text-neutral-500">Today's steps</div>
          <div className="mt-2 text-3xl font-bold">7,842</div>
        </div>
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-900">
          <div className="text-sm text-neutral-500">Calories burned</div>
          <div className="mt-2 text-3xl font-bold">512 kcal</div>
        </div>
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-900">
          <div className="text-sm text-neutral-500">Leaderboard</div>
          <div className="mt-2 text-lg">You are #4 this week</div>
        </div>
      </div>
    </section>
  );
}
