import { Product } from "@/types/product";
import { formatPrice } from "./format";

/** Numéro WhatsApp de l'atelier, format international sans "+" ni espaces. */
export const WHATSAPP_NUMBER = "22891220017";
export const WHATSAPP_DISPLAY = "+228 91 22 00 17";

interface OrderLine {
  product: Product;
  quantity: number;
}

function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Construit le lien WhatsApp pré-rempli avec le récapitulatif du panier.
 * Tant que le paiement CinetPay n'est pas branché, c'est le seul canal de
 * commande : le client envoie ce message et l'atelier confirme la suite.
 */
export function buildOrderWhatsAppLink(lines: OrderLine[]): string {
  const total = lines.reduce((sum, l) => sum + l.product.price * l.quantity, 0);

  const itemsText = lines
    .map(
      (l) =>
        `- ${l.product.name} x${l.quantity} — ${formatPrice(l.product.price * l.quantity)}`
    )
    .join("\n");

  const message = [
    "Bonjour 3D D'ALEXIS, je souhaite commander :",
    "",
    itemsText,
    "",
    `Total : ${formatPrice(total)}`,
    "",
    "Merci de me confirmer la disponibilité et les modalités de livraison.",
  ].join("\n");

  return buildWhatsAppLink(message);
}

interface QuoteRequest {
  nom: string;
  description: string;
  dimensions?: string;
  delai?: string;
}

/** Construit le lien WhatsApp pré-rempli pour une demande de devis sur mesure. */
export function buildQuoteWhatsAppLink(request: QuoteRequest): string {
  const message = [
    `Bonjour 3D D'ALEXIS, je m'appelle ${request.nom || "[nom]"} et j'ai un projet sur mesure :`,
    "",
    request.description || "[description du projet]",
    request.dimensions ? `\nDimensions envisagées : ${request.dimensions}` : "",
    request.delai ? `\nDélai souhaité : ${request.delai}` : "",
  ]
    .join("\n")
    .trim();

  return buildWhatsAppLink(message);
}
