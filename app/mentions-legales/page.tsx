import type { Metadata } from "next";
import { WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Mentions légales",
};

export default function MentionsLegalesPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14 lg:py-20">
      <h1 className="font-display text-3xl font-bold text-ink">
        Mentions légales
      </h1>

      <div className="mt-10 flex flex-col gap-8 text-sm leading-relaxed text-ink/75">
        <section>
          <h2 className="font-display text-base font-semibold text-ink">
            Éditeur du site
          </h2>
          <p className="mt-2">
            3D D&apos;ALEXIS — atelier de création 3D, Lomé, Togo.
            <br />
            Contact :{" "}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer noopener"
              className="underline decoration-ink/25 underline-offset-2 hover:text-red font-medium"
            >
              WhatsApp {WHATSAPP_DISPLAY}
            </a>
          </p>
          <p className="mt-2 text-ink/50">
            Numéro d&apos;immatriculation (RCCM) et régime fiscal à compléter
            ici dès que ces informations seront communiquées.
          </p>
        </section>

        <section>
          <h2 className="font-display text-base font-semibold text-ink">
            Hébergement
          </h2>
          <p className="mt-2">
            Ce site est hébergé par Vercel Inc.{" "}
            <a href="https://vercel.com" target="_blank" rel="noreferrer noopener" className="underline decoration-ink/25 underline-offset-2">
              vercel.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-display text-base font-semibold text-ink">
            Propriété intellectuelle
          </h2>
          <p className="mt-2">
            Les visuels, textes et créations présentés sur ce site sont la
            propriété de 3D D&apos;ALEXIS et ne peuvent être reproduits sans
            autorisation préalable.
          </p>
        </section>
      </div>
    </div>
  );
}
