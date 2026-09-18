"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const HERO_SLIDES = [
  {
    src: "/images/produits/lampe-vague-rouge.jpg",
    alt: "Lampe Vague Rouge — Création 3D D'ALEXIS",
    name: "Lampe Vague Rouge",
  },
  {
    src: "/images/produits/lampe-globe-terrestre.jpg",
    alt: "Lampe Globe Terrestre — Création 3D D'ALEXIS",
    name: "Lampe Globe Terrestre",
  },
  {
    src: "/images/produits/plateau-arche.jpg",
    alt: "Plateau Arche Deux Niveaux — Création 3D D'ALEXIS",
    name: "Plateau Arche",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Défilement automatique toutes les 4 secondes (mis en pause au survol)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <section className="mx-auto max-w-content px-4 pb-12 pt-6 sm:px-6 sm:pb-16 sm:pt-12 lg:pb-24 lg:pt-16">
      <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        {/* Colonne 1 : Titres & CTA (centrés) */}
        <div className="order-1 flex flex-col items-center text-center">
          <h1 className="font-display text-3xl font-bold leading-[1.08] tracking-tightish text-ink xs:text-4xl sm:text-5xl lg:text-[3.75rem]">
            3D D&apos;ALEXIS
          </h1>
          <p className="mt-3 text-lg font-semibold text-red sm:text-xl lg:text-2xl">
            Créations 3D prêtes &amp; sur mesure
          </p>
          <p className="mt-2 text-sm font-medium tracking-wide text-ink/75 sm:text-base">
            Qualité • Créativité • Innovation
          </p>

          <div className="mt-7 flex w-full flex-col items-center justify-center gap-3 sm:mt-9 sm:w-auto sm:flex-row">
            <Link
              href="/boutique"
              className="flex h-12 w-full sm:w-auto items-center justify-center rounded-full bg-ink px-7 text-sm font-semibold text-cream shadow-sm transition-transform hover:bg-ink/90 active:scale-[0.97]"
            >
              Voir la boutique
            </Link>
            <Link
              href="/contact"
              className="flex h-12 w-full sm:w-auto items-center justify-center rounded-full border border-ink/20 px-7 text-sm font-semibold text-ink transition-colors hover:border-ink/50 hover:bg-ink/5 active:scale-[0.97]"
            >
              Nous contacter
            </Link>
          </div>
        </div>

        {/* Colonne 2 : Carrousel 3 images en fondu fluide (sans texte sur les images) */}
        <div className="order-2">
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="group relative aspect-[4/3] xs:aspect-[16/11] sm:aspect-[16/10] lg:aspect-[4/5] w-full overflow-hidden rounded-card bg-paper shadow-lifted outline outline-1 -outline-offset-1 outline-black/5"
          >
            {HERO_SLIDES.map((slide, index) => {
              const isActive = index === currentIndex;
              return (
                <div
                  key={slide.src}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    priority={index === 0}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-charcoal/25 to-transparent pointer-events-none" />
                </div>
              );
            })}

            {/* Boutons de navigation manuelle (précédent / suivant) */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Image précédente"
              className="absolute left-3 top-1/2 z-20 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-paper/85 text-ink shadow-md backdrop-blur-sm transition-all hover:bg-paper active:scale-90"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Image suivante"
              className="absolute right-3 top-1/2 z-20 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-paper/85 text-ink shadow-md backdrop-blur-sm transition-all hover:bg-paper active:scale-90"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            {/* Indicateurs de progression (tirets cliquables) */}
            <div className="absolute bottom-3.5 left-1/2 z-20 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-charcoal/60 px-3 py-1.5 backdrop-blur-md border border-cream/10">
              {HERO_SLIDES.map((slide, i) => (
                <button
                  key={slide.src}
                  type="button"
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Afficher ${slide.name}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? "w-6 bg-cream shadow-sm"
                      : "w-1.5 bg-cream/40 hover:bg-cream/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
