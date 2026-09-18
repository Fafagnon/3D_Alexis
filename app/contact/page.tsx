import type { Metadata } from "next";
import SurMesureForm from "@/components/SurMesureForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Décrivez votre projet et demandez un devis pour une création 3D sur mesure à l'atelier 3D D'ALEXIS.",
};

const STEPS = [
  {
    n: "01",
    title: "Vous décrivez le projet",
    text: "Un objet précis, une pièce technique, une réparation : expliquez-nous ce que vous avez en tête, avec autant de détails que possible.",
  },
  {
    n: "02",
    title: "Nous étudions la faisabilité",
    text: "Nous revenons vers vous sur WhatsApp avec nos questions, un délai estimé et un devis.",
  },
  {
    n: "03",
    title: "Impression et livraison",
    text: "Une fois le devis validé, la pièce est imprimée puis remise en main propre ou expédiée.",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-14 lg:py-20">
      <div id="sur-mesure" className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-red">Échanger avec l&apos;atelier</p>
          <h1 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
            Contact
          </h1>
          <p className="mt-4 max-w-md text-[0.98rem] leading-relaxed text-ink/70 sm:text-[1.02rem]">
            Pour toute question, demande de devis personnalisé ou commande
            spécifique, décrivez votre projet ci-contre ou écrivez-nous
            directement sur WhatsApp.
          </p>

          <ol className="mt-9 flex flex-col gap-6 sm:mt-12 sm:gap-8">
            {STEPS.map((step) => (
              <li key={step.n} className="flex gap-4 sm:gap-5">
                <span className="font-display text-2xl font-bold text-red/70">
                  {step.n}
                </span>
                <div>
                  <h2 className="font-display text-base font-semibold text-ink">
                    {step.title}
                  </h2>
                  <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-ink/65">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="rounded-card bg-paper p-5 shadow-card outline outline-1 -outline-offset-1 outline-black/5 sm:p-8 md:p-9">
          <h2 className="font-display text-xl font-semibold text-ink">
            Décrire votre projet
          </h2>
          <p className="mt-2 text-sm text-ink/60">
            Le formulaire prépare un message WhatsApp — rien n&apos;est
            envoyé sans que vous le validiez.
          </p>
          <div className="mt-7">
            <SurMesureForm />
          </div>
        </div>
      </div>
    </div>
  );
}
