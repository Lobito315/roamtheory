"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroVideo() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger text animations after mount
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="mb-xl relative rounded-xl overflow-hidden min-h-[520px] md:min-h-[620px]">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
      >
        <source
          src="https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4"
          type="video/mp4"
        />
        <source
          src="https://videos.pexels.com/video-files/2278095/2278095-uhd_2560_1440_30fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/10" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full min-h-[520px] md:min-h-[620px] px-8 md:px-16 py-16">
        <span
          className={`inline-block text-orange-400 text-xs font-bold uppercase tracking-[0.25em] mb-5 transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "0ms" }}
        >
          No Anchor. No Limits.
        </span>

        <h1
          className={`text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6 max-w-2xl transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          Gear for the<br />
          <span className="text-orange-400">Untethered.</span>
        </h1>

        <p
          className={`text-base md:text-lg text-white/75 mb-10 leading-relaxed transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "300ms", maxWidth: "420px" }}
        >
          Premium gear and apparel for the professional traveler. Built for performance, designed for freedom.
        </p>

        <div
          className={`flex flex-wrap items-center gap-4 transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "450ms" }}
        >
          <a
            href="#products"
            className="bg-orange-500 hover:bg-orange-400 text-white px-8 py-4 font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/30"
          >
            Shop New Arrivals
          </a>
          <Link
            href="/collections"
            className="text-white border border-white/30 hover:border-orange-400 hover:text-orange-400 px-8 py-4 font-semibold text-sm uppercase tracking-widest transition-all duration-300"
          >
            View Collections
          </Link>
        </div>
      </div>

      {/* Bottom fade for smooth transition */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#fcf8fa]/20 to-transparent pointer-events-none" />
    </section>
  );
}
