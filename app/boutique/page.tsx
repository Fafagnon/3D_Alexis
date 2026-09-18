import type { Metadata } from "next";
import ProductGrid from "@/components/ProductGrid";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Boutique",
  description: "Les créations prêtes à l'emploi de l'atelier 3D D'ALEXIS.",
};

export default function BoutiquePage() {
  return (
    <div className="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
      <ProductGrid products={products} />
    </div>
  );
}

