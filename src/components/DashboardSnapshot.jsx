import { motion } from 'framer-motion';
import { Trophy, Dumbbell, MapPin } from 'lucide-react';

const leaderboard = [
  { name: 'Aarav', points: 128 },
  { name: 'Maya', points: 117 },
  { name: 'Rohan', points: 106 }
];

export default function DashboardSnapshot() {
  return (
    <section id="dashboard" className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            className="lg:col-span-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-neutral-900 dark:text-white">Today</h3>
              <span className="text-xs text-neutral-500">1000 steps = 1 cookie point</span>
            </div>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: 'Steps', value: '8,420' },
                { label: 'Distance', value: '6.2 km' },
                { label: 'Workouts', value: '2' },
                { label: 'Cookie Points', value: '13' }
              ].map((m) => (
                <div key={m.label} className="rounded-lg bg-neutral-50 dark:bg-neutral-800 p-4 text-center">
                  <div className="text-2xl font-bold text-neutral-900 dark:text-white">{m.value}</div>
                  <div className="text-xs text-neutral-500">{m.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-600 text-white text-sm hover:bg-emerald-500 transition">
                <Dumbbell className="w-4 h-4" /> Add activity
              </button>
              <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-800 transition">
                Redeem points
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <h3 id="leaderboard" className="font-semibold text-neutral-900 dark:text-white flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-500" /> Weekly Leaderboard
              </h3>
              <a href="#" className="text-xs text-emerald-700 dark:text-emerald-300 hover:underline">See all</a>
            </div>
            <ol className="mt-4 space-y-3">
              {leaderboard.map((u, idx) => (
                <li key={u.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300 text-xs flex items-center justify-center font-semibold">{idx + 1}</span>
                    <span className="text-sm text-neutral-800 dark:text-neutral-200">{u.name}</span>
                  </div>
                  <span className="text-sm font-medium text-neutral-900 dark:text-white">{u.points} pts</span>
                </li>
              ))}
            </ol>
            <div className="mt-5 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 p-3 text-xs text-emerald-800 dark:text-emerald-200">
              Invite nearby users and start a "Beat the User" challenge.
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="mt-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-emerald-600" />
              <h3 className="font-semibold text-neutral-900 dark:text-white">Nearby Users</h3>
            </div>
            <a href="#map" className="text-xs text-emerald-700 dark:text-emerald-300 hover:underline">Open map</a>
          </div>
          <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
            {['Anaya (0.8 km)', 'Vihaan (1.2 km)', 'Sara (1.5 km)', 'Kabir (2.0 km)'].map((p) => (
              <div key={p} className="rounded-md bg-neutral-50 dark:bg-neutral-800 p-3 flex items-center justify-between">
                <span className="text-neutral-700 dark:text-neutral-300">{p}</span>
                <button className="text-emerald-700 dark:text-emerald-300 hover:underline text-xs">Challenge</button>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
