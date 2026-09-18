"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/format";
import { buildOrderWhatsAppLink } from "@/lib/whatsapp";

export default function CartModal() {
  const {
    items,
    itemCount,
    subtotal,
    isCartOpen,
    closeCart,
    setQuantity,
    removeItem,
  } = useCart();

  // Fermeture via la touche Échap
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isCartOpen) {
        closeCart();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isCartOpen, closeCart]);

  // Verrouillage du scroll en arrière-plan lorsque la modale est ouverte
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCartOpen]);

  const whatsappLink = items.length > 0 ? buildOrderWhatsAppLink(items) : "#";

  return (
    <div
      className={`fixed inset-0 z-50 transition-visibility duration-300 ${
        isCartOpen ? "visible" : "invisible"
      }`}
      aria-hidden={!isCartOpen}
    >
      {/* Fond flouté semi-transparent (Backdrop) */}
      <div
        onClick={closeCart}
        className={`fixed inset-0 bg-charcoal/50 backdrop-blur-sm transition-opacity duration-300 ease-out ${
          isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Fermer le panier"
      />

      {/* Carte modale / Tiroir coulissant */}
      <div
        className={`fixed inset-y-0 right-0 flex h-full max-h-[100dvh] w-full max-w-full flex-col bg-paper shadow-lifted border-l border-sable/60 transition-transform duration-300 ease-out sm:max-w-md md:max-w-lg ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Votre panier"
      >
        {/* En-tête du panier */}
        <div className="flex items-center justify-between border-b border-sable/60 px-4 py-4 sm:px-6 sm:py-5">
          <div className="flex items-center gap-3">
            <h2 className="font-display text-lg font-bold text-ink sm:text-xl">
              Votre panier
            </h2>
            {itemCount > 0 && (
              <span className="rounded-full bg-ink/10 px-2.5 py-0.5 text-xs font-semibold text-ink">
                {itemCount} article{itemCount > 1 ? "s" : ""}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={closeCart}
            aria-label="Fermer le panier"
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink/60 transition-colors hover:bg-ink/5 hover:text-ink active:scale-95"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Corps : Liste des articles ou état vide */}
        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center p-8 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sable/30 text-ink/40 mb-4">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 8h12l-1.2 10.2a2 2 0 0 1-2 1.8H9.2a2 2 0 0 1-2-1.8L6 8Z" />
                <path d="M9 8V6a3 3 0 0 1 6 0v2" />
              </svg>
            </div>
            <h3 className="font-display text-lg font-semibold text-ink">
              Votre panier est vide
            </h3>
            <p className="mt-2 max-w-xs text-sm text-ink/60 leading-relaxed">
              Explorez nos créations 3D imprimées avec soin à l&apos;atelier pour ajouter votre premier article.
            </p>
            <Link
              href="/boutique"
              onClick={closeCart}
              className="mt-6 flex h-11 items-center rounded-full bg-ink px-6 text-sm font-semibold text-cream transition-transform active:scale-95"
            >
              Découvrir la boutique
            </Link>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-4 py-4 sm:px-6 divide-y divide-sable/50">
            {items.map((line) => (
              <div
                key={line.product.slug}
                className="flex gap-4 py-5 first:pt-2 last:pb-2"
              >
                <Link
                  href={`/produit/${line.product.slug}`}
                  onClick={closeCart}
                  className="relative h-20 w-20 shrink-0 overflow-hidden rounded-card-inner bg-paper outline outline-1 -outline-offset-1 outline-black/5"
                >
                  <Image
                    src={line.product.images[0]}
                    alt={line.product.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </Link>

                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <Link
                        href={`/produit/${line.product.slug}`}
                        onClick={closeCart}
                        className="font-display text-[0.95rem] font-semibold text-ink hover:text-red transition-colors line-clamp-1"
                      >
                        {line.product.name}
                      </Link>
                      <p className="tabular-nums font-semibold text-sm text-ink shrink-0">
                        {formatPrice(line.product.price * line.quantity)}
                      </p>
                    </div>
                    <p className="mt-0.5 text-xs text-ink/50">
                      {formatPrice(line.product.price)} l&apos;unité
                    </p>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex h-8 items-center rounded-full border border-sable">
                      <button
                        type="button"
                        aria-label="Diminuer la quantité"
                        onClick={() =>
                          setQuantity(line.product.slug, line.quantity - 1)
                        }
                        className="flex h-8 w-8 items-center justify-center text-ink/70 transition-colors hover:text-ink active:scale-90"
                      >
                        −
                      </button>
                      <span className="tabular-nums w-5 text-center text-xs font-semibold text-ink">
                        {line.quantity}
                      </span>
                      <button
                        type="button"
                        aria-label="Augmenter la quantité"
                        onClick={() =>
                          setQuantity(line.product.slug, line.quantity + 1)
                        }
                        className="flex h-8 w-8 items-center justify-center text-ink/70 transition-colors hover:text-ink active:scale-90"
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeItem(line.product.slug)}
                      className="text-xs text-ink/45 underline decoration-ink/20 underline-offset-2 transition-colors hover:text-red hover:decoration-red/40"
                    >
                      Retirer
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pied de panier : Récapitulatif & Commander */}
        {items.length > 0 && (
          <div className="border-t border-sable/60 bg-cream/30 p-4 sm:p-6">
            <div className="flex items-center justify-between text-sm text-ink/80 mb-2">
              <span className="font-medium">Sous-total</span>
              <span className="tabular-nums font-bold text-base text-ink">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="text-xs text-ink/50 mb-5 leading-relaxed">
              Livraison calculée selon votre destination, communiquée par WhatsApp avant confirmation.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer noopener"
              className="flex h-12 w-full items-center justify-center rounded-full bg-ink text-sm font-semibold text-cream transition-transform hover:bg-ink/90 active:scale-[0.98]"
            >
              Commander sur WhatsApp
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
