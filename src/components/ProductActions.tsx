"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { FourthwallProduct, FourthwallVariant } from "@/lib/fourthwall";

export default function ProductActions({ product }: { product: FourthwallProduct }) {
  const { addItem, checkoutUrl } = useCart();
  const [selectedVariant, setSelectedVariant] = useState<FourthwallVariant>(product.variants[0]);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem({
      id: selectedVariant.id, // using variant id as unique identifier
      productId: product.id,
      variantId: selectedVariant.id,
      name: `${product.name} - ${selectedVariant.name.split(" - ")[1] || selectedVariant.name}`,
      price: selectedVariant.unitPrice ? selectedVariant.unitPrice.value : 0,
      image: product.images[0]?.url || "",
      category: "Merch",
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  const handleBuyNow = () => {
    handleAdd();
    // In a real app we might redirect instantly to checkoutUrl 
    // but the context checkoutUrl will take a tick to update since state needs to sync.
    // For now we just add to cart. Alternatively we could construct the URL right here.
    const shopDomain = "anchornone-shop.fourthwall.com";
    window.location.href = `https://${shopDomain}/cart/checkout?products=${selectedVariant.id}:1&currency=USD`;
  };

  return (
    <div className="space-y-6">
      {/* Variant Selection */}
      {product.variants.length > 1 && (
        <div>
          <label className="block text-label-caps text-on-surface-variant font-medium mb-3 uppercase tracking-widest">
            Select Variant
          </label>
          <div className="flex flex-wrap gap-2">
            {product.variants.map((variant) => (
              <button
                key={variant.id}
                onClick={() => setSelectedVariant(variant)}
                className={`px-4 py-2 text-sm border rounded-lg transition-all ${
                  selectedVariant.id === variant.id
                    ? "border-primary bg-primary text-white"
                    : "border-outline-variant text-on-surface hover:border-primary"
                }`}
              >
                {variant.name.split(" - ")[1] || variant.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Price */}
      <div className="text-h2 font-h2 text-on-background">
        ${selectedVariant.unitPrice ? selectedVariant.unitPrice.value.toFixed(2) : "0.00"}
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={handleAdd}
          className={`flex-1 py-4 px-6 rounded-lg font-bold tracking-wide transition-all flex items-center justify-center ${
            added
              ? "bg-green-600 text-white"
              : "bg-surface-container-low text-primary border border-outline-variant hover:bg-surface-variant"
          }`}
        >
          <span className="material-symbols-outlined mr-2">{added ? "check" : "add_shopping_cart"}</span>
          {added ? "Added to Cart" : "Add to Cart"}
        </button>
        <button
          onClick={handleBuyNow}
          className="flex-1 py-4 px-6 bg-primary text-white rounded-lg font-bold tracking-wide hover:bg-slate-800 transition-all flex items-center justify-center"
        >
          Buy It Now
        </button>
      </div>

      <div className="pt-6 mt-6 border-t border-outline-variant flex gap-4 text-sm text-on-surface-variant">
        <div className="flex items-center gap-1"><span className="material-symbols-outlined text-[18px]">verified</span> Quality Guaranteed</div>
        <div className="flex items-center gap-1"><span className="material-symbols-outlined text-[18px]">local_shipping</span> Ships Worldwide</div>
      </div>
    </div>
  );
}
