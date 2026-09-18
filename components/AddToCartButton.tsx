"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types/product";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addItem, openCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    addItem(product.slug, quantity);
    setJustAdded(true);
    openCart();
    window.setTimeout(() => setJustAdded(false), 1800);
  };

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <div className="flex h-12 w-fit items-center rounded-full border border-sable">
        <button
          type="button"
          aria-label="Diminuer la quantité"
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          className="flex h-12 w-11 items-center justify-center text-lg text-ink/70 transition-colors hover:text-ink active:scale-[0.96]"
        >
          −
        </button>
        <span className="tabular-nums w-6 text-center text-sm font-medium text-ink">
          {quantity}
        </span>
        <button
          type="button"
          aria-label="Augmenter la quantité"
          onClick={() => setQuantity((q) => q + 1)}
          className="flex h-12 w-11 items-center justify-center text-lg text-ink/70 transition-colors hover:text-ink active:scale-[0.96]"
        >
          +
        </button>
      </div>

      <button
        type="button"
        onClick={handleAdd}
        className="relative flex h-12 flex-1 items-center justify-center overflow-hidden rounded-full bg-ink px-8 text-sm font-semibold text-cream transition-transform active:scale-[0.96] sm:flex-none sm:px-10"
      >
        <span
          className={`flex items-center gap-2 transition-[opacity,filter,transform] duration-300 ease-out ${
            justAdded
              ? "scale-75 opacity-0 blur-sm"
              : "scale-100 opacity-100 blur-0"
          }`}
        >
          Ajouter au panier
        </span>
        <span
          className={`absolute inset-0 flex items-center justify-center gap-2 transition-[opacity,filter,transform] duration-300 ease-out ${
            justAdded
              ? "scale-100 opacity-100 blur-0"
              : "scale-75 opacity-0 blur-sm"
          }`}
        >
          Ajouté au panier
        </span>
      </button>
    </div>
  );
}
