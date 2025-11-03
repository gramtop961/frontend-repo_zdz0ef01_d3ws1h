import { useEffect, useState } from 'react';
import { Cookie, Dumbbell, Trophy, ShoppingCart, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark';
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-900/60 bg-white/80 dark:bg-neutral-900/80 border-b border-neutral-200 dark:border-neutral-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-white">
          <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
            <Cookie className="w-5 h-5" />
          </div>
          <span className="tracking-tight">Nirla AyurBakes Fit</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#shop" className="text-neutral-600 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition">Shop</a>
          <a href="#dashboard" className="text-neutral-600 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition flex items-center gap-1">
            <Dumbbell className="w-4 h-4" /> Dashboard
          </a>
          <a href="#leaderboard" className="text-neutral-600 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition flex items-center gap-1">
            <Trophy className="w-4 h-4" /> Leaderboard
          </a>
        </div>
        <div className="flex items-center gap-3">
          <button aria-label="Toggle theme" onClick={toggleTheme} className="p-2 rounded-md border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition">
            {dark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-indigo-500" />}
          </button>
          <button className="relative inline-flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-500 transition">
            <ShoppingCart className="w-4 h-4" />
            <span className="hidden sm:inline">Cart</span>
            <span className="absolute -top-1 -right-1 text-[10px] bg-white text-emerald-700 dark:bg-neutral-900 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900 rounded-full px-1.5 py-0.5">2</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
