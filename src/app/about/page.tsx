import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="font-['Space_Grotesk'] antialiased bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/about-hero.png"
            alt="Person working remotely with a stunning view"
            fill
            className="object-cover object-center brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-orange-500 font-bold tracking-[0.2em] uppercase text-sm mb-4">
            Our Philosophy
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            No Anchor. <br className="md:hidden" /> No Limits.
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-['Inter']">
            We build premium gear and apparel for the untethered professional. Designed for performance, engineered for freedom.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-6 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Born from the desire to roam.
            </h2>
            <div className="space-y-6 text-slate-600 dark:text-slate-400 font-['Inter'] text-lg leading-relaxed">
              <p>
                AnchorNone was founded on a simple principle: the world is too big to be tethered to a single desk. We are a collective of digital nomads, creators, and professionals who believe that your environment shapes your output.
              </p>
              <p>
                We grew tired of choosing between technical gear that looked out of place in a city café, and stylish apparel that couldn't handle the rigors of global travel. So we created our own.
              </p>
              <p>
                Every piece in our collection is rigorously tested across time zones and climates, ensuring it meets the demanding standards of the modern untethered lifestyle.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <div className="bg-slate-100 dark:bg-slate-900 rounded-2xl aspect-[4/5] flex items-center justify-center p-8 text-center">
                <div>
                  <span className="material-symbols-outlined text-4xl text-orange-500 mb-2">flight_takeoff</span>
                  <h3 className="font-bold text-slate-900 dark:text-white text-xl">Travel Ready</h3>
                </div>
              </div>
              <div className="bg-slate-100 dark:bg-slate-900 rounded-2xl aspect-square flex items-center justify-center p-8 text-center">
                <div>
                  <span className="material-symbols-outlined text-4xl text-orange-500 mb-2">laptop_mac</span>
                  <h3 className="font-bold text-slate-900 dark:text-white text-xl">Work Anywhere</h3>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-100 dark:bg-slate-900 rounded-2xl aspect-square flex items-center justify-center p-8 text-center">
                <div>
                  <span className="material-symbols-outlined text-4xl text-orange-500 mb-2">layers</span>
                  <h3 className="font-bold text-slate-900 dark:text-white text-xl">Durable Build</h3>
                </div>
              </div>
              <div className="bg-slate-100 dark:bg-slate-900 rounded-2xl aspect-[4/5] flex items-center justify-center p-8 text-center">
                <div>
                  <span className="material-symbols-outlined text-4xl text-orange-500 mb-2">public</span>
                  <h3 className="font-bold text-slate-900 dark:text-white text-xl">Global Community</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-24 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to cut the cord?
          </h2>
          <p className="text-xl text-slate-400 font-['Inter'] mb-10">
            Join thousands of untethered professionals exploring the world with AnchorNone gear.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/"
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg transition-colors w-full sm:w-auto"
            >
              Shop the Collection
            </Link>
            <Link 
              href="/collections"
              className="bg-transparent border border-slate-600 hover:border-white text-white font-bold py-4 px-8 rounded-lg transition-colors w-full sm:w-auto"
            >
              View Categories
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
