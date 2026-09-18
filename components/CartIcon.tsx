"use client";

import { useCart } from "@/context/CartContext";

export default function CartIcon() {
  const { itemCount, toggleCart } = useCart();

  return (
    <button
      type="button"
      onClick={toggleCart}
      aria-label={`Ouvrir le panier, ${itemCount} article${itemCount > 1 ? "s" : ""}`}
      className="relative flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-ink/5 active:scale-[0.96]"
    >
      <svg
        width="21"
        height="21"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-ink"
      >
        <path d="M6 8h12l-1.2 10.2a2 2 0 0 1-2 1.8H9.2a2 2 0 0 1-2-1.8L6 8Z" />
        <path d="M9 8V6a3 3 0 0 1 6 0v2" />
      </svg>
      {itemCount > 0 && (
        <span className="tabular-nums absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-red px-1 text-[0.65rem] font-semibold text-paper">
          {itemCount}
        </span>
      )}
    </button>
  );
}
