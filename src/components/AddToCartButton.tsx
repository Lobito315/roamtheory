"use client";

import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { FourthwallProduct } from "@/lib/fourthwall";

export default function AddToCartButton({ product }: { product: FourthwallProduct }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  // We add the first variant by default when clicking quick add
  const defaultVariant = product.variants[0];

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent link navigation
    if (!defaultVariant) return;
    
    addItem({
      id: defaultVariant.id,
      productId: product.id,
      variantId: defaultVariant.id,
      name: product.name,
      price: defaultVariant.unitPrice ? defaultVariant.unitPrice.value : 0,
      image: product.images[0]?.url || "",
      category: "Merch", // Could extract category from collections if available
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
