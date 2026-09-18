/**
 * Formate un montant en FCFA avec un espace comme séparateur de milliers,
 * conforme à l'usage courant (ex. 10 000 FCFA). Le FCFA n'a pas de sous-unité
 * utilisée en pratique, donc aucune décimale n'est affichée.
 */
export function formatPrice(amount: number): string {
  const formatted = new Intl.NumberFormat("fr-FR", {
    maximumFractionDigits: 0,
  }).format(amount);
  return `${formatted} FCFA`;
}
