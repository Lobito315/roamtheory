"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

const TAX_RATE = 0.085;
const FREE_SHIPPING_THRESHOLD = 150;

export default function Cart() {
  const { items, removeItem, updateQuantity, subtotal } = useCart();
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : 15;
  const tax = subtotal * TAX_RATE;
  const total = subtotal + shipping + tax;

  return (
    <main className="max-w-[1280px] mx-auto px-6 py-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center space-x-2 text-label-caps font-label-caps text-on-surface-variant mb-8">
        <Link className="hover:text-primary transition-colors" href="/">Shop</Link>
        <span className="material-symbols-outlined text-xs">chevron_right</span>
        <span className="text-primary font-bold">Shopping Cart</span>
      </nav>

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-32 text-center">
          <span className="material-symbols-outlined text-6xl text-slate-300 mb-6">shopping_cart</span>
          <h1 className="font-h1 text-h2 text-on-background mb-4">Your cart is empty</h1>
          <p className="text-on-surface-variant mb-8">Looks like you haven&apos;t added anything yet.</p>
          <Link href="/" className="px-8 py-4 bg-slate-900 text-white font-bold tracking-wide hover:bg-slate-700 transition-all rounded-lg">
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Cart Items Column */}
          <div className="lg:col-span-8 space-y-8">
            <div className="flex items-baseline justify-between">
              <h1 className="font-h1 text-h1 text-on-background">Your Cart</h1>
              <p className="font-body-md text-on-surface-variant">{items.length} {items.length === 1 ? "item" : "items"}</p>
            </div>

            {/* Shipping Banner */}
            {subtotal < FREE_SHIPPING_THRESHOLD && (
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-amber-50 text-amber-800 border border-amber-200">
                <span className="material-symbols-outlined">local_shipping</span>
                <p className="font-body-md">
                  Add <strong>${(FREE_SHIPPING_THRESHOLD - subtotal).toFixed(2)}</strong> more for <strong>Free Shipping</strong>.
                </p>
              </div>
            )}
            {subtotal >= FREE_SHIPPING_THRESHOLD && (
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-primary-container text-on-primary-fixed-variant border border-primary-fixed">
                <span className="material-symbols-outlined text-on-primary-container">local_shipping</span>
                <p className="font-body-md">You&apos;re eligible for <strong>Free International Shipping</strong> on this order.</p>
              </div>
            )}

            {/* Product List */}
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-6 p-6 bg-surface-container-lowest border border-outline-variant shadow-[0px_4px_20px_rgba(15,23,42,0.05)] rounded-xl group relative">
                  <div className="w-32 h-32 md:w-40 md:h-40 bg-surface-container overflow-hidden rounded-lg flex-shrink-0">
                    <img alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={item.image} />
                  </div>
                  <div className="flex-grow flex flex-col justify-between py-1">
                    <div>
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-label-caps text-slate-400 mb-1">{item.category}</p>
                          <h3 className="font-h3 text-h3 text-on-background">{item.name}</h3>
                        </div>
                        <p className="font-h3 text-h3 text-on-background">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <p className="text-sm text-slate-400 mt-1">${item.price.toFixed(2)} each</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-outline-variant rounded-lg overflow-hidden bg-surface-container-low">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-2 hover:bg-surface-variant transition-colors"
                        >
                          <span className="material-symbols-outlined text-sm">remove</span>
                        </button>
                        <span className="px-4 py-2 font-medium text-sm min-w-[40px] text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-2 hover:bg-surface-variant transition-colors"
                        >
                          <span className="material-symbols-outlined text-sm">add</span>
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 font-medium text-sm flex items-center hover:text-red-700 hover:underline transition-colors"
                      >
                        <span className="material-symbols-outlined text-lg mr-1">delete</span>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-4 mt-12 lg:mt-0">
            <div className="bg-surface-container-lowest border border-outline-variant shadow-[0px_8px_32px_rgba(15,23,42,0.08)] rounded-xl p-8 sticky top-32">
              <h2 className="font-h3 text-h3 mb-6">Order Summary</h2>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-on-surface-variant">
                  <span className="font-body-md">Subtotal ({items.reduce((s, i) => s + i.quantity, 0)} items)</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-on-surface-variant">
                  <span className="font-body-md">Shipping</span>
                  <span className={`font-medium ${shipping === 0 ? "text-green-600" : ""}`}>
                    {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-on-surface-variant">
                  <span className="font-body-md">Estimated Tax (8.5%)</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
                <div className="pt-4 border-t border-outline-variant flex justify-between">
                  <span className="font-h3 text-h3">Total</span>
                  <span className="font-h3 text-h3">${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-4">
                <button className="w-full py-4 bg-[#c2410c] text-white rounded-lg font-bold tracking-wide hover:bg-[#9a3412] transition-all flex items-center justify-center group">
                  Checkout Securely
                  <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col items-center justify-center p-3 border border-outline-variant rounded-lg bg-surface-container-low opacity-70">
                    <span className="material-symbols-outlined mb-1">lock</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest">Secure SSL</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-3 border border-outline-variant rounded-lg bg-surface-container-low opacity-70">
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
                {[
                  { icon: "history", text: "30-Day Hassle-Free Returns" },
                  { icon: "verified", text: "2-Year Premium Warranty" },
                  { icon: "eco", text: "Carbon-Neutral Packaging" },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-center space-x-3 text-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-on-tertiary-container">{icon}</span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Upsell Section */}
      {items.length > 0 && (
        <section className="mt-24">
          <h2 className="font-h2 text-h2 mb-8">Essential Add-ons</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { name: "Tech Care Kit", price: 22, alt: "Cleaning Kit", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhtoIugtUBybZ1IzHyMHR_AXPkzUkTyqEKYdqEm-SgG-U5XCiGUCa_q_KM-NscQyorlwaYVR7wab10ggrlsETCMLI8c2WC0ablgjXYaCvTqt3A_etA9KzO0ErVHO_zCiT2iXfuimOoe-J9l64N43S3w21t9J2armDTi3ooTrqkjjOJNl9FX-zCrpYf1A8BeTVg0zevejjui-ubcJ9wgik3fLSfxA1MpqqZ5i5R4jPMggZ9SsnMfN8BszWOx4sxY0DAMq0IgJ6sYLo" },
              { name: "Premium ID Tag", price: 15, alt: "Luggage Tag", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9vKi_Qc7qyCvdA0zdRMn_-4PtQVSmZ1KfEmCViQXy7TQTaL8VAkVlO1WhzsGboo1UlUmMVFgSDVwSx-7Lb0GtPA3TCueCKcjJbrgM76bexALd9S87g1IoRd2gZBN4_TV0hTfo-VoI2tGOxU2DWE4XLzaQ7mlj0f8Pr6RSMcArBh5YbsdXwhYjrw900oMsTltDLG8Rid7vdbYOOSIlEK3171FfAXdY1QjB58_hSVCNMGvDQ33x0OU1J-SWlCRp0Rw_ePtmvT3DMCk" },
              { name: "Magnetic Cable Ties", price: 12, alt: "Cable Organizer", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0r0AVWQiN_Q3SubI_IKqmu1lMjJFzw-rmlLwZMJo5cjinYGPIGUN37x6BE4fiao1C6tqzi8f2_thSyAhujcIxppgQlKXHNbzuh8A496SSWboSuATqFXaFTsPASStLcun2a9vVrbShjxZHgJxSFfY0bO3hARQxzeUatQQITGQp4G5OVbVgaWKwor0Yhlbglmw2E-KpBBFIOoUFKbKcxiWOg6iGC4H1K6sKUERTDPU68F06sGRHjI7WbLtH7kNy8lVYnh-7Yg7P0Ho" },
              { name: "Compression Cube S", price: 28, alt: "Packing Cube", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBte0wExqxpr1dYG4z7M8nCqhZi-Sislgn7NABBnz5gyuDVpMUX7a-oDQKSMZnNYD2roqQF_0UmCFhdhoBVQwF_3_Bp1bE-FRc6GwDqSyzpT2uenLG4vIndqvYiLrtGER3di6dtoeVV2LRzkBU2Jm9EI5ZytIalNFx4uoBoBT5ABKDfCRNeqsqTsllzRjB2Jb4mbp8QfJaKSwU6SdZ_Q0WVipHVLkVByHYllbjXbj0PqeGvipsHJdUFUtHXFnQUuuIAiTrTkfCKywo" },
            ].map((item) => (
              <div key={item.name} className="bg-white border border-outline-variant p-4 rounded-xl group">
                <div className="aspect-square bg-surface-container rounded-lg mb-4 overflow-hidden">
                  <img alt={item.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={item.src} />
                </div>
                <h4 className="font-medium text-on-background">{item.name}</h4>
                <p className="text-on-surface-variant text-sm mt-1">${item.price}.00</p>
                <button className="w-full mt-4 py-2 border border-primary text-primary font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all rounded">Add to Order</button>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
