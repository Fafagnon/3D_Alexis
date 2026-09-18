import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "À Propos",
  description: "L'atelier 3D D'ALEXIS, à Lomé, Togo.",
};

const VALEURS = [
  {
    label: "Qualité",
    text: "Chaque pièce est vérifiée avant de quitter l'atelier — finitions, solidité, fidélité au fichier d'origine.",
  },
  {
    label: "Créativité",
    text: "Des formes qui sortent du catalogue standard, pensées pour surprendre autant que pour servir.",
  },
  {
    label: "Innovation",
    text: "Une veille constante sur les techniques et matières d'impression, pour repousser ce qu'il est possible de fabriquer.",
  },
];

export default function AProposPage() {
  return (
    <div className="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-14 lg:py-20">
      <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <div className="relative aspect-square max-w-md mx-auto w-full lg:max-w-none overflow-hidden rounded-card shadow-card outline outline-1 -outline-offset-1 outline-black/5">
          <Image
            src="/images/enseigne-atelier.jpg"
            alt="Enseigne de l'atelier 3D D'ALEXIS"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <h1 className="font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
            L&apos;atelier
          </h1>
          <p className="mt-6 font-display text-2xl font-bold text-ink/40 sm:text-3xl">
            L&apos;historique sera ici
          </p>
        </div>
      </div>

      <div className="mt-14 border-t border-sable/60 pt-10 sm:mt-20 sm:pt-14 lg:mt-28">
        <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
          {VALEURS.map((v) => (
            <div key={v.label}>
              <h2 className="font-display text-xl font-bold text-ink">
                {v.label}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">
                {v.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
