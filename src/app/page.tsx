import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-[1280px] mx-auto px-6 pt-12 pb-xl">
      {/* New Visual Hero Section */}
      <section className="mb-xl relative rounded-xl overflow-hidden aspect-[21/9] min-h-[400px]">
        <img alt="Digital nomad working in a modern scenic location" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAl5k7OSn6cyAQn0yS2t_o0r5CbWOuLw79ckyLa9W52r2jr7whuzAONjQxncfZ3w0G1OELkytMtdSjjT9swHa7lX32alTyIF7L-88AnmMCccqaYo1IBv96jF6B8EDmB7xZ80QWz3suE5t2sX16VlQTmB6Jtv-gXRa-m0VmuHJn8k0COK6cFbShH6SBnsUPDBgAXLpNlluFkgW8PyL4liaK9O61MhOrSG9LMzPSBBvXG0z_wV80-i51IlTxv21RpKAc_Mv6VI2fe9rY" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex items-center">
          <div className="max-w-xl px-12">
            <span className="text-orange-500 font-label-caps uppercase tracking-widest mb-4 block">Field Tested Gear</span>
            <h1 className="font-h1 text-h1 text-white mb-6">Equipping the Modern Nomad</h1>
            <p className="text-body-lg text-white/80 mb-8 max-w-md">Precision-engineered tools for the professional traveler. Built for performance, designed for the journey.</p>
            <div className="flex items-center space-x-4">
              <Link className="bg-white text-slate-900 px-8 py-4 font-bold text-sm tracking-widest uppercase hover:bg-orange-600 hover:text-white transition-all duration-300" href="#">Shop New Arrivals</Link>
              <Link className="text-white border-b-2 border-white/30 hover:border-orange-600 transition-colors py-1 font-semibold text-sm" href="#">View Lookbook</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections Section */}
      <section className="mb-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <Link className="group relative aspect-[16/9] md:aspect-[4/3] overflow-hidden bg-slate-200 border border-slate-200" href="#">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.85] group-hover:brightness-90" alt="modern technical apparel collection" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkA_A-kQDi_xpJBQcCUeiIyZ_0O8CPWrvM3dM3RX5jWi2LheLtjtkyoF_JZIq-Qm-aWcmpvQEqRoZpN5sQsKaRHstb1HOZ1FWIP7cKAYHSFgo2vgyYYXQ6vD-4kloCkb1Tu4krIILEUpVrLj66CujrnIna2E8nDwEJjBCScyYw01zIfiTBolcjttH_QSqj3dSJ-ioBjR1o3dYS1bOGZbC0DA4-IxL7-4p9-74MyHxmJ0f0cn52J3e6n6PgBb8lJnu4ljMgDbAnXrI" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/60 to-transparent">
              <h2 className="font-h2 text-white text-2xl mb-1">Apparel</h2>
              <p className="text-white/80 text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform">
                <span>Explore Collection</span>
                <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
              </p>
            </div>
          </Link>
          <Link className="group relative aspect-[16/9] md:aspect-[4/3] overflow-hidden bg-slate-200 border border-slate-200" href="#">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.85] group-hover:brightness-90" alt="sleek tech accessories and carry gear" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo1rJTNroF_9Er5yaL_2erunS615rNIKkHIyGpSyUPYpCOAd768YPriG_HFlJubebzog99w8ckDFA5Cas4iv5a3OLB-F1hqTWpmBWrMSMz_d7m3JJJ7aoMvTdamHJBsP0ZIhgT6myPUpDxmqscA8t8WkPOykYCPFRLHxWJ512IW2TYMl0DQMDynhnB3KBB5JkP5gsQAWHv34buRSE4w1u117DMIKEzK8Mc3pwjXsZIrnB6YVaAsdUjYFrp13SzLgAXiosAXpI0PvM" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/60 to-transparent">
              <h2 className="font-h2 text-white text-2xl mb-1">Tech Accessories</h2>
              <p className="text-white/80 text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform">
                <span>Explore Collection</span>
                <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
              </p>
            </div>
          </Link>
          <Link className="group relative aspect-[16/9] md:aspect-[4/3] overflow-hidden bg-slate-200 border border-slate-200" href="#">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.85] group-hover:brightness-90" alt="minimal lifestyle essentials" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABZkd2Vb3W5fLhSDaRlhSg2Bd8KZABFBTDwh5QcfCvLSBzhRtxROOQe9EjiIukcBOFWVX0iANiytugYWmfTN-RWTsLc1k5PT2wEZih_YjHsbhMVB242mqYS50cKPrRoMD4qJP08vQnK7OZYlomAgtuvq6HNzxRgFUXKcW3YDBBbtoBceeWs7s879Hv_nguZTIO3lsZD-T_L-jD6IDrH4E8MTp47PXuA0Cp4N76HizcyKVbqd6gcl5ktEYNsNljYSiEkJuLaq5InJs" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/60 to-transparent">
              <h2 className="font-h2 text-white text-2xl mb-1">Lifestyle Essentials</h2>
              <p className="text-white/80 text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform">
                <span>Explore Collection</span>
                <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
              </p>
            </div>
          </Link>
        </div>
      </section>

      <div className="flex flex-col md:flex-row gap-lg">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-xl">
            {/* Category Filter */}
            <section>
              <h3 className="font-h3 text-label-caps text-on-surface-variant uppercase mb-md tracking-widest">Category</h3>
              <div className="space-y-3">
                <label className="flex items-center cursor-pointer group">
                  <input defaultChecked className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
                  <span className="ml-3 font-medium text-slate-600 group-hover:text-primary transition-colors">Apparel</span>
                </label>
                <label className="flex items-center cursor-pointer group">
                  <input className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
                  <span className="ml-3 font-medium text-slate-600 group-hover:text-primary transition-colors">Tech</span>
                </label>
                <label className="flex items-center cursor-pointer group">
                  <input className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
                  <span className="ml-3 font-medium text-slate-600 group-hover:text-primary transition-colors">Lifestyle</span>
                </label>
              </div>
            </section>
            {/* Price Filter */}
            <section>
              <h3 className="font-h3 text-label-caps text-on-surface-variant uppercase mb-md tracking-widest">Price Range</h3>
              <div className="space-y-4">
                <input className="w-full h-1.5 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary" max="1000" min="0" step="50" type="range" />
                <div className="flex justify-between text-label-caps text-slate-400">
                  <span>$0</span>
                  <span>$1,000+</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-surface-container-low p-2 rounded border border-slate-200">
                    <span className="text-[10px] uppercase text-slate-400 block">Min</span>
                    <span className="font-medium">$50</span>
                  </div>
                  <div className="bg-surface-container-low p-2 rounded border border-slate-200">
                    <span className="text-[10px] uppercase text-slate-400 block">Max</span>
                    <span className="font-medium">$500</span>
                  </div>
                </div>
              </div>
            </section>
            {/* Availability */}
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
            <span className="text-label-caps text-on-surface-variant">Showing 24 products</span>
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
            {/* Product Card 1 */}
            <div className="group border border-slate-200 bg-white product-card-shadow overflow-hidden flex flex-col">
              <div className="aspect-[4/5] overflow-hidden bg-slate-100 relative">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="minimalist waterproof technical backpack" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo1rJTNroF_9Er5yaL_2erunS615rNIKkHIyGpSyUPYpCOAd768YPriG_HFlJubebzog99w8ckDFA5Cas4iv5a3OLB-F1hqTWpmBWrMSMz_d7m3JJJ7aoMvTdamHJBsP0ZIhgT6myPUpDxmqscA8t8WkPOykYCPFRLHxWJ512IW2TYMl0DQMDynhnB3KBB5JkP5gsQAWHv34buRSE4w1u117DMIKEzK8Mc3pwjXsZIrnB6YVaAsdUjYFrp13SzLgAXiosAXpI0PvM" />
                <div className="absolute top-4 left-4">
                  <span className="bg-slate-900 text-white px-2 py-1 text-[10px] font-bold uppercase tracking-widest">New</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-label-caps text-slate-400">TECH / CARRY</span>
                  <div className="flex items-center">
                    <span className="material-symbols-outlined text-[14px] text-orange-600" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="text-[12px] font-bold ml-1">4.9</span>
                  </div>
                </div>
                <h3 className="font-h3 text-body-lg text-primary mb-4 group-hover:text-orange-600 transition-colors">Nomad Shell Backpack</h3>
                <div className="mt-auto flex items-center justify-between">
                  <span className="font-h3 text-h3">$245</span>
                  <button className="w-10 h-10 rounded-full border border-slate-900 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all active:scale-90">
                    <span className="material-symbols-outlined">add</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="group border border-slate-200 bg-white product-card-shadow overflow-hidden flex flex-col">
              <div className="aspect-[4/5] overflow-hidden bg-slate-100 relative">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="unisex olive green technical parka" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkA_A-kQDi_xpJBQcCUeiIyZ_0O8CPWrvM3dM3RX5jWi2LheLtjtkyoF_JZIq-Qm-aWcmpvQEqRoZpN5sQsKaRHstb1HOZ1FWIP7cKAYHSFgo2vgyYYXQ6vD-4kloCkb1Tu4krIILEUpVrLj66CujrnIna2E8nDwEJjBCScyYw01zIfiTBolcjttH_QSqj3dSJ-ioBjR1o3dYS1bOGZbC0DA4-IxL7-4p9-74MyHxmJ0f0cn52J3e6n6PgBb8lJnu4ljMgDbAnXrI" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-label-caps text-slate-400">APPAREL / OUTERWEAR</span>
                </div>
                <h3 className="font-h3 text-body-lg text-primary mb-4 group-hover:text-orange-600 transition-colors">Aero-Shield Parka 01</h3>
                <div className="mt-auto flex items-center justify-between">
                  <span className="font-h3 text-h3">$480</span>
                  <button className="w-10 h-10 rounded-full border border-slate-900 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all active:scale-90">
                    <span className="material-symbols-outlined">add</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="group border border-slate-200 bg-white product-card-shadow overflow-hidden flex flex-col">
              <div className="aspect-[4/5] overflow-hidden bg-slate-100 relative">
                <img className="w-full h-full object-cover group-focus-within:scale-105 transition-transform duration-700" alt="high-quality over-ear headphones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDy1WWHhNPqn27q6L5G46Ry4sFRoKA9Nci2ksuwnFBgRIkE2Iyp9ciAxdD3K_kVg-Lmv5KkpJd7xKdcy17lNAsCyDLRZfWYT-6ldQxt-DamM1oeKe-VGT8DRLtlnlvTvCEzIgTNHIx2Dx44xYjYqiKo-MzlsMNTdd94w0fVM3V8-FgHll5PmTI7uu13K1PDiBNAhYOyh3JspslP6TcMODuIzqNbjCLc96wmjS54INrJ4UOsg9qtwIXndx8NtGS30g4HxX6XhUp8sU" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-label-caps text-slate-400">TECH / AUDIO</span>
                </div>
                <h3 className="font-h3 text-body-lg text-primary mb-4 group-hover:text-orange-600 transition-colors">Silence Pro Headphones</h3>
                <div className="mt-auto flex items-center justify-between">
                  <span className="font-h3 text-h3">$320</span>
                  <button className="w-10 h-10 rounded-full border border-slate-900 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all active:scale-90">
                    <span className="material-symbols-outlined">add</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 4 */}
            <div className="group border border-slate-200 bg-white product-card-shadow overflow-hidden flex flex-col">
              <div className="aspect-[4/5] overflow-hidden bg-slate-100 relative">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="clean white ceramic insulated travel mug" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABZkd2Vb3W5fLhSDaRlhSg2Bd8KZABFBTDwh5QcfCvLSBzhRtxROOQe9EjiIukcBOFWVX0iANiytugYWmfTN-RWTsLc1k5PT2wEZih_YjHsbhMVB242mqYS50cKPrRoMD4qJP08vQnK7OZYlomAgtuvq6HNzxRgFUXKcW3YDBBbtoBceeWs7s879Hv_nguZTIO3lsZD-T_L-jD6IDrH4E8MTp47PXuA0Cp4N76HizcyKVbqd6gcl5ktEYNsNljYSiEkJuLaq5InJs" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-label-caps text-slate-400">LIFESTYLE / DRINKWARE</span>
                </div>
                <h3 className="font-h3 text-body-lg text-primary mb-4 group-hover:text-orange-600 transition-colors">Vacuum Insulated Flask</h3>
                <div className="mt-auto flex items-center justify-between">
                  <span className="font-h3 text-h3">$45</span>
                  <button className="w-10 h-10 rounded-full border border-slate-900 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all active:scale-90">
                    <span className="material-symbols-outlined">add</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 5 */}
            <div className="group border border-slate-200 bg-white product-card-shadow overflow-hidden flex flex-col">
              <div className="aspect-[4/5] overflow-hidden bg-slate-100 relative">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="luxury digital hybrid wristwatch" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBexz9eLAXZFaBY6MGHWtw27QeNHySA88UyqW8EciQWsabb8ABr5waMq_QVC6xRAdt4s4y_sc9v1p4iiJfB46R2NOVp2ygms41uC2eNzUOP9bjFy3urYDKjpstOk0rOvotFmtViIbbk2wLQUJJu3SEPUtyi0axVfuqX7Bg-QbPhh_jON6obvKNDFa456dsDmLrt53XdPLivr3r8PsdL6z167io4ZHbF_fCk0bqnrZintJNyKSR8TUYlnrg_9Ektdamp__fYrhVUbh0" />
                <div className="absolute top-4 right-4">
                  <span className="bg-orange-600 text-white px-2 py-1 text-[10px] font-bold uppercase tracking-widest">Sale</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-label-caps text-slate-400">TECH / WEARABLES</span>
                </div>
                <h3 className="font-h3 text-body-lg text-primary mb-4 group-hover:text-orange-600 transition-colors">Core Chronograph V2</h3>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="font-h3 text-h3">$185</span>
                    <span className="text-slate-400 line-through text-sm">$220</span>
                  </div>
                  <button className="w-10 h-10 rounded-full border border-slate-900 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all active:scale-90">
                    <span className="material-symbols-outlined">add</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 6 */}
            <div className="group border border-slate-200 bg-white product-card-shadow overflow-hidden flex flex-col">
              <div className="aspect-[4/5] overflow-hidden bg-slate-100 relative">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="sleek black professional leather sunglasses case" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAV2b3FVtXFwJiM6Aa7FK8fpl8g_MQEVXGWoM97lWikWGA6bvE-PKu7HQPZ_DVcwq0305AHvdQ9GsTSOa5rvu2sh4km7VNHQQ2EUbMj9rfXtjhbS_vopwIG9wj1sG4fXYJh5fyeT-be6NQyFqAZ19GStIQKrzywx9ebAUQn5heLUgvcw6cHX3uxv10WJEAMflBnYR8_ij4gWHU8xxh6ZHnJYxpin-vANbNt4N5Mkw2-cI1h1yNwxhk17-ZSzBe7m6PaFIUhJlKt1g" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-label-caps text-slate-400">LIFESTYLE / ACCS</span>
                </div>
                <h3 className="font-h3 text-body-lg text-primary mb-4 group-hover:text-orange-600 transition-colors">Modular Glasses Case</h3>
                <div className="mt-auto flex items-center justify-between">
                  <span className="font-h3 text-h3">$75</span>
                  <button className="w-10 h-10 rounded-full border border-slate-900 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all active:scale-90">
                    <span className="material-symbols-outlined">add</span>
                  </button>
                </div>
              </div>
            </div>
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
