import { useMemo, useState } from 'react';
import { Pencil, Save, Plus, Trash2 } from 'lucide-react';

export default function AdminPanel({ products, onUpdateProduct, onAddProduct, onDeleteProduct }) {
  const [editingId, setEditingId] = useState(null);
  const [draft, setDraft] = useState({ name: '', price: 0, description: '' });

  const startEdit = (p) => {
    setEditingId(p.id);
    setDraft({ name: p.name, price: p.price, description: p.description });
  };

  const saveEdit = () => {
    if (editingId == null) return;
    const price = Number(draft.price);
    onUpdateProduct(editingId, { ...draft, price: isNaN(price) ? 0 : price });
    setEditingId(null);
  };

  const [newItem, setNewItem] = useState({ name: '', price: '', description: '' });
  const canAdd = useMemo(() => newItem.name.trim() && newItem.price !== '', [newItem]);

  return (
    <section id="admin" className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">Admin · Manage Products</h2>
            <p className="text-neutral-600 dark:text-neutral-300 text-sm">Update names, prices, and descriptions. Changes are immediate (demo mode).</p>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm">
          <table className="min-w-full text-sm">
            <thead className="bg-neutral-50 dark:bg-neutral-800/60 text-neutral-700 dark:text-neutral-300">
              <tr>
                <th className="text-left font-medium px-4 py-3">Name</th>
                <th className="text-left font-medium px-4 py-3">Price ($)</th>
                <th className="text-left font-medium px-4 py-3 hidden md:table-cell">Description</th>
                <th className="text-right font-medium px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id} className="border-t border-neutral-100 dark:border-neutral-800">
                  <td className="px-4 py-3 align-top">
                    {editingId === p.id ? (
                      <input
                        className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-2 py-1"
                        value={draft.name}
                        onChange={(e) => setDraft((d) => ({ ...d, name: e.target.value }))}
                      />
                    ) : (
                      <span className="text-neutral-900 dark:text-white font-medium">{p.name}</span>
                    )}
                  </td>
                  <td className="px-4 py-3 align-top">
                    {editingId === p.id ? (
                      <input
                        type="number"
                        step="0.01"
                        className="w-28 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-2 py-1"
                        value={draft.price}
                        onChange={(e) => setDraft((d) => ({ ...d, price: e.target.value }))}
                      />
                    ) : (
                      <span className="text-emerald-700 dark:text-emerald-300 font-semibold">${p.price.toFixed(2)}</span>
                    )}
                  </td>
                  <td className="px-4 py-3 align-top hidden md:table-cell">
                    {editingId === p.id ? (
                      <textarea
                        rows={2}
                        className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-2 py-1"
                        value={draft.description}
                        onChange={(e) => setDraft((d) => ({ ...d, description: e.target.value }))}
                      />
                    ) : (
                      <span className="text-neutral-600 dark:text-neutral-300">{p.description}</span>
                    )}
                  </td>
                  <td className="px-4 py-3 align-top">
                    <div className="flex items-center justify-end gap-2">
                      {editingId === p.id ? (
                        <button onClick={saveEdit} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-emerald-600 text-white hover:bg-emerald-500">
                          <Save className="w-4 h-4" /> Save
                        </button>
                      ) : (
                        <button onClick={() => startEdit(p)} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800">
                          <Pencil className="w-4 h-4" /> Edit
                        </button>
                      )}
                      <button onClick={() => onDeleteProduct(p.id)} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20">
                        <Trash2 className="w-4 h-4" /> Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              <tr className="border-t border-neutral-100 dark:border-neutral-800">
                <td className="px-4 py-3">
                  <input
                    placeholder="New product name"
                    className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-2 py-1"
                    value={newItem.name}
                    onChange={(e) => setNewItem((s) => ({ ...s, name: e.target.value }))}
                  />
                </td>
                <td className="px-4 py-3">
                  <input
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                    className="w-28 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-2 py-1"
                    value={newItem.price}
                    onChange={(e) => setNewItem((s) => ({ ...s, price: e.target.value }))}
                  />
                </td>
                <td className="px-4 py-3 hidden md:table-cell">
                  <input
                    placeholder="Short description"
                    className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-2 py-1"
                    value={newItem.description}
                    onChange={(e) => setNewItem((s) => ({ ...s, description: e.target.value }))}
                  />
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-end">
                    <button
                      disabled={!canAdd}
                      onClick={() => {
                        const price = Number(newItem.price);
                        onAddProduct({
                          name: newItem.name.trim(),
                          price: isNaN(price) ? 0 : price,
                          description: newItem.description.trim()
                        });
                        setNewItem({ name: '', price: '', description: '' });
                      }}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-emerald-600 text-white hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Plus className="w-4 h-4" /> Add
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
