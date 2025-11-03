import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import DashboardSnapshot from './components/DashboardSnapshot';

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

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <Navbar />
      <main>
        <Hero />
        <ProductShowcase />
        <DashboardSnapshot />
      </main>
      <Footer />
    </div>
  );
}
