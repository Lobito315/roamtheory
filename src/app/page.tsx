"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

const PRODUCTS = [
  {
    id: "nomad-shell-backpack",
    name: "Nomad Shell Backpack",
    price: 245,
    category: "TECH / CARRY",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAo1rJTNroF_9Er5yaL_2erunS615rNIKkHIyGpSyUPYpCOAd768YPriG_HFlJubebzog99w8ckDFA5Cas4iv5a3OLB-F1hqTWpmBWrMSMz_d7m3JJJ7aoMvTdamHJBsP0ZIhgT6myPUpDxmqscA8t8WkPOykYCPFRLHxWJ512IW2TYMl0DQMDynhnB3KBB5JkP5gsQAWHv34buRSE4w1u117DMIKEzK8Mc3pwjXsZIrnB6YVaAsdUjYFrp13SzLgAXiosAXpI0PvM",
    badge: "New",
    badgeColor: "bg-slate-900",
    rating: 4.9,
  },
  {
    id: "aero-shield-parka",
    name: "Aero-Shield Parka 01",
    price: 480,
    category: "APPAREL / OUTERWEAR",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkA_A-kQDi_xpJBQcCUeiIyZ_0O8CPWrvM3dM3RX5jWi2LheLtjtkyoF_JZIq-Qm-aWcmpvQEqRoZpN5sQsKaRHstb1HOZ1FWIP7cKAYHSFgo2vgyYYXQ6vD-4kloCkb1Tu4krIILEUpVrLj66CujrnIna2E8nDwEJjBCScyYw01zIfiTBolcjttH_QSqj3dSJ-ioBjR1o3dYS1bOGZbC0DA4-IxL7-4p9-74MyHxmJ0f0cn52J3e6n6PgBb8lJnu4ljMgDbAnXrI",
    badge: null,
    rating: null,
  },
  {
    id: "silence-pro-headphones",
    name: "Silence Pro Headphones",
    price: 320,
    category: "TECH / AUDIO",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDy1WWHhNPqn27q6L5G46Ry4sFRoKA9Nci2ksuwnFBgRIkE2Iyp9ciAxdD3K_kVg-Lmv5KkpJd7xKdcy17lNAsCyDLRZfWYT-6ldQxt-DamM1oeKe-VGT8DRLtlnlvTvCEzIgTNHIx2Dx44xYjYqiKo-MzlsMNTdd94w0fVM3V8-FgHll5PmTI7uu13K1PDiBNAhYOyh3JspslP6TcMODuIzqNbjCLc96wmjS54INrJ4UOsg9qtwIXndx8NtGS30g4HxX6XhUp8sU",
    badge: null,
    rating: null,
  },
  {
    id: "vacuum-insulated-flask",
    name: "Vacuum Insulated Flask",
    price: 45,
    category: "LIFESTYLE / DRINKWARE",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuABZkd2Vb3W5fLhSDaRlhSg2Bd8KZABFBTDwh5QcfCvLSBzhRtxROOQe9EjiIukcBOFWVX0iANiytugYWmfTN-RWTsLc1k5PT2wEZih_YjHsbhMVB242mqYS50cKPrRoMD4qJP08vQnK7OZYlomAgtuvq6HNzxRgFUXKcW3YDBBbtoBceeWs7s879Hv_nguZTIO3lsZD-T_L-jD6IDrH4E8MTp47PXuA0Cp4N76HizcyKVbqd6gcl5ktEYNsNljYSiEkJuLaq5InJs",
    badge: null,
    rating: null,
  },
  {
    id: "core-chronograph-v2",
    name: "Core Chronograph V2",
    price: 185,
    originalPrice: 220,
    category: "TECH / WEARABLES",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBexz9eLAXZFaBY6MGHWtw27QeNHySA88UyqW8EciQWsabb8ABr5waMq_QVC6xRAdt4s4y_sc9v1p4iiJfB46R2NOVp2ygms41uC2eNzUOP9bjFy3urYDKjpstOk0rOvotFmtViIbbk2wLQUJJu3SEPUtyi0axVfuqX7Bg-QbPhh_jON6obvKNDFa456dsDmLrt53XdPLivr3r8PsdL6z167io4ZHbF_fCk0bqnrZintJNyKSR8TUYlnrg_9Ektdamp__fYrhVUbh0",
    badge: "Sale",
    badgeColor: "bg-orange-600",
    rating: null,
  },
  {
    id: "modular-glasses-case",
    name: "Modular Glasses Case",
    price: 75,
    category: "LIFESTYLE / ACCS",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAV2b3FVtXFwJiM6Aa7FK8fpl8g_MQEVXGWoM97lWikWGA6bvE-PKu7HQPZ_DVcwq0305AHvdQ9GsTSOa5rvu2sh4km7VNHQQ2EUbMj9rfXtjhbS_vopwIG9wj1sG4fXYJh5fyeT-be6NQyFqAZ19GStIQKrzywx9ebAUQn5heLUgvcw6cHX3uxv10WJEAMflBnYR8_ij4gWHU8xxh6ZHnJYxpin-vANbNt4N5Mkw2-cI1h1yNwxhk17-ZSzBe7m6PaFIUhJlKt1g",
    badge: null,
    rating: null,
  },
];

