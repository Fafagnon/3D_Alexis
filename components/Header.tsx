import Link from "next/link";
import Logo from "./Logo";
import CartIcon from "./CartIcon";
import MobileNav from "./MobileNav";
import { NAV_LINKS } from "@/lib/nav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-sable/60 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-4 sm:px-6">
        <Link href="/" className="shrink-0 transition-opacity hover:opacity-90">
          <Logo />
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-7 lg:gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.925rem] font-medium text-ink/80 transition-colors hover:text-red focus-visible:text-red"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <CartIcon />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
