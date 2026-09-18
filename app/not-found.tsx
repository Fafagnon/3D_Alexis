import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-content flex-col items-start px-6 py-28">
      <p className="font-display text-6xl font-bold text-red/70">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold text-ink">
        Cette page n&apos;existe pas
      </h1>
      <p className="mt-2 max-w-sm text-ink/60">
        Le lien est peut-être incorrect, ou la page a été déplacée.
      </p>
      <Link
        href="/"
        className="mt-8 flex h-12 items-center rounded-full bg-ink px-8 text-sm font-semibold text-cream transition-transform active:scale-[0.96]"
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
