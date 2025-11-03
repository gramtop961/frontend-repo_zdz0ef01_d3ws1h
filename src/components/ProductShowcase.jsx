import { motion } from 'framer-motion';
import { Cookie, Leaf, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Tulsi Almond Crunch',
    price: 6.99,
    description: 'Calming tulsi with roasted almonds for sustained energy.',
    tags: ['vegan', 'gluten-free'],
    nutrition: { calories: 140, protein: '5g', fiber: '4g', sugar: '3g' },
    badge: 'Earn cookie points'
  },
  {
    id: 2,
    name: 'Ashwagandha Choco Bites',
    price: 7.49,
    description: 'Adaptogenic boost with rich cacao and coconut sugar.',
    tags: ['vegan'],
    nutrition: { calories: 150, protein: '6g', fiber: '5g', sugar: '4g' },
    badge: 'Earn cookie points'
  },
  {
    id: 3,
    name: 'Ginger Sesame Thins',
    price: 5.99,
    description: 'Zesty ginger with crunchy sesame for a metabolism lift.',
    tags: ['gluten-free'],
    nutrition: { calories: 120, protein: '4g', fiber: '3g', sugar: '2g' },
    badge: 'Earn cookie points'
  }
];

function Tag({ label }) {
  return (
    <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-900 text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-900/20">
      <Leaf className="w-3 h-3" /> {label}
    </span>
  );
}

export default function ProductShowcase() {
  return (
    <section id="shop" className="py-12 sm:py-16 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">Shop healthy cookies</h2>
            <p className="text-neutral-600 dark:text-neutral-300">Hand-crafted with Ayurvedic herbs and whole foods.</p>
          </div>
          <a href="#" className="hidden sm:inline text-sm text-emerald-700 dark:text-emerald-300 hover:underline">View all</a>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: idx * 0.05 }}
              className="group rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="h-36 sm:h-40 bg-gradient-to-br from-amber-100 via-emerald-100 to-white dark:from-emerald-900/20 dark:via-amber-900/20 dark:to-neutral-900 flex items-center justify-center">
                <Cookie className="w-12 h-12 text-emerald-600" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-semibold text-neutral-900 dark:text-white">{p.name}</h3>
                  <span className="text-emerald-700 dark:text-emerald-300 font-semibold">${p.price.toFixed(2)}</span>
                </div>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Tag key={t} label={t} />
                  ))}
                </div>
                <div className="mt-3 grid grid-cols-4 gap-2 text-xs text-neutral-700 dark:text-neutral-300">
                  <div className="rounded-md bg-neutral-50 dark:bg-neutral-800 p-2 text-center">
                    <div className="font-semibold">{p.nutrition.calories}</div>
                    <div className="text-[11px] text-neutral-500">cal</div>
                  </div>
                  <div className="rounded-md bg-neutral-50 dark:bg-neutral-800 p-2 text-center">
                    <div className="font-semibold">{p.nutrition.protein}</div>
                    <div className="text-[11px] text-neutral-500">protein</div>
                  </div>
                  <div className="rounded-md bg-neutral-50 dark:bg-neutral-800 p-2 text-center">
                    <div className="font-semibold">{p.nutrition.fiber}</div>
                    <div className="text-[11px] text-neutral-500">fiber</div>
                  </div>
                  <div className="rounded-md bg-neutral-50 dark:bg-neutral-800 p-2 text-center">
                    <div className="font-semibold">{p.nutrition.sugar}</div>
                    <div className="text-[11px] text-neutral-500">sugar</div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 dark:text-emerald-300">
                    <Star className="w-3 h-3" /> {p.badge}
                  </span>
                  <button className="px-3 py-1.5 rounded-md bg-emerald-600 text-white text-sm hover:bg-emerald-500 transition">Add to cart</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
