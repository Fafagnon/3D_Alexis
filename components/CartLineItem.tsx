"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { formatPrice } from "@/lib/format";
import { useCart } from "@/context/CartContext";

export default function CartLineItem({
  product,
  quantity,
}: {
  product: Product;
  quantity: number;
}) {
  const { setQuantity, removeItem } = useCart();

  return (
    <div className="flex gap-4 border-b border-sable/60 py-6 first:pt-0 last:border-b-0">
      <Link
        href={`/produit/${product.slug}`}
        className="relative h-24 w-20 shrink-0 overflow-hidden rounded-card-inner bg-paper outline outline-1 -outline-offset-1 outline-black/5"
      >
        <Image src={product.images[0]} alt={product.name} fill sizes="80px" className="object-cover" />
      </Link>

      <div className="flex flex-1 flex-col justify-between">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Link href={`/produit/${product.slug}`} className="font-display text-[0.95rem] font-semibold text-ink">
              {product.name}
            </Link>
            <p className="mt-0.5 text-sm text-ink/50">{formatPrice(product.price)}</p>
          </div>
          <p className="tabular-nums text-[0.95rem] font-medium text-ink">
            {formatPrice(product.price * quantity)}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex h-9 items-center rounded-full border border-sable">
            <button
              type="button"
              aria-label="Diminuer la quantité"
              onClick={() => setQuantity(product.slug, quantity - 1)}
              className="flex h-9 w-9 items-center justify-center text-ink/70 transition-colors hover:text-ink active:scale-[0.96]"
            >
              −
            </button>
            <span className="tabular-nums w-5 text-center text-sm text-ink">{quantity}</span>
            <button
              type="button"
              aria-label="Augmenter la quantité"
              onClick={() => setQuantity(product.slug, quantity + 1)}
              className="flex h-9 w-9 items-center justify-center text-ink/70 transition-colors hover:text-ink active:scale-[0.96]"
            >
              +
            </button>
          </div>
          <button
            type="button"
            onClick={() => removeItem(product.slug)}
            className="text-sm text-ink/45 underline decoration-ink/20 underline-offset-2 transition-colors hover:text-red hover:decoration-red/40"
          >
            Retirer
          </button>
        </div>
      </div>
    </div>
  );
}
