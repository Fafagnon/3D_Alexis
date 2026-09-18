import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente",
};

export default function CGVPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14 lg:py-20">
      <h1 className="font-display text-3xl font-bold text-ink">
        Conditions Générales de Vente
      </h1>

      <div className="mt-10 flex flex-col gap-8 text-sm leading-relaxed text-ink/75">
        <section>
          <h2 className="font-display text-base font-semibold text-ink">
            1. Produits
          </h2>
          <p className="mt-2">
            3D D&apos;ALEXIS propose des créations imprimées en 3D, en deux
            catégories : des pièces prêtes à l&apos;emploi, présentées dans
            la boutique, et des pièces sur mesure, réalisées sur devis après
            échange sur le projet.
          </p>
        </section>

        <section>
          <h2 className="font-display text-base font-semibold text-ink">
            2. Prix
          </h2>
          <p className="mt-2">
            Les prix sont indiqués en FCFA sur chaque fiche produit. Pour les
            pièces sur mesure, le prix est communiqué sous forme de devis
            avant toute réalisation.
          </p>
        </section>

        <section>
          <h2 className="font-display text-base font-semibold text-ink">
            3. Commande
          </h2>
          <p className="mt-2">
            À ce stade, les commandes sont finalisées directement sur
            WhatsApp : le site prépare un message récapitulatif que le
            client envoie pour confirmer sa commande. Le paiement en ligne
            par mobile money sera proposé directement sur le site dans une
            prochaine version.
          </p>
        </section>

        <section>
          <h2 className="font-display text-base font-semibold text-ink">
            4. Paiement
          </h2>
          <p className="mt-2">
            Les modalités de paiement (mobile money, espèces à la remise, ou
            autre) sont convenues avec le client au moment de la
            confirmation de commande sur WhatsApp.
          </p>
        </section>

        <section>
          <h2 className="font-display text-base font-semibold text-ink">
            5. Livraison
          </h2>
          <p className="mt-2">
            Voir la page{" "}
            <Link href="/livraison" className="underline decoration-ink/25 underline-offset-2 hover:text-red">
              Livraison
            </Link>{" "}
            pour le détail des zones, délais et frais.
          </p>
        </section>

        <section>
          <h2 className="font-display text-base font-semibold text-ink">
            6. Retours et pièces sur mesure
          </h2>
          <p className="mt-2">
            Les pièces prêtes à l&apos;emploi peuvent être retournées en cas
            de défaut de fabrication, dans les conditions convenues avec
            l&apos;atelier au moment de la commande. Les pièces réalisées sur
            mesure, imprimées spécifiquement pour un client, ne sont
            reprises qu&apos;en cas de défaut de fabrication.
          </p>
        </section>
      </div>
    </div>
  );
}
