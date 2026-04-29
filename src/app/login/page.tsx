"use client";

import { useState } from "react";
import Link from "next/link";
import { signIn, signInWithRedirect } from "aws-amplify/auth";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await signIn({ username: email, password });
      router.push("/");
      router.refresh();
    } catch (err: any) {
      setError(err.message || "An error occurred during sign in.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-[448px] mx-auto px-6 py-24 min-h-[70vh] flex flex-col justify-center">
      <div className="bg-surface-container-lowest border border-outline-variant shadow-[0px_8px_32px_rgba(15,23,42,0.08)] rounded-xl p-8">
        <div className="text-center mb-8">
          <h1 className="font-h1 text-h2 text-on-background mb-2">Welcome Back</h1>
          <p className="text-on-surface-variant font-body-md text-sm">Sign in to your Roamtheory account.</p>
        </div>

        {error && (
          <div className="bg-error-container text-on-error-container p-4 rounded-lg mb-6 text-sm border border-red-200">
            {error}
          </div>
        )}

        <button 
          type="button"
          onClick={() => signInWithRedirect({ provider: 'Google' })}
          className="w-full py-3 bg-white border border-outline-variant text-slate-800 rounded-lg font-bold tracking-wide hover:bg-slate-50 transition-all flex items-center justify-center group mb-6 shadow-sm"
        >
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5 mr-3" />
          Continue with Google
        </button>

        <div className="flex items-center mb-6">
          <div className="flex-grow h-px bg-outline-variant"></div>
          <span className="px-3 text-on-surface-variant text-sm font-medium">Or continue with email</span>
          <div className="flex-grow h-px bg-outline-variant"></div>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2">Email Address</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="nomad@example.com"
            />
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block font-label-caps text-label-caps text-on-surface-variant">Password</label>
              <Link href="#" className="text-[10px] font-bold text-primary hover:underline uppercase tracking-widest">Forgot?</Link>
            </div>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-4 bg-slate-900 text-white rounded-lg font-bold tracking-wide hover:bg-slate-800 transition-all flex items-center justify-center group disabled:opacity-70 disabled:cursor-not-allowed mt-4"
          >
            {loading ? "Signing in..." : "Sign In"}
            {!loading && <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>}
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-on-surface-variant">
          Don't have an account?{" "}
          <Link href="/register" className="font-bold text-primary hover:underline">
            Create one
          </Link>
        </div>
      </div>
    </main>
  );
}
