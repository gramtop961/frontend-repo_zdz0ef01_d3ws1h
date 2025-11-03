import { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import AdminPanel from './components/AdminPanel';
import DashboardSnapshot from './components/DashboardSnapshot';

const inr = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 });

const DEFAULT_PRODUCTS = [
  { id: '1', name: 'Ragi Protein Cookie', price: 149, description: 'High-protein ragi cookie with jaggery sweetness.', tags: ['Ragi', 'Protein'] },
  { id: '2', name: 'Almond Chia Crunch', price: 199, description: 'Almond-rich, omega-3 chia seeds, low sugar.', tags: ['Almond', 'Chia'] },
  { id: '3', name: 'Ayur Spiced Digestive', price: 129, description: 'Digestive blend with ajwain and ginger.', tags: ['Ayur', 'Digestive'] },
];

// Change this to your email to become admin in demo mode
const ADMIN_EMAIL = 'admin@nirla.fit';

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('products');
    return saved ? JSON.parse(saved) : DEFAULT_PRODUCTS;
  });
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (user) localStorage.setItem('user', JSON.stringify(user));
    else localStorage.removeItem('user');
  }, [user]);

  const handleAddToCart = (p) => {
    setCart((c) => [...c, { id: p.id, qty: 1, price: p.price }]);
  };

  const onUpdateProduct = (updated) => {
    setProducts((prev) => prev.map((p) => (p.id === updated.id ? { ...p, ...updated } : p)));
  };

  const onAddProduct = (base) => {
    setProducts((prev) => [{ id: crypto.randomUUID(), ...base }, ...prev]);
  };

  const onDeleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const subtotal = useMemo(() => cart.reduce((sum, item) => sum + (item.price * item.qty), 0), [cart]);

  const login = (email) => {
    const role = email.toLowerCase() === ADMIN_EMAIL.toLowerCase() ? 'admin' : 'user';
    setUser({ email, role });
  };
  const logout = () => setUser(null);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <Navbar
        cartCount={cart.length}
        user={user}
        onLogin={login}
        onLogout={logout}
        theme={theme}
        onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
      />
      <main>
        <Hero />
        <DashboardSnapshot user={user} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 bg-white dark:bg-neutral-900 flex items-center justify-between">
            <div className="text-sm text-neutral-600 dark:text-neutral-300">Cart subtotal</div>
            <div className="text-lg font-semibold text-emerald-700 dark:text-emerald-400">{inr.format(subtotal)}</div>
          </div>
        </div>
        <ProductShowcase products={products} onAddToCart={handleAddToCart} />
        <AdminPanel
          products={products}
          onUpdateProduct={onUpdateProduct}
          onAddProduct={onAddProduct}
          onDeleteProduct={onDeleteProduct}
          user={user}
        />
      </main>
      <footer className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Nirla AyurBakes Fit · Prices in INR
      </footer>
    </div>
  );
}
