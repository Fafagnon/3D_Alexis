export type ProductCategory = "luminaires" | "decoration";

export interface Product {
  /** Unique, URL-safe identifier used in /produit/[slug] */
  slug: string;
  name: string;
  category: ProductCategory;
  /** Price in FCFA (XOF), no decimals. */
  price: number;
  /** One-line hook shown on cards. */
  tagline: string;
  /** Longer description shown on the product page. */
  description: string;
  /** Paths under /public, first image is used as the card thumbnail. */
  images: string[];
  /** Free-form specs shown in the "Matière & finition" accordion. Left empty where not yet confirmed by the atelier. */
  specs: {
    matiere?: string;
    dimensions?: string;
    couleurs?: string;
    finition?: string;
  };
  /** In-stock ready-made piece vs. made on request. */
  disponibilite: "en stock" | "sur commande";
}

export interface CartItem {
  slug: string;
  quantity: number;
}
