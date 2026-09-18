# 3D D'ALEXIS — site e-commerce

Site Next.js pour l'atelier 3D D'ALEXIS (Lomé, Togo) : catalogue de créations
prêtes à l'emploi, demande de devis pour le sur mesure, panier client
(localStorage) avec commande envoyée sur WhatsApp.

## Démarrer en local

```bash
npm install
npm run dev
```

Le site est disponible sur http://localhost:3000.

## Modifier le catalogue

Tout le catalogue se trouve dans un seul fichier, à éditer sans toucher au
reste du code :

```
data/products.ts
```

Chaque produit est un objet avec : `slug` (utilisé dans l'URL de la fiche
produit, à ne pas changer une fois le site en ligne sans rediriger l'ancien
lien), `name`, `category` (`"luminaires"` ou `"decoration"`), `price` (en
FCFA, nombre entier sans espace), `tagline`, `description`, `images`
(chemins vers `/public/images/produits/`), `specs` et `disponibilite`.

**Prix actuels** : tous les prix sont provisoirement fixés à 10 000 FCFA en
attendant les tarifs définitifs — à corriger avant la mise en ligne.

Pour ajouter un produit, copiez un objet existant, changez `slug`, `name`,
`price`, `images`, et ajoutez la photo correspondante dans
`public/images/produits/`. Aucune base de données n'est utilisée pour cette
version : chaque modification du fichier nécessite un nouveau déploiement.

## Numéro WhatsApp

Le numéro utilisé pour recevoir les commandes et les demandes de devis est
centralisé dans `lib/whatsapp.ts` (`WHATSAPP_NUMBER`). Le format attendu est
international, sans "+" ni espaces (ex. `22891220017`).

## Paiement CinetPay (à venir)

Pour l'instant, la commande et le devis passent uniquement par un message
WhatsApp pré-rempli (voir `lib/whatsapp.ts`). L'intégration CinetPay
(Mobile Money — Flooz/Moov Africa et T-Money/Mixx by Yas) est prévue pour
une prochaine étape et remplacera ou complètera ce parcours sur la page
`/panier`.

## Déploiement sur Vercel

1. Poussez ce dossier sur un dépôt Git (GitHub, GitLab...).
2. Sur [vercel.com](https://vercel.com), importez le dépôt — Vercel détecte
   automatiquement Next.js, aucune configuration supplémentaire n'est
   nécessaire pour cette v1 (pas de variables d'environnement requises).
3. Chaque `git push` sur la branche principale redéploie le site.

## Structure du projet

```
app/                Pages (App Router) : accueil, boutique, fiche produit,
                     sur-mesure, à propos, contact, panier, pages légales
components/          Composants UI réutilisables
context/CartContext  Panier client (React Context + localStorage)
data/products.ts     Catalogue produits — seul fichier à modifier au quotidien
lib/                 Aides : formatage prix, liens WhatsApp, navigation
public/images/       Photos produits et visuel de l'atelier
```
