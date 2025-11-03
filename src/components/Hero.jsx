import { motion } from 'framer-motion';
import { Cookie, Dumbbell, Trophy } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-amber-50 to-white dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-900 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 dark:border-emerald-900 bg-white dark:bg-neutral-900 px-3 py-1 text-xs text-emerald-700 dark:text-emerald-300 shadow-sm">
            <Cookie className="w-4 h-4" /> Ayurvedic Healthy Cookies + Fitness
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Earn cookies while burning calories!
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-neutral-600 dark:text-neutral-300">
            Shop nutrient-rich AyurBakes and turn your daily movement into cookie points. Redeem for discounts, gifts, and bragging rights on the leaderboard.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#shop" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 transition shadow">
              <Cookie className="w-5 h-5" /> Shop Healthy Cookies
            </a>
            <a href="#dashboard" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition">
              <Dumbbell className="w-5 h-5" /> Track & Earn Points
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {[
            {
              icon: <Cookie className="w-5 h-5 text-emerald-600" />,
              title: 'Clean Ingredients',
              desc: 'Vegan, gluten-free, Ayurvedic herbs for balance and energy.'
            },
            {
              icon: <Dumbbell className="w-5 h-5 text-emerald-600" />,
              title: 'Move to Earn',
              desc: '1000 steps = 1 cookie point. Runs and workouts earn more.'
            },
            {
              icon: <Trophy className="w-5 h-5 text-emerald-600" />,
              title: 'Challenge Friends',
              desc: 'Beat nearby users on weekly leaderboards and win rewards.'
            }
          ].map((f, i) => (
            <div key={i} className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 sm:p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-md bg-emerald-50 dark:bg-emerald-900/20">{f.icon}</div>
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white">{f.title}</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
