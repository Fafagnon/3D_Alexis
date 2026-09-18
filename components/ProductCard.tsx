import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { formatPrice } from "@/lib/format";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/produit/${product.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden rounded-card bg-paper shadow-card outline outline-1 -outline-offset-1 outline-black/5">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 40vw, 90vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
        {product.disponibilite === "sur commande" && (
          <span className="absolute left-2.5 top-2.5 rounded-full bg-charcoal/85 px-2.5 py-0.5 text-[0.6rem] font-medium uppercase tracking-wide text-cream backdrop-blur-sm sm:left-3 sm:top-3 sm:px-3 sm:py-1 sm:text-[0.65rem]">
            Sur commande
          </span>
        )}
      </div>
      <div className="mt-3 flex flex-col justify-between gap-1 sm:mt-3.5 sm:flex-row sm:items-start sm:gap-2">
        <div>
          <h3 className="font-display text-sm font-semibold leading-snug text-ink transition-colors group-hover:text-red sm:text-[0.95rem]">
            {product.name}
          </h3>
          <p className="mt-0.5 text-xs text-ink/55 sm:text-sm">
            {product.category === "luminaires" ? "Luminaire" : "Décoration"}
          </p>
        </div>
        <p className="tabular-nums shrink-0 text-sm font-semibold text-ink sm:text-[0.95rem]">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
