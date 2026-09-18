"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/nav";
import { WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from "@/lib/whatsapp";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  // Fermer le menu lors du changement de route
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Fermer le menu si la touche Échap est pressée
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, handleClose]);

  // Fermer le menu si l'écran repasse en affichage bureau (>= 768px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Verrouiller le défilement du corps de la page quand le menu est ouvert
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      {/* Bouton Hamburger */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Fermer le menu de navigation" : "Ouvrir le menu de navigation"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        className="relative flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-ink/5 active:scale-95 focus-visible:ring-2 focus-visible:ring-red"
      >
        <span className="relative flex h-4 w-5 flex-col justify-between" aria-hidden="true">
          <span
            className={`block h-[2px] w-full rounded-full bg-ink transition-all duration-300 ease-out origin-center ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-full rounded-full bg-ink transition-all duration-200 ease-out ${
              open ? "opacity-0 scale-x-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-[2px] w-full rounded-full bg-ink transition-all duration-300 ease-out origin-center ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {/* Backdrop overlay */}
      <div
        onClick={handleClose}
        aria-hidden="true"
        className={`fixed inset-0 top-[64px] z-40 bg-charcoal/40 backdrop-blur-sm transition-opacity duration-300 ease-out ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer panneau coulissant */}
      <div
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation principale mobile"
        className={`fixed inset-x-0 top-[64px] z-40 flex h-[calc(100dvh-64px)] flex-col justify-between overflow-y-auto bg-paper px-6 py-7 shadow-lifted border-b border-sable/60 transition-all duration-300 ease-out ${
          open
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        {/* Liens de navigation */}
        <nav className="flex flex-col divide-y divide-sable/50">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href.split("#")[0]);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleClose}
                className={`flex items-center justify-between py-4 font-display text-2xl font-bold tracking-tightish transition-colors active:text-red ${
                  isActive ? "text-red" : "text-ink hover:text-red"
                }`}
              >
                <span>{link.label}</span>
                <span
                  className={`text-lg transition-transform ${
                    isActive ? "text-red translate-x-1" : "text-ink/30"
                  }`}
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Section Contact & Réseaux sociaux */}
        <div className="mt-8 border-t border-sable/60 pt-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-ink/50">
            Échanger directement
          </p>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-3 flex items-center justify-between rounded-card-inner bg-cream/70 p-3.5 border border-sable/60 transition-colors hover:bg-cream active:scale-[0.99]"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-cream">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <div>
                <p className="text-xs font-medium text-ink/60">WhatsApp Atelier</p>
                <p className="text-sm font-semibold text-ink">{WHATSAPP_DISPLAY}</p>
              </div>
            </div>
            <span className="text-xs font-semibold text-red underline underline-offset-2">
              Écrire
            </span>
          </a>

          <div className="mt-5 flex items-center justify-between text-sm text-ink/70">
            <span className="text-xs text-ink/50">Lomé, Togo</span>
            <div className="flex gap-4 font-medium">
              <a
                href="https://www.instagram.com/p/DcQ-_S5RBEA/"
                target="_blank"
                rel="noreferrer noopener"
                className="transition-colors hover:text-red"
              >
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@3d.dalexis.offici"
                target="_blank"
                rel="noreferrer noopener"
                className="transition-colors hover:text-red"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
