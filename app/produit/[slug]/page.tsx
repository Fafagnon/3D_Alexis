import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { products, getProductBySlug } from "@/data/products";
import { formatPrice } from "@/lib/format";
import AddToCartButton from "@/components/AddToCartButton";
import Accordion from "@/components/Accordion";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.tagline,
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const specEntries = Object.entries(product.specs).filter(([, v]) => Boolean(v));

  return (
    <div className="mx-auto max-w-content px-4 py-8 sm:px-6 sm:py-12 lg:py-16">
      <Link
        href="/boutique"
        className="mb-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink/70 transition-colors hover:text-red sm:mb-8"
      >
        <span aria-hidden="true">←</span>
        Retour à la boutique
      </Link>

      <div className="grid gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none overflow-hidden rounded-card bg-paper shadow-card outline outline-1 -outline-offset-1 outline-black/5">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="lg:pt-2">
          <p className="text-sm font-medium text-ink/50">
            {product.category === "luminaires" ? "Luminaire" : "Décoration"}
            {product.disponibilite === "sur commande" ? " · Sur commande" : ""}
          </p>
          <h1 className="mt-2 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
            {product.name}
          </h1>
          <p className="tabular-nums mt-4 text-xl font-semibold text-ink">
            {formatPrice(product.price)}
          </p>

          <p className="mt-6 max-w-md text-[1.02rem] leading-relaxed text-ink/70">
            {product.description}
          </p>

          <div className="mt-8">
            <AddToCartButton product={product} />
          </div>

          <div className="mt-10">
            {specEntries.length > 0 && (
              <Accordion title="Matière & finition" defaultOpen>
                <ul className="space-y-1.5">
                  {product.specs.couleurs && <li>Couleur : {product.specs.couleurs}</li>}
                  {product.specs.matiere && <li>Matière : {product.specs.matiere}</li>}
                  {product.specs.finition && <li>Finition : {product.specs.finition}</li>}
                  {product.specs.dimensions && <li>Dimensions : {product.specs.dimensions}</li>}
                </ul>
              </Accordion>
            )}
            <Accordion title="Livraison">
              <p>
                Retrait possible à Lomé, ou expédition partout au Togo et à
                l&apos;international. Les frais et délais sont communiqués par
                WhatsApp avant confirmation de la commande, selon votre
                destination.
              </p>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
