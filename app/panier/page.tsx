"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import CartLineItem from "@/components/CartLineItem";
import { formatPrice } from "@/lib/format";
import { buildOrderWhatsAppLink } from "@/lib/whatsapp";

export default function PanierPage() {
  const { items, subtotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="mx-auto flex max-w-content flex-col items-start px-4 py-16 sm:px-6 sm:py-24">
        <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          Votre panier est vide
        </h1>
        <p className="mt-3 text-sm text-ink/60 sm:text-base">
          Parcourez la boutique pour trouver une pièce qui vous plaît.
        </p>
        <Link
          href="/boutique"
          className="mt-7 flex h-12 items-center justify-center rounded-full bg-ink px-8 text-sm font-semibold text-cream shadow-sm transition-transform hover:bg-ink/90 active:scale-[0.97]"
        >
          Voir la boutique
        </Link>
      </div>
    );
  }

  const whatsappLink = buildOrderWhatsAppLink(items);

  return (
    <div className="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-14 lg:py-20">
      <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">
        Votre panier
      </h1>

      <div className="mt-8 grid gap-8 sm:mt-10 sm:gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div>
          {items.map((line) => (
            <CartLineItem key={line.product.slug} product={line.product} quantity={line.quantity} />
          ))}
        </div>

        <div className="h-fit rounded-card bg-paper p-5 shadow-card outline outline-1 -outline-offset-1 outline-black/5 sm:p-8">
          <h2 className="font-display text-lg font-semibold text-ink">
            Récapitulatif
          </h2>
          <div className="mt-5 flex items-center justify-between text-sm text-ink/70">
            <span>Sous-total</span>
            <span className="tabular-nums font-medium text-ink">
              {formatPrice(subtotal)}
            </span>
          </div>
          <p className="mt-2 text-xs text-ink/45">
            Livraison calculée selon votre destination, communiquée par
            WhatsApp avant confirmation.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-6 flex h-12 w-full items-center justify-center rounded-full bg-ink text-sm font-semibold text-cream transition-transform active:scale-[0.96]"
          >
            Commander sur WhatsApp
          </a>
          <p className="mt-3 text-center text-xs text-ink/45">
            Le paiement mobile money sera bientôt disponible directement sur
            le site.
          </p>
        </div>
      </div>
    </div>
  );
}
