import { Product } from "@/types/product";

/**
 * Catalogue produits — 3D D'ALEXIS
 * ---------------------------------
 * Fichier à modifier directement, sans toucher au reste du code.
 *
 * - "price" est en FCFA (XOF), un nombre entier, sans espace ni symbole.
 * - "images" pointe vers des fichiers dans /public/images/produits/.
 *   Le premier chemin de la liste est utilisé comme vignette.
 * - "specs" : les champs laissés vides ne s'affichent simplement pas sur la
 *   fiche produit (pas de mention "à confirmer" côté client) — complétez-les
 *   au fur et à mesure que les informations sont disponibles.
 *
 * NOTE PRIX : tous les prix sont provisoirement fixés à 10 000 FCFA en
 * attendant les tarifs définitifs du client — à corriger avant mise en ligne.
 */

export const products: Product[] = [
  {
    slug: "plateau-arche-deux-niveaux",
    name: "Plateau Arche Deux Niveaux",
    category: "decoration",
    price: 10000,
    tagline: "Un plateau à deux niveaux à l'architecture en arche.",
    description:
      "Deux plateaux cannelés superposés, portés par une structure en arches concentriques. Pensé pour la salle de bain, l'entrée ou un coin bar, ce plateau donne du relief au rangement du quotidien — flacons, clés, petits objets.",
    images: ["/images/produits/plateau-arche.jpg"],
    specs: {
      couleurs: "Terracotta et écru",
      finition: "Plateaux à cannelures fines, structure mate",
    },
    disponibilite: "en stock",
  },
  {
    slug: "lampe-bulle",
    name: "Lampe Bulle",
    category: "luminaires",
    price: 10000,
    tagline: "Une lampe à poser aux formes empilées, entre bulle et lanterne.",
    description:
      "Trois volumes arrondis empilés, striés à la verticale, qui laissent passer une lumière chaude et diffuse une fois allumée. Posée sur un socle sombre, elle change de caractère entre le jour, où elle reste sculpturale, et le soir, où elle s'éclaire comme un lampion.",
    images: ["/images/produits/lampe-bulle.jpg"],
    specs: {
      couleurs: "Écru, socle noir",
      finition: "Surface finement striée, effet lanterne à l'allumage",
    },
    disponibilite: "en stock",
  },
  {
    slug: "lampe-vague-rouge",
    name: "Lampe Vague Rouge",
    category: "luminaires",
    price: 10000,
    tagline: "Une lampe au relief ondulé, dans le rouge de l'atelier.",
    description:
      "Une silhouette qui ondule du pied au sommet, imprimée dans un rouge profond qui devient incandescent une fois la lumière allumée. Une pièce d'appoint qui fonctionne aussi bien seule, sur une table basse, qu'en duo.",
    images: ["/images/produits/lampe-vague-rouge.jpg"],
    specs: {
      couleurs: "Rouge",
      finition: "Parois cannelées, diffusion chaude de la lumière",
    },
    disponibilite: "en stock",
  },
  {
    slug: "lampe-globe-terrestre",
    name: "Lampe Globe Terrestre",
    category: "luminaires",
    price: 10000,
    tagline: "Un globe terrestre lumineux, relief et lumière mêlés.",
    description:
      "Un globe translucide dont le relief des continents apparaît en transparence lorsque la lumière est allumée. Posée sur un socle simple, elle fonctionne autant comme veilleuse que comme objet de bureau ou de bibliothèque.",
    images: ["/images/produits/lampe-globe-terrestre.jpg"],
    specs: {
      couleurs: "Écru translucide, socle blanc",
      finition: "Relief topographique visible par transparence",
    },
    disponibilite: "en stock",
  },
  {
    slug: "lampe-cadre-geometrique",
    name: "Lampe Cadre Géométrique",
    category: "luminaires",
    price: 10000,
    tagline: "Une lampe sculpturale, cadre graphique autour d'une colonne de lumière.",
    description:
      "Une armature graphique en deux tons enveloppe une colonne centrale cannelée, qui diffuse la lumière sur toute sa hauteur. La pièce la plus architecturale de l'atelier, pensée comme un objet à part entière autant que comme un luminaire.",
    images: ["/images/produits/lampe-cadre-geometrique.jpg"],
    specs: {
      couleurs: "Noir et laiton, colonne écrue",
      finition: "Cadre graphique mat, colonne cannelée translucide",
    },
    disponibilite: "en stock",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "tous") return products;
  return products.filter((p) => p.category === category);
}
