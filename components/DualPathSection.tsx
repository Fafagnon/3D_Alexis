import Image from "next/image";
import Link from "next/link";

export default function DualPathSection() {
  return (
    <section className="mx-auto max-w-content px-6 py-16 lg:py-24">
      <div className="grid gap-5 lg:grid-cols-2">
        <Link
          href="/boutique"
          className="group relative flex min-h-[26rem] flex-col justify-end overflow-hidden rounded-card bg-paper p-8 shadow-card outline outline-1 -outline-offset-1 outline-black/5 sm:p-10"
        >
          <div className="absolute inset-0">
            <Image
              src="/images/produits/lampe-globe-terrestre.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent" />
          </div>
          <div className="relative">
            <h2 className="font-display text-2xl font-bold text-cream">Prêt à l&apos;emploi</h2>
            <p className="mt-3 max-w-sm text-[0.95rem] leading-relaxed text-cream/80">
              Des pièces déjà imprimées, prêtes à être commandées : luminaires
              et objets de décoration disponibles dès maintenant.
            </p>
            <span className="mt-6 inline-block text-sm font-semibold text-cream underline decoration-cream/40 underline-offset-4 transition-colors group-hover:decoration-cream">
              Voir la boutique
            </span>
          </div>
        </Link>

        <Link
          href="/contact"
          className="group relative flex min-h-[26rem] flex-col justify-between overflow-hidden rounded-card bg-charcoal p-8 shadow-card sm:p-10"
        >
          <svg
            width="72"
            height="72"
            viewBox="0 0 72 72"
            fill="none"
            aria-hidden="true"
            className="text-cream/25 transition-colors duration-300 group-hover:text-red/60"
          >
            <path d="M4 20V4h16" stroke="currentColor" strokeWidth="1.4" />
            <path d="M68 20V4H52" stroke="currentColor" strokeWidth="1.4" />
            <path d="M4 52v16h16" stroke="currentColor" strokeWidth="1.4" />
            <path d="M68 52v16H52" stroke="currentColor" strokeWidth="1.4" />
            <circle cx="36" cy="36" r="1.6" fill="currentColor" />
          </svg>
          <div>
            <h2 className="font-display text-2xl font-bold text-cream">Sur mesure</h2>
            <p className="mt-3 max-w-sm text-[0.95rem] leading-relaxed text-cream/70">
              Une pièce technique, un objet personnel, une idée précise :
              décrivez votre projet, nous étudions la faisabilité et vous
              revenons avec un devis.
            </p>
            <span className="mt-6 inline-block text-sm font-semibold text-cream underline decoration-cream/40 underline-offset-4 transition-colors group-hover:decoration-red">
              Demander un devis
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
