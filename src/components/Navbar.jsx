import { useMemo, useState } from 'react';
import { ShoppingCart, Sun, Moon, LogIn, LogOut, User } from 'lucide-react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar({ cartCount = 0, user, onLogin, onLogout, theme, onToggleTheme }) {
  const [openAuth, setOpenAuth] = useState(false);
  const [email, setEmail] = useState('');

  const isAuthed = !!user;
  const initials = useMemo(() => (user?.email ? user.email[0].toUpperCase() : 'N'), [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      onLogin(email.trim());
      setEmail('');
      setOpenAuth(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/70 dark:bg-neutral-900/70 backdrop-blur border-b border-neutral-200 dark:border-neutral-800">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white font-bold">
              N
            </div>
            <span className="font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              Nirla AyurBakes Fit
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#shop" className="hover:text-emerald-600 dark:hover:text-emerald-400">Shop</a>
            <a href="#about" className="hover:text-emerald-600 dark:hover:text-emerald-400">About</a>
            <a href="#contact" className="hover:text-emerald-600 dark:hover:text-emerald-400">Contact</a>
          </div>

          <div className="flex items-center gap-2">
            <button
              aria-label="Toggle theme"
              onClick={onToggleTheme}
              className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <div className="relative">
              <button className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 relative">
                <ShoppingCart size={18} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-600 text-white">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

            {!isAuthed ? (
              <div className="relative">
                <button
                  onClick={() => setOpenAuth((v) => !v)}
                  className="inline-flex items-center gap-1 px-3 py-2 rounded-md bg-emerald-600 text-white text-sm hover:bg-emerald-700"
                >
                  <LogIn size={16} /> Sign in
                </button>
                {openAuth && (
                  <div className="absolute right-0 mt-2 w-72 p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-lg">
                    <h3 className="text-sm font-medium mb-2">Sign in with email</h3>
                    <form onSubmit={handleSubmit} className="space-y-2">
                      <input
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent outline-none focus:ring-2 focus:ring-emerald-500"
                        required
                      />
                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-emerald-600 text-white text-sm hover:bg-emerald-700"
                      >
                        <LogIn size={16} /> Continue
                      </button>
                      <p className="text-[12px] text-neutral-500">Basic demo sign-in. No password. Email defines your role.</p>
                    </form>
                  </div>
                )}
              </div>
            ) : (
              <div className="relative">
                <button onClick={() => setOpenAuth((v) => !v)} className="flex items-center gap-2 px-3 py-2 rounded-md border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800">
                  <div className="h-6 w-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">
                    {initials}
                  </div>
                  <span className="hidden sm:block text-sm">{user.email}</span>
                </button>
                {openAuth && (
                  <div className="absolute right-0 mt-2 w-64 p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-lg">
                    <div className="text-sm mb-2 flex items-center gap-2">
                      <User size={14} />
                      <div className="flex-1">
                        <div className="font-medium">{user.role === 'admin' ? 'Admin' : 'User'}</div>
                        <div className="text-neutral-500 truncate">{user.email}</div>
                      </div>
                    </div>
                    <button onClick={() => { onLogout(); setOpenAuth(false); }} className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-sm">
                      <LogOut size={16} /> Sign out
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
