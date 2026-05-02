"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { getCurrentUser, signOut } from "aws-amplify/auth";
import { Hub } from "aws-amplify/utils";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const { totalItems } = useCart();

  useEffect(() => {
    // Check initial session
    const checkUser = async () => {
      try {
        await getCurrentUser();
        setIsAuthenticated(true);
      } catch {
        setIsAuthenticated(false);
      }
    };
    
    checkUser();

    // Listen for auth events
    const unsubscribe = Hub.listen('auth', ({ payload }) => {
      switch (payload.event) {
        case 'signedIn':
          setIsAuthenticated(true);
          break;
        case 'signedOut':
          setIsAuthenticated(false);
          break;
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/?q=${encodeURIComponent(searchQuery.trim())}#products`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  return (
    <nav className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm sticky top-0 z-50">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-[1280px] mx-auto font-['Space_Grotesk'] antialiased">
        <Link className="flex items-center gap-2 group" href="/">
          {/* Anchor icon */}
          <span className="flex items-center justify-center w-8 h-8 rounded-md bg-slate-900 dark:bg-white group-hover:bg-orange-500 dark:group-hover:bg-orange-500 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white dark:text-slate-900">
              <circle cx="12" cy="5" r="2"/>
              <line x1="12" y1="7" x2="12" y2="19"/>
              <path d="M5 12H2a10 10 0 0 0 20 0h-3"/>
              {/* Strike-through for 'freedom' */}
              <line x1="7" y1="8" x2="17" y2="16" stroke="#f97316" strokeWidth="1.8"/>
            </svg>
          </span>
          <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
            ANCHOR<span className="text-orange-500">NONE</span>
          </span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            className={pathname === "/" || pathname?.startsWith("/product") ? "text-slate-900 dark:text-white font-semibold border-b-2 border-orange-600 pb-1" : "text-slate-500 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-white transition-colors"} 
            href="/"
          >
            Shop
          </Link>
          <Link 
            className={pathname === "/collections" ? "text-slate-900 dark:text-white font-semibold border-b-2 border-orange-600 pb-1" : "text-slate-500 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-white transition-colors"} 
            href="/collections"
          >
            Collections
          </Link>
          <Link 
            className={pathname === "/about" ? "text-slate-900 dark:text-white font-semibold border-b-2 border-orange-600 pb-1" : "text-slate-500 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-white transition-colors"} 
            href="/about"
          >
            About
          </Link>
        </div>
        <div className="flex items-center space-x-2 md:space-x-5">
          {/* Search Toggle */}
          <div className="relative flex items-center">
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out flex items-center ${
                isSearchOpen ? "w-48 md:w-64 opacity-100 mr-2" : "w-0 opacity-0"
              }`}
            >
              <form onSubmit={handleSearchSubmit} className="w-full">
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onBlur={() => !searchQuery && setIsSearchOpen(false)}
                  className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-full px-4 py-1.5 text-sm focus:ring-2 focus:ring-orange-500 outline-none text-slate-900 dark:text-white placeholder-slate-400"
                />
              </form>
            </div>
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 rounded-md transition-all active:opacity-80 active:scale-95 z-10"
              aria-label="Toggle search"
            >
              <span className="material-symbols-outlined text-slate-900 dark:text-slate-50">
                {isSearchOpen ? "close" : "search"}
              </span>
            </button>
          </div>
          
          {isAuthenticated ? (
            <div className="relative group">
              <button className="p-2 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 rounded-md transition-all active:opacity-80 active:scale-95 flex items-center">
                <span className="material-symbols-outlined text-slate-900 dark:text-slate-50">person_check</span>
              </button>
              <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-slate-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="p-2">
                  <button onClick={handleSignOut} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md font-medium">
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <Link href="/login" className="p-2 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 rounded-md transition-all active:opacity-80 active:scale-95 flex items-center">
              <span className="material-symbols-outlined text-slate-900 dark:text-slate-50">person</span>
            </Link>
          )}

          <Link href="/cart" className="p-2 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 rounded-md transition-all active:opacity-80 active:scale-95 relative flex items-center justify-center">
            <span className="material-symbols-outlined text-slate-900 dark:text-slate-50">shopping_cart</span>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 bg-orange-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-bounce-once">
                {totalItems > 99 ? "99+" : totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
