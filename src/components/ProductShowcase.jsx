const inr = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 });

export default function ProductShowcase({ products = [], onAddToCart }) {
  return (
    <section id="shop" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">Shop</h2>
          <p className="text-neutral-500">Guilt-free cookies priced in Indian Rupees</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-white dark:bg-neutral-900">
            <div className="h-40 bg-gradient-to-br from-emerald-200 to-teal-300 dark:from-emerald-900/30 dark:to-teal-900/30" />
            <div className="p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold">{p.name}</h3>
                  <p className="text-sm text-neutral-500 line-clamp-2">{p.description}</p>
                </div>
                <span className="text-emerald-700 dark:text-emerald-400 font-semibold whitespace-nowrap">{inr.format(Number(p.price) || 0)}</span>
              </div>
              {p.tags && p.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-full text-[11px] bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">{t}</span>
                  ))}
                </div>
              )}
              <button onClick={() => onAddToCart?.(p)} className="mt-4 w-full px-4 py-2 rounded-md bg-emerald-600 text-white text-sm hover:bg-emerald-700">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
