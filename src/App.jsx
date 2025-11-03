import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import AdminPanel from './components/AdminPanel';

function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-neutral-600 dark:text-neutral-400">© {new Date().getFullYear()} Nirla AyurBakes Fit · All rights reserved</p>
        <div className="flex items-center gap-4 text-neutral-600 dark:text-neutral-400">
          <a href="#" className="hover:text-emerald-600 dark:hover:text-emerald-300">Privacy</a>
          <a href="#" className="hover:text-emerald-600 dark:hover:text-emerald-300">Terms</a>
          <a href="#" className="hover:text-emerald-600 dark:hover:text-emerald-300">Contact</a>
        </div>
      </div>
    </footer>
  );
}

const initialProducts = [
  {
    id: 1,
    name: 'Tulsi Almond Crunch',
    price: 6.99,
    description: 'Calming tulsi with roasted almonds for sustained energy.',
    tags: ['vegan', 'gluten-free'],
    nutrition: { calories: 140, protein: '5g', fiber: '4g', sugar: '3g' }
  },
  {
    id: 2,
    name: 'Ashwagandha Choco Bites',
    price: 7.49,
    description: 'Adaptogenic boost with rich cacao and coconut sugar.',
    tags: ['vegan'],
    nutrition: { calories: 150, protein: '6g', fiber: '5g', sugar: '4g' }
  },
  {
    id: 3,
    name: 'Ginger Sesame Thins',
    price: 5.99,
    description: 'Zesty ginger with crunchy sesame for a metabolism lift.',
    tags: ['gluten-free'],
    nutrition: { calories: 120, protein: '4g', fiber: '3g', sugar: '2g' }
  }
];

export default function App() {
  const [products, setProducts] = useState(initialProducts);

  const updateProduct = (id, patch) => {
    setProducts((prev) => prev.map((p) => (p.id === id ? { ...p, ...patch } : p)));
  };

  const addProduct = ({ name, price, description }) => {
    setProducts((prev) => [
      ...prev,
      {
        id: prev.length ? Math.max(...prev.map((p) => p.id)) + 1 : 1,
        name,
        price,
        description,
        tags: ['vegan'],
        nutrition: { calories: 130, protein: '5g', fiber: '4g', sugar: '3g' }
      }
    ]);
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <Navbar />
      <main>
        <Hero />
        <ProductShowcase products={products} onAddToCart={() => {}} />
        <AdminPanel
          products={products}
          onUpdateProduct={updateProduct}
          onAddProduct={addProduct}
          onDeleteProduct={deleteProduct}
        />
      </main>
      <Footer />
    </div>
  );
}
