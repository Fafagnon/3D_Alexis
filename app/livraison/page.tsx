import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Livraison",
};

const ZONES = [
  {
    label: "Lomé",
    text: "Retrait à l'atelier ou livraison locale, selon disponibilité.",
  },
  {
    label: "Reste du Togo",
    text: "Expédition via les transporteurs habituels, frais et délai communiqués avant confirmation.",
  },
  {
    label: "International",
    text: "Expédition possible vers l'étranger. Frais et délais varient selon la destination et sont calculés au cas par cas.",
  },
];

export default function LivraisonPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14 lg:py-20">
      <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">Livraison</h1>
      <p className="mt-4 text-[0.98rem] leading-relaxed text-ink/70 sm:mt-5 sm:text-[1.02rem]">
        3D D&apos;ALEXIS livre à Lomé, dans le reste du Togo, et à
        l&apos;international. Les frais et délais dépendent de la
        destination et du poids de la commande : ils sont communiqués sur
        WhatsApp avant que la commande soit confirmée, jamais facturés par
        surprise.
      </p>

      <div className="mt-12 divide-y divide-sable/60 border-y border-sable/60">
        {ZONES.map((zone) => (
          <div key={zone.label} className="py-6">
            <h2 className="font-display text-base font-semibold text-ink">
              {zone.label}
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-ink/65">
              {zone.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
