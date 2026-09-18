import Link from "next/link";
import Logo from "./Logo";
import { WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80">
      <div className="mx-auto max-w-content px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr] sm:gap-12">
          <div>
            <Logo theme="dark" withTagline />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/60">
              Atelier de création 3D basé à Lomé — pièces prêtes à l&apos;emploi
              et sur mesure, imprimées avec précision.
            </p>
            <p className="mt-5 text-xs uppercase tracking-[0.2em] text-cream/40">
              Qualité · Créativité · Innovation
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-cream">Navigation</h3>
            <ul className="mt-4 space-y-3 text-sm text-cream/60">
              <li><Link href="/boutique" className="transition-colors hover:text-red">Boutique</Link></li>
              <li><Link href="/a-propos" className="transition-colors hover:text-red">À Propos</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-red">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-cream">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-cream/60">
              <li>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="transition-colors hover:text-red">
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>Lomé, Togo</li>
              <li>
                <a href="https://www.instagram.com/p/DcQ-_S5RBEA/" target="_blank" rel="noreferrer noopener" className="transition-colors hover:text-red">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@3d.dalexis.offici" target="_blank" rel="noreferrer noopener" className="transition-colors hover:text-red">
                  TikTok
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-cream">Informations</h3>
            <ul className="mt-4 space-y-3 text-sm text-cream/60">
              <li><Link href="/livraison" className="transition-colors hover:text-red">Livraison</Link></li>
              <li><Link href="/cgv" className="transition-colors hover:text-red">CGV</Link></li>
              <li><Link href="/mentions-legales" className="transition-colors hover:text-red">Mentions légales</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-cream/10 pt-6 text-xs text-cream/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} 3D D&apos;ALEXIS. Tous droits réservés.</p>
          <p>Créations 3D prêtes &amp; sur mesure — Lomé, Togo</p>
        </div>
      </div>
    </footer>
  );
}
