import Link from "next/link";
import { SITE_NAME, PHONE, PHONE_HREF, EMAIL, ADDRESS, ZONES, SERVICES } from "@/lib/constants";
import PhoneLink from "@/components/PhoneLink";

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">{SITE_NAME}</h3>
          <p className="text-white/40 text-sm leading-relaxed">
            Service de dépannage et remorquage automobile disponible 24h/24 et 7j/7 à Paris
            et dans tout l&apos;ouest parisien. Intervention rapide garantie.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Nos services</h3>
          <ul className="space-y-2 text-sm">
            {SERVICES.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`} className="text-white/40 hover:text-primary transition-colors">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Zones */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Zones d&apos;intervention</h3>
          <ul className="space-y-2 text-sm">
            {ZONES.slice(0, 6).map((z) => (
              <li key={z.slug}>
                <Link href={`/zones#${z.slug}`} className="text-white/40 hover:text-primary transition-colors">
                  {z.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/zones" className="text-primary hover:underline">
                Voir toutes les zones &rarr;
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <PhoneLink className="hover:text-primary transition-colors font-semibold text-primary text-lg">
                {PHONE}
              </PhoneLink>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="text-white/40 hover:text-primary transition-colors">
                {EMAIL}
              </a>
            </li>
            <li className="text-white/40">{ADDRESS}</li>
            <li className="text-primary font-semibold">24h/24 - 7j/7</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} {SITE_NAME}. Tous droits réservés.</p>
          <div className="flex gap-4">
            <Link href="/mentions-legales" className="hover:text-white/60 transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-white/60 transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
