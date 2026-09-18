import Link from "next/link";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import WorkshopVideo from "@/components/WorkshopVideo";
import { products } from "@/data/products";

export default function HomePage() {
  const featured = products.slice(0, 4);

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-content px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="mb-8 flex flex-col gap-2 sm:mb-10 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
              Quelques pièces de l&apos;atelier
            </h2>
          </div>
          <Link
            href="/boutique"
            className="shrink-0 text-sm font-semibold text-ink/70 underline decoration-ink/20 underline-offset-4 transition-colors hover:text-red hover:decoration-red/40"
          >
            Voir toute la boutique →
          </Link>
        </div>
        <ProductGrid products={featured} />
      </section>

      <section className="border-t border-sable/60 bg-paper">
        <div className="mx-auto grid items-center gap-10 px-4 py-12 sm:gap-12 sm:px-6 sm:py-16 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:py-24 max-w-content">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
              Notre atelier
            </h2>
            <p className="mt-4 max-w-md text-[0.98rem] leading-relaxed text-ink/70 sm:mt-5 sm:text-[1.02rem]">
              3D D&apos;ALEXIS conçoit et imprime des objets décoratifs, des
              figurines et des pièces techniques. Chaque création passe par le
              même souci du détail, qu&apos;elle sorte telle quelle de
              l&apos;imprimante ou qu&apos;elle ait été dessinée à partir de
              votre idée.
            </p>

            <Link
              href="/a-propos"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink underline decoration-ink/25 underline-offset-4 transition-colors hover:text-red hover:decoration-red/40"
            >
              Découvrir l&apos;atelier
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="flex justify-center lg:justify-end">
            <WorkshopVideo />
          </div>
        </div>
      </section>

      <section className="border-t border-sable/60 bg-cream/40">
        <div className="mx-auto max-w-content px-4 py-16 text-center sm:px-6 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-2xl">
            <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl lg:text-4xl">
              Vous avez un projet ou une idée en tête ?
            </h2>
            <p className="mt-4 text-[0.98rem] leading-relaxed text-ink/75 sm:text-base">
              Pièce unique, objet décoratif, prototype ou besoin technique :
              partagez-nous votre besoin. Nous étudions sa faisabilité et vous
              accompagnons pas à pas.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/contact"
                className="flex h-12 items-center justify-center rounded-full bg-ink px-8 text-sm font-semibold text-cream shadow-sm transition-transform hover:bg-ink/90 active:scale-[0.97]"
              >
                Contactez-nous maintenant
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
