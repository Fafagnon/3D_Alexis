import Image from "next/image";

interface LogoProps {
  withTagline?: boolean;
  className?: string;
  /** "light" pour fond clair (défaut), "dark" pour le bandeau footer. */
  theme?: "light" | "dark";
}

/**
 * Logo officiel de l'atelier 3D D'ALEXIS, utilisant le visuel réel (/images/enseigne-atelier.jpg).
 */
export default function Logo({
  withTagline = false,
  className = "",
  theme = "light",
}: LogoProps) {
  const textColor = theme === "dark" ? "text-cream" : "text-ink";
  const taglineColor = theme === "dark" ? "text-cream/50" : "text-ink/60";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border border-sable/60 shadow-sm">
        <Image
          src="/images/enseigne-atelier.jpg"
          alt="Logo 3D D'ALEXIS"
          fill
          sizes="40px"
          priority
          className="object-cover"
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[1.05rem] font-bold tracking-tightish sm:text-[1.15rem] ${textColor}`}>
          3D D&apos;ALEXIS
        </span>
        {withTagline && (
          <span className={`mt-1 text-[0.62rem] font-medium tracking-[0.2em] ${taglineColor}`}>
            IMPRESSION 3D
          </span>
        )}
      </span>
    </span>
  );
}
