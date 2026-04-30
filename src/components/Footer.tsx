import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full mt-20 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 py-16 max-w-[1280px] mx-auto font-['Space_Grotesk'] text-sm tracking-wide">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <span className="flex items-center justify-center w-7 h-7 rounded-md bg-slate-900 dark:bg-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-white dark:text-slate-900">
                <circle cx="12" cy="5" r="2"/>
                <line x1="12" y1="7" x2="12" y2="19"/>
                <path d="M5 12H2a10 10 0 0 0 20 0h-3"/>
                <line x1="7" y1="8" x2="17" y2="16" stroke="#f97316" strokeWidth="1.8"/>
              </svg>
            </span>
            <span className="text-base font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
              ANCHOR<span className="text-orange-500">NONE</span>
            </span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
            © 2026 AnchorNone. No anchor, no limits.
          </p>
          <div className="flex space-x-4">
            <Link className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
              <span className="material-symbols-outlined">public</span>
            </Link>
            <Link className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
              <span className="material-symbols-outlined">mail</span>
            </Link>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 dark:text-slate-50 mb-6 uppercase tracking-widest text-[10px]">Support</h4>
          <ul className="space-y-4">
            <li><Link className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:underline transition-all" href="#">Shipping</Link></li>
            <li><Link className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:underline transition-all" href="#">Returns</Link></li>
            <li><Link className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:underline transition-all" href="#">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 dark:text-slate-50 mb-6 uppercase tracking-widest text-[10px]">Company</h4>
          <ul className="space-y-4">
            <li><Link className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:underline transition-all" href="#">Newsletter</Link></li>
            <li><Link className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:underline transition-all" href="#">Privacy</Link></li>
            <li><Link className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:underline transition-all" href="#">Terms</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 dark:text-slate-50 mb-6 uppercase tracking-widest text-[10px]">Join the Network</h4>
          <p className="text-slate-500 dark:text-slate-400 mb-4">Get early access to drops and exclusive field notes.</p>
          <div className="flex">
            <input className="bg-white border border-slate-200 px-4 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-slate-900" placeholder="email@address.com" type="email" />
            <button className="bg-slate-900 text-white px-4 py-2 hover:bg-slate-800 transition-colors">
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
