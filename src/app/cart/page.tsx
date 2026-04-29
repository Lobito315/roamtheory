import Link from "next/link";
import Image from "next/image";

export default function Cart() {
  return (
    <main className="max-w-[1280px] mx-auto px-6 py-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center space-x-2 text-label-caps font-label-caps text-on-surface-variant mb-8">
        <Link className="hover:text-primary transition-colors" href="/">Shop</Link>
        <span className="material-symbols-outlined text-xs">chevron_right</span>
        <span className="text-primary font-bold">Shopping Cart</span>
      </nav>

      <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-12">
        {/* Cart Items Column */}
        <div className="lg:col-span-8 space-y-8">
          <div className="flex items-baseline justify-between">
            <h1 className="font-h1 text-h1 text-on-background">Your Cart</h1>
            <p className="font-body-md text-on-surface-variant">3 items</p>
          </div>

          {/* Product List */}
          <div className="space-y-6">
            {/* Item 1 */}
            <div className="flex gap-6 p-6 bg-surface-container-lowest border border-outline-variant shadow-[0px_4px_20px_rgba(15,23,42,0.05)] rounded-xl group relative">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-surface-container overflow-hidden rounded-lg flex-shrink-0">
                <img alt="Tech Backpack" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALwcIrXf7D2SDhokaPkfR6fQXoqsFCYyktxnUULF3t6192DOgq9EP4HmjHBACetumb7xqSxHWA7kNjS5-WS3CQit5rFOua4N4onxWSn9Q690bKjGGD6iZY3yUBJBjz0h8Y7ZN4pUrDd3rjK4azBiQ11lmA7CWH-v1fac0Kpg3-oUPFbqHbrd5IGljd91XIIiA7cY1BJcSZm5gkQbuVCTARAPrQil9KIY58XlgNm35ppdB9fgwqaNXoOCe9Aj5xjruovG2Y5GzdFDM" />
              </div>
              <div className="flex-grow flex flex-col justify-between py-1">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="font-h3 text-h3 text-on-background">Nomad Carry-On 40L</h3>
                    <p className="font-h3 text-h3 text-on-background">$245.00</p>
                  </div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant mt-1">Deep Slate / Performance Nylon</p>
                  <div className="mt-4 flex items-center space-x-4">
                    <span className="inline-flex items-center px-2 py-1 rounded bg-surface-container-highest text-[10px] font-bold tracking-widest uppercase text-on-surface-variant">In Stock</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center border border-outline-variant rounded-lg overflow-hidden bg-surface-container-low">
                    <button className="px-3 py-1 hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined text-sm">remove</span></button>
                    <span className="px-4 py-1 font-medium text-sm">1</span>
                    <button className="px-3 py-1 hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined text-sm">add</span></button>
                  </div>
                  <button className="text-error font-medium text-sm flex items-center hover:underline">
                    <span className="material-symbols-outlined text-lg mr-1">delete</span>
                    Remove
                  </button>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex gap-6 p-6 bg-surface-container-lowest border border-outline-variant shadow-[0px_4px_20px_rgba(15,23,42,0.05)] rounded-xl group relative">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-surface-container overflow-hidden rounded-lg flex-shrink-0">
                <img alt="Travel Organizer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDD3186eXbRhYB1QYh1b87WNu1ZnKompQT986fycURCNVL3bUA9KuCFObwBUgmDVHWyYDXdh-386A7d8G4eENkymiQ-v8Xf5tLEfl6TMh0YDI8xPx5V-0llYwsIo-aG0c3LB60W14QkOnAU-NVWQFYGLmh3WbBVvrvIEVZg53gpMsdeUHxJStLDKCyTe9U2nq6THw02CVvRFyDIazcpw597PdViUAK6WgRbnOtLSTVFM5xf1z6pUI7nHYeUwBDwKCLB10wF7rEH8k" />
              </div>
              <div className="flex-grow flex flex-col justify-between py-1">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="font-h3 text-h3 text-on-background">Tech Folio Pro</h3>
                    <p className="font-h3 text-h3 text-on-background">$85.00</p>
                  </div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant mt-1">Leather Onyx / Water Resistant</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center border border-outline-variant rounded-lg overflow-hidden bg-surface-container-low">
                    <button className="px-3 py-1 hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined text-sm">remove</span></button>
                    <span className="px-4 py-1 font-medium text-sm">1</span>
                    <button className="px-3 py-1 hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined text-sm">add</span></button>
                  </div>
                  <button className="text-error font-medium text-sm flex items-center hover:underline">
                    <span className="material-symbols-outlined text-lg mr-1">delete</span>
                    Remove
                  </button>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex gap-6 p-6 bg-surface-container-lowest border border-outline-variant shadow-[0px_4px_20px_rgba(15,23,42,0.05)] rounded-xl group relative">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-surface-container overflow-hidden rounded-lg flex-shrink-0">
                <img alt="Water Bottle" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTgn2SpfIwBftu0nJ6auHk7U8cFBCJDXj0Ji6QC5JZvuKiCRv4X27qWC_AcInjiZ_3TmpSRzaeqXpg2lU39AVSDSdIld8KFKOpwZzJrQkXs2OG6EfIkVHL9w7mfFJS8_rN1K7nj3ma4ts8ZiqiKPN7CJ6DkLPZU2oOcvqoNuU2sXUag7fjeOp2JNFlNEGUmaJDjfqRs4OjkXGJXP19qEFooJ8vUc07BFmAToXhLhAf-UYCabnAkW7yZd4tAG-wkParHwjLTID7pCk" />
              </div>
              <div className="flex-grow flex flex-col justify-between py-1">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="font-h3 text-h3 text-on-background">Mag-Flask 32oz</h3>
                    <p className="font-h3 text-h3 text-on-background">$45.00</p>
                  </div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant mt-1">Matte Black / Magnetic Cap</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center border border-outline-variant rounded-lg overflow-hidden bg-surface-container-low">
                    <button className="px-3 py-1 hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined text-sm">remove</span></button>
                    <span className="px-4 py-1 font-medium text-sm">1</span>
                    <button className="px-3 py-1 hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined text-sm">add</span></button>
                  </div>
                  <button className="text-error font-medium text-sm flex items-center hover:underline">
                    <span className="material-symbols-outlined text-lg mr-1">delete</span>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Shipping Message */}
          <div className="flex items-center space-x-4 p-4 rounded-xl bg-primary-container text-on-primary-fixed-variant border border-primary-fixed">
            <span className="material-symbols-outlined text-on-primary-container">local_shipping</span>
            <p className="font-body-md">You&apos;re eligible for <strong>Free International Shipping</strong> on this order.</p>
          </div>
        </div>

        {/* Sidebar Column */}
        <div className="lg:col-span-4 mt-12 lg:mt-0">
          <div className="bg-surface-container-lowest border border-outline-variant shadow-[0px_8px_32px_rgba(15,23,42,0.08)] rounded-xl p-8 sticky top-32">
            <h2 className="font-h3 text-h3 mb-6">Order Summary</h2>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-on-surface-variant">
                <span className="font-body-md">Subtotal</span>
                <span className="font-medium">$375.00</span>
              </div>
              <div className="flex justify-between text-on-surface-variant">
                <span className="font-body-md">Shipping</span>
                <span className="font-medium text-on-tertiary-container">FREE</span>
              </div>
              <div className="flex justify-between text-on-surface-variant">
                <span className="font-body-md">Estimated Tax</span>
                <span className="font-medium">$31.87</span>
              </div>
              <div className="pt-4 border-t border-outline-variant flex justify-between">
                <span className="font-h3 text-h3">Total</span>
                <span className="font-h3 text-h3">$406.87</span>
              </div>
            </div>

            <div className="space-y-4">
              <button className="w-full py-4 bg-[#c2410c] text-white rounded-lg font-bold tracking-wide hover:bg-[#9a3412] transition-all flex items-center justify-center group">
                Checkout Securely
                <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col items-center justify-center p-3 border border-outline-variant rounded-lg bg-surface-container-low grayscale opacity-70">
                  <span className="material-symbols-outlined mb-1">lock</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest">Secure SSL</span>
                </div>
                <div className="flex flex-col items-center justify-center p-3 border border-outline-variant rounded-lg bg-surface-container-low grayscale opacity-70">
                  <span className="material-symbols-outlined mb-1">payments</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest">Multi-Pay</span>
                </div>
              </div>
            </div>

            {/* Promo Code */}
            <div className="mt-8">
              <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2">Promo Code</label>
              <div className="flex space-x-2">
                <input className="flex-grow bg-slate-100 border-none rounded-lg px-4 text-sm focus:ring-2 focus:ring-on-tertiary-container" placeholder="Enter code" type="text" />
                <button className="px-4 py-2 bg-secondary-container text-on-secondary-container rounded-lg font-medium text-sm hover:bg-outline-variant transition-colors">Apply</button>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="mt-10 pt-8 border-t border-outline-variant space-y-4">
              <div className="flex items-center space-x-3 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-on-tertiary-container">history</span>
                <span>30-Day Hassle-Free Returns</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-on-tertiary-container">verified</span>
                <span>2-Year Premium Warranty</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-on-tertiary-container">eco</span>
                <span>Carbon-Neutral Packaging</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Frequently Bought Together (Upsell Section) */}
      <section className="mt-24">
        <h2 className="font-h2 text-h2 mb-8">Essential Add-ons</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Upsell 1 */}
          <div className="bg-white border border-outline-variant p-4 rounded-xl group">
            <div className="aspect-square bg-surface-container rounded-lg mb-4 overflow-hidden">
              <img alt="Cleaning Kit" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhtoIugtUBybZ1IzHyMHR_AXPkzUkTyqEKYdqEm-SgG-U5XCiGUCa_q_KM-NscQyorlwaYVR7wab10ggrlsETCMLI8c2WC0ablgjXYaCvTqt3A_etA9KzO0ErVHO_zCiT2iXfuimOoe-J9l64N43S3w21t9J2armDTi3ooTrqkjjOJNl9FX-zCrpYf1A8BeTVg0zevejjui-ubcJ9wgik3fLSfxA1MpqqZ5i5R4jPMggZ9SsnMfN8BszWOx4sxY0DAMq0IgJ6sYLo" />
            </div>
            <h4 className="font-medium text-on-background">Tech Care Kit</h4>
            <p className="text-on-surface-variant text-sm mt-1">$22.00</p>
            <button className="w-full mt-4 py-2 border border-primary text-primary font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all rounded">Add to Order</button>
          </div>
          {/* Upsell 2 */}
          <div className="bg-white border border-outline-variant p-4 rounded-xl group">
            <div className="aspect-square bg-surface-container rounded-lg mb-4 overflow-hidden">
              <img alt="Luggage Tag" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9vKi_Qc7qyCvdA0zdRMn_-4PtQVSmZ1KfEmCViQXy7TQTaL8VAkVlO1WhzsGboo1UlUmMVFgSDVwSx-7Lb0GtPA3TCueCKcjJbrgM76bexALd9S87g1IoRd2gZBN4_TV0hTfo-VoI2tGOxU2DWE4XLzaQ7mlj0f8Pr6RSMcArBh5YbsdXwhYjrw900oMsTltDLG8Rid7vdbYOOSIlEK3171FfAXdY1QjB58_hSVCNMGvDQ33x0OU1J-SWlCRp0Rw_ePtmvT3DMCk" />
            </div>
            <h4 className="font-medium text-on-background">Premium ID Tag</h4>
            <p className="text-on-surface-variant text-sm mt-1">$15.00</p>
            <button className="w-full mt-4 py-2 border border-primary text-primary font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all rounded">Add to Order</button>
          </div>
          {/* Upsell 3 */}
          <div className="bg-white border border-outline-variant p-4 rounded-xl group">
            <div className="aspect-square bg-surface-container rounded-lg mb-4 overflow-hidden">
              <img alt="Cable Organizer" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0r0AVWQiN_Q3SubI_IKqmu1lMjJFzw-rmlLwZMJo5cjinYGPIGUN37x6BE4fiao1C6tqzi8f2_thSyAhujcIxppgQlKXHNbzuh8A496SSWboSuATqFXaFTsPASStLcun2a9vVrbShjxZHgJxSFfY0bO3hARQxzeUatQQITGQp4G5OVbVgaWKwor0Yhlbglmw2E-KpBBFIOoUFKbKcxiWOg6iGC4H1K6sKUERTDPU68F06sGRHjI7WbLtH7kNy8lVYnh-7Yg7P0Ho" />
            </div>
            <h4 className="font-medium text-on-background">Magnetic Cable Ties</h4>
            <p className="text-on-surface-variant text-sm mt-1">$12.00</p>
            <button className="w-full mt-4 py-2 border border-primary text-primary font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all rounded">Add to Order</button>
          </div>
          {/* Upsell 4 */}
          <div className="bg-white border border-outline-variant p-4 rounded-xl group">
            <div className="aspect-square bg-surface-container rounded-lg mb-4 overflow-hidden">
              <img alt="Packing Cube" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBte0wExqxpr1dYG4z7M8nCqhZi-Sislgn7NABBnz5gyuDVpMUX7a-oDQKSMZnNYD2roqQF_0UmCFhdhoBVQwF_3_Bp1bE-FRc6GwDqSyzpT2uenLG4vIndqvYiLrtGER3di6dtoeVV2LRzkBU2Jm9EI5ZytIalNFx4uoBoBT5ABKDfCRNeqsqTsllzRjB2Jb4mbp8QfJaKSwU6SdZ_Q0WVipHVLkVByHYllbjXbj0PqeGvipsHJdUFUtHXFnQUuuIAiTrTkfCKywo" />
            </div>
            <h4 className="font-medium text-on-background">Compression Cube S</h4>
            <p className="text-on-surface-variant text-sm mt-1">$28.00</p>
            <button className="w-full mt-4 py-2 border border-primary text-primary font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all rounded">Add to Order</button>
          </div>
        </div>
      </section>
    </main>
  );
}
