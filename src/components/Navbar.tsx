"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getCurrentUser, signOut } from "aws-amplify/auth";
import { Hub } from "aws-amplify/utils";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
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

  return (
    <nav className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm sticky top-0 z-50">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-[1280px] mx-auto font-['Space_Grotesk'] antialiased">
        <Link className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50" href="/">
          Roamtheory
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link className="text-slate-900 dark:text-white font-semibold border-b-2 border-orange-600 pb-1" href="/">
            Shop
          </Link>
          <Link className="text-slate-500 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-white transition-colors" href="/collections">
            Collections
          </Link>
          <Link className="text-slate-500 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-white transition-colors" href="#">
            About
          </Link>
        </div>
        <div className="flex items-center space-x-5">
          <button className="p-2 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 rounded-md transition-all active:opacity-80 active:scale-95">
            <span className="material-symbols-outlined text-slate-900 dark:text-slate-50">search</span>
          </button>
          
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
