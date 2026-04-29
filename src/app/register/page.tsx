"use client";

import { useState } from "react";
import Link from "next/link";
import { signUp, confirmSignUp, signInWithRedirect } from "aws-amplify/auth";
import { useRouter } from "next/navigation";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationCode, setConfirmationCode] = useState("");
  const [step, setStep] = useState<"SIGN_UP" | "CONFIRM">("SIGN_UP");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await signUp({
        username: email,
        password,
        options: {
          userAttributes: {
            email,
          },
        },
      });
      setStep("CONFIRM");
    } catch (err: any) {
      setError(err.message || "An error occurred during sign up.");
    } finally {
      setLoading(false);
    }
  };

  const handleConfirm = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await confirmSignUp({ username: email, confirmationCode });
      // After confirmation, they can log in
      router.push("/login");
    } catch (err: any) {
      setError(err.message || "An error occurred during confirmation.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-[448px] mx-auto px-6 py-24 min-h-[70vh] flex flex-col justify-center">
      <div className="bg-surface-container-lowest border border-outline-variant shadow-[0px_8px_32px_rgba(15,23,42,0.08)] rounded-xl p-8">
        
        {step === "SIGN_UP" ? (
          <>
            <div className="text-center mb-8">
              <h1 className="font-h1 text-h2 text-on-background mb-2">Create Account</h1>
              <p className="text-on-surface-variant font-body-md text-sm">Join Roamtheory to track orders and gear.</p>
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

            <form onSubmit={handleSignUp} className="space-y-5">
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
                <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2">Password</label>
                <input 
                  type="password" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="••••••••"
                />
                <p className="text-[10px] text-on-surface-variant mt-2">Must be at least 8 characters long.</p>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-4 bg-slate-900 text-white rounded-lg font-bold tracking-wide hover:bg-slate-800 transition-all flex items-center justify-center group disabled:opacity-70 disabled:cursor-not-allowed mt-4"
              >
                {loading ? "Creating..." : "Create Account"}
                {!loading && <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>}
              </button>
            </form>

            <div className="mt-8 text-center text-sm text-on-surface-variant">
              Already have an account?{" "}
              <Link href="/login" className="font-bold text-primary hover:underline">
                Sign in
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="text-center mb-8">
              <h1 className="font-h1 text-h2 text-on-background mb-2">Check Your Email</h1>
              <p className="text-on-surface-variant font-body-md text-sm">We've sent a verification code to {email}.</p>
            </div>

            {error && (
              <div className="bg-error-container text-on-error-container p-4 rounded-lg mb-6 text-sm border border-red-200">
                {error}
              </div>
            )}

            <form onSubmit={handleConfirm} className="space-y-5">
              <div>
                <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2">Verification Code</label>
                <input 
                  type="text" 
                  required
                  value={confirmationCode}
                  onChange={(e) => setConfirmationCode(e.target.value)}
                  className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-center tracking-widest text-lg"
                  placeholder="123456"
                />
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-4 bg-slate-900 text-white rounded-lg font-bold tracking-wide hover:bg-slate-800 transition-all flex items-center justify-center group disabled:opacity-70 disabled:cursor-not-allowed mt-4"
              >
                {loading ? "Verifying..." : "Verify & Continue"}
                {!loading && <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">check</span>}
              </button>
            </form>
            
            <div className="mt-8 text-center text-sm text-on-surface-variant">
              <button 
                onClick={() => setStep("SIGN_UP")}
                className="font-bold text-primary hover:underline"
              >
                Go back
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
