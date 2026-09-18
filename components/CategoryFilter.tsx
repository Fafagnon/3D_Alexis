import Link from "next/link";

const CATEGORIES = [
  { value: "tous", label: "Tout" },
  { value: "luminaires", label: "Luminaires" },
  { value: "decoration", label: "Décoration" },
];

export default function CategoryFilter({ active }: { active: string }) {
  return (
    <div className="flex flex-wrap gap-2">
      {CATEGORIES.map((cat) => {
        const isActive = active === cat.value;
        return (
          <Link
            key={cat.value}
            href={cat.value === "tous" ? "/boutique" : `/boutique?categorie=${cat.value}`}
            className={`rounded-full px-4 py-2 text-xs font-semibold sm:text-sm transition-all active:scale-95 ${
              isActive
                ? "bg-ink text-cream shadow-sm"
                : "border border-sable/80 bg-paper/80 text-ink/70 hover:border-ink/30 hover:text-ink"
            }`}
          >
            {cat.label}
          </Link>
        );
      })}
    </div>
  );
}
