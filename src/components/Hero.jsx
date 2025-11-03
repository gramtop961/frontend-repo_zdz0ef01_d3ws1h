import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-white to-transparent dark:from-emerald-900/20 dark:via-neutral-900 dark:to-neutral-900 pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight"
            >
              Healthy cookies that fuel your fitness
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-lg text-neutral-600 dark:text-neutral-300"
            >
              Nirla AyurBakes Fit blends Ayurvedic goodness with macro-balanced nutrition. Snack smarter and level up your health.
            </motion.p>
            <div className="mt-6 flex gap-3">
              <a href="#shop" className="px-5 py-3 rounded-md text-white bg-emerald-600 hover:bg-emerald-700 font-medium">Shop cookies</a>
              <a href="#admin" className="px-5 py-3 rounded-md border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 font-medium">Admin</a>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative h-64 sm:h-80 md:h-full"
          >
            <div className="absolute right-0 top-0 h-64 w-64 sm:h-80 sm:w-80 rounded-3xl bg-gradient-to-br from-emerald-400/30 to-teal-500/30 blur-2xl" />
            <div className="relative z-10 rounded-3xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white/70 dark:bg-neutral-900/70 backdrop-blur">
              <ul className="grid grid-cols-2 gap-4 text-sm">
                <li className="p-3 rounded-lg bg-neutral-50 dark:bg-neutral-800">
                  <div className="text-2xl font-bold">5g</div>
                  <div className="text-neutral-500">Protein</div>
                </li>
                <li className="p-3 rounded-lg bg-neutral-50 dark:bg-neutral-800">
                  <div className="text-2xl font-bold">2g</div>
                  <div className="text-neutral-500">Sugar</div>
                </li>
                <li className="p-3 rounded-lg bg-neutral-50 dark:bg-neutral-800">
                  <div className="text-2xl font-bold">120</div>
                  <div className="text-neutral-500">Calories</div>
                </li>
                <li className="p-3 rounded-lg bg-neutral-50 dark:bg-neutral-800">
                  <div className="text-2xl font-bold">Ayur</div>
                  <div className="text-neutral-500">Herbs</div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
