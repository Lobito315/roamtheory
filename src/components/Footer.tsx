import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full mt-20 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 py-16 max-w-[1280px] mx-auto font-['Space_Grotesk'] text-sm tracking-wide">
        <div className="col-span-1 md:col-span-1">
          <span className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-4 block">Roamtheory</span>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
            © 2024 Roamtheory. Built for the modern nomad.
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