function AddToCartButton({ product }: { product: typeof PRODUCTS[0] }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <button
      onClick={handleAdd}
      className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all active:scale-90 ${
        added
          ? "bg-green-600 border-green-600 text-white"
          : "border-slate-900 hover:bg-slate-900 hover:text-white"
      }`}
    >
      <span className="material-symbols-outlined text-[18px]">
        {added ? "check" : "add"}
      </span>
    </button>
  );
}

export default function Home() {
  return (
    <main className="max-w-[1280px] mx-auto px-6 pt-12 pb-xl">
      {/* Hero Section */}
      <section className="mb-xl relative rounded-xl overflow-hidden aspect-[21/9] min-h-[400px]">
        <img
          alt="Digital nomad working in a modern scenic location"
          className="absolute inset-0 w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAl5k7OSn6cyAQn0yS2t_o0r5CbWOuLw79ckyLa9W52r2jr7whuzAONjQxncfZ3w0G1OELkytMtdSjjT9swHa7lX32alTyIF7L-88AnmMCccqaYo1IBv96jF6B8EDmB7xZ80QWz3suE5t2sX16VlQTmB6Jtv-gXRa-m0VmuHJn8k0COK6cFbShH6SBnsUPDBgAXLpNlluFkgW8PyL4liaK9O61MhOrSG9LMzPSBBvXG0z_wV80-i51IlTxv21RpKAc_Mv6VI2fe9rY"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex items-center">
          <div className="max-w-xl px-12">
            <span className="text-orange-500 font-label-caps uppercase tracking-widest mb-4 block">Field Tested Gear</span>
            <h1 className="font-h1 text-h1 text-white mb-6">Equipping the Modern Nomad</h1>
            <p className="text-body-lg text-white/80 mb-8 max-w-md">Precision-engineered tools for the professional traveler. Built for performance, designed for the journey.</p>
            <div className="flex items-center space-x-4">
              <a className="bg-white text-slate-900 px-8 py-4 font-bold text-sm tracking-widest uppercase hover:bg-orange-600 hover:text-white transition-all duration-300" href="#products">Shop New Arrivals</a>
              <a className="text-white border-b-2 border-white/30 hover:border-orange-600 transition-colors py-1 font-semibold text-sm" href="#">View Lookbook</a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="mb-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {[
            { label: "Apparel", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkA_A-kQDi_xpJBQcCUeiIyZ_0O8CPWrvM3dM3RX5jWi2LheLtjtkyoF_JZIq-Qm-aWcmpvQEqRoZpN5sQsKaRHstb1HOZ1FWIP7cKAYHSFgo2vgyYYXQ6vD-4kloCkb1Tu4krIILEUpVrLj66CujrnIna2E8nDwEJjBCScyYw01zIfiTBolcjttH_QSqj3dSJ-ioBjR1o3dYS1bOGZbC0DA4-IxL7-4p9-74MyHxmJ0f0cn52J3e6n6PgBb8lJnu4ljMgDbAnXrI" },
            { label: "Tech Accessories", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAo1rJTNroF_9Er5yaL_2erunS615rNIKkHIyGpSyUPYpCOAd768YPriG_HFlJubebzog99w8ckDFA5Cas4iv5a3OLB-F1hqTWpmBWrMSMz_d7m3JJJ7aoMvTdamHJBsP0ZIhgT6myPUpDxmqscA8t8WkPOykYCPFRLHxWJ512IW2TYMl0DQMDynhnB3KBB5JkP5gsQAWHv34buRSE4w1u117DMIKEzK8Mc3pwjXsZIrnB6YVaAsdUjYFrp13SzLgAXiosAXpI0PvM" },
            { label: "Lifestyle Essentials", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuABZkd2Vb3W5fLhSDaRlhSg2Bd8KZABFBTDwh5QcfCvLSBzhRtxROOQe9EjiIukcBOFWVX0iANiytugYWmfTN-RWTsLc1k5PT2wEZih_YjHsbhMVB242mqYS50cKPrRoMD4qJP08vQnK7OZYlomAgtuvq6HNzxRgFUXKcW3YDBBbtoBceeWs7s879Hv_nguZTIO3lsZD-T_L-jD6IDrH4E8MTp47PXuA0Cp4N76HizcyKVbqd6gcl5ktEYNsNljYSiEkJuLaq5InJs" },
          ].map(({ label, img }) => (
            <a key={label} className="group relative aspect-[16/9] md:aspect-[4/3] overflow-hidden bg-slate-200 border border-slate-200 cursor-pointer" href="#">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.85] group-hover:brightness-90" alt={label} src={img} />
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/60 to-transparent">
                <h2 className="font-h2 text-white text-2xl mb-1">{label}</h2>
                <p className="text-white/80 text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform">
                  <span>Explore Collection</span>
                  <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <div id="products" className="flex flex-col md:flex-row gap-lg">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-xl">
            <section>
              <h3 className="font-h3 text-label-caps text-on-surface-variant uppercase mb-md tracking-widest">Category</h3>
              <div className="space-y-3">
                {["Apparel", "Tech", "Lifestyle"].map((cat) => (
                  <label key={cat} className="flex items-center cursor-pointer group">
                    <input defaultChecked={cat === "Apparel"} className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
                    <span className="ml-3 font-medium text-slate-600 group-hover:text-primary transition-colors">{cat}</span>
                  </label>
                ))}
              </div>
            </section>
            <section>
              <h3 className="font-h3 text-label-caps text-on-surface-variant uppercase mb-md tracking-widest">Price Range</h3>
              <div className="space-y-4">
                <input className="w-full h-1.5 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary" max="1000" min="0" step="50" type="range" />
                <div className="flex justify-between text-label-caps text-slate-400">
                  <span>$0</span><span>$1,000+</span>
                </div>
              </div>
            </section>
            <section>
              <h3 className="font-h3 text-label-caps text-on-surface-variant uppercase mb-md tracking-widest">Availability</h3>
              <div className="flex items-center justify-between p-3 bg-surface-container-low rounded-lg border border-slate-100">
                <span className="text-sm font-medium">In Stock Only</span>
                <button className="w-10 h-5 bg-primary rounded-full relative transition-colors">
                  <span className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></span>
                </button>
              </div>
            </section>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-grow">
          <div className="flex justify-between items-center mb-8">
            <span className="text-label-caps text-on-surface-variant">Showing {PRODUCTS.length} products</span>
            <div className="flex items-center space-x-2">
              <span className="text-label-caps text-on-surface-variant">Sort by</span>
              <select className="bg-transparent border-none font-medium text-sm focus:ring-0 cursor-pointer">
                <option>Newest Arrivals</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Best Rated</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {PRODUCTS.map((product) => (
              <div key={product.id} className="group border border-slate-200 bg-white product-card-shadow overflow-hidden flex flex-col">
                <div className="aspect-[4/5] overflow-hidden bg-slate-100 relative">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={product.name} src={product.image} />
                  {product.badge && (
                    <div className={`absolute top-4 ${product.badge === "Sale" ? "right-4" : "left-4"}`}>
                      <span className={`${product.badgeColor} text-white px-2 py-1 text-[10px] font-bold uppercase tracking-widest`}>{product.badge}</span>
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-label-caps text-slate-400">{product.category}</span>
                    {product.rating && (
                      <div className="flex items-center">
                        <span className="material-symbols-outlined text-[14px] text-orange-600" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="text-[12px] font-bold ml-1">{product.rating}</span>
                      </div>
                    )}
                  </div>
                  <h3 className="font-h3 text-body-lg text-primary mb-4 group-hover:text-orange-600 transition-colors">{product.name}</h3>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="font-h3 text-h3">${product.price}</span>
                      {"originalPrice" in product && product.originalPrice && (
                        <span className="text-slate-400 line-through text-sm">${product.originalPrice}</span>
                      )}
                    </div>
                    <AddToCartButton product={product} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-xl flex justify-center items-center space-x-4">
            <button className="w-12 h-12 flex items-center justify-center border border-slate-200 hover:bg-slate-100 transition-colors opacity-50 cursor-not-allowed">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-12 h-12 flex items-center justify-center bg-slate-900 text-white font-bold">1</button>
            <button className="w-12 h-12 flex items-center justify-center border border-slate-200 hover:bg-slate-100 transition-colors">2</button>
            <button className="w-12 h-12 flex items-center justify-center border border-slate-200 hover:bg-slate-100 transition-colors">3</button>
            <button className="w-12 h-12 flex items-center justify-center border border-slate-200 hover:bg-slate-100 transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
