import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <p className="py-16 text-center text-ink/50">
        Aucune pièce dans cette catégorie pour le moment.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-x-3.5 gap-y-8 sm:gap-x-5 sm:gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
