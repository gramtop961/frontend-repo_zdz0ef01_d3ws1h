import { useMemo, useState } from 'react';
import { Pencil, Save, Trash2, Plus } from 'lucide-react';

const inr = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 });

export default function AdminPanel({ products = [], onUpdateProduct, onAddProduct, onDeleteProduct, user }) {
  const [editingId, setEditingId] = useState(null);
  const [drafts, setDrafts] = useState({});

  const isAdmin = user?.role === 'admin';

  const startEdit = (p) => {
    setEditingId(p.id);
    setDrafts({ id: p.id, name: p.name, price: String(p.price), description: p.description || '' });
  };

  const saveEdit = () => {
    if (!drafts.name) return;
    const price = Number(drafts.price);
    onUpdateProduct({ id: drafts.id, name: drafts.name, price: Number.isFinite(price) ? price : 0, description: drafts.description });
    setEditingId(null);
    setDrafts({});
  };

  const addRow = () => {
    const base = { name: 'New Cookie', price: 99, description: 'Wholesome, low sugar, high protein.', tags: ['Ayur', 'Protein'] };
    onAddProduct(base);
  };

  if (!isAdmin) {
    return (
      <section id="admin" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-900">
          <h2 className="text-xl font-semibold">Admin · Manage Products</h2>
          <p className="text-neutral-500 mt-2">Sign in with an admin email to manage products.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="admin" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-end justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold">Admin · Manage Products</h2>
          <p className="text-neutral-500">Update names, prices (₹), and descriptions. Changes are immediate (demo).</p>
        </div>
        <button onClick={addRow} className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-600 text-white text-sm hover:bg-emerald-700">
          <Plus size={16} /> Add product
        </button>
      </div>

      <div className="overflow-x-auto rounded-xl border border-neutral-200 dark:border-neutral-800">
        <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-800 text-sm">
          <thead className="bg-neutral-50 dark:bg-neutral-800/50">
            <tr>
              <th className="px-4 py-3 text-left font-medium">Name</th>
              <th className="px-4 py-3 text-left font-medium">Price (₹)</th>
              <th className="px-4 py-3 text-left font-medium">Description</th>
              <th className="px-4 py-3 text-left font-medium w-40">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
            {products.map((p) => (
              <tr key={p.id}>
                <td className="px-4 py-3">
                  {editingId === p.id ? (
                    <input
                      className="w-full px-2 py-1 rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent"
                      value={drafts.name}
                      onChange={(e) => setDrafts((d) => ({ ...d, name: e.target.value }))}
                    />
                  ) : (
                    <div className="font-medium">{p.name}</div>
                  )}
                </td>
                <td className="px-4 py-3">
                  {editingId === p.id ? (
                    <div className="flex items-center gap-1">
                      <span className="text-neutral-500">₹</span>
                      <input
                        type="number"
                        className="w-28 px-2 py-1 rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent"
                        value={drafts.price}
                        onChange={(e) => setDrafts((d) => ({ ...d, price: e.target.value }))}
                      />
                    </div>
                  ) : (
                    <span className="font-semibold text-emerald-700 dark:text-emerald-400">{inr.format(Number(p.price) || 0)}</span>
                  )}
                </td>
                <td className="px-4 py-3">
                  {editingId === p.id ? (
                    <input
                      className="w-full px-2 py-1 rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent"
                      value={drafts.description}
                      onChange={(e) => setDrafts((d) => ({ ...d, description: e.target.value }))}
                    />
                  ) : (
                    <p className="text-neutral-600 dark:text-neutral-300 line-clamp-2">{p.description}</p>
                  )}
                </td>
                <td className="px-4 py-3">
                  {editingId === p.id ? (
                    <div className="flex items-center gap-2">
                      <button onClick={saveEdit} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-emerald-600 text-white hover:bg-emerald-700">
                        <Save size={16} /> Save
                      </button>
                      <button onClick={() => { setEditingId(null); setDrafts({}); }} className="px-3 py-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800">Cancel</button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <button onClick={() => startEdit(p)} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800">
                        <Pencil size={16} /> Edit
                      </button>
                      <button onClick={() => onDeleteProduct(p.id)} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-red-600 text-white hover:bg-red-700">
                        <Trash2 size={16} /> Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
