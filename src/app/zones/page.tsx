import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import { ZONES, PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Zones d'intervention | Dépannage Île-de-France",
  description:
    "Dépannage et remorquage dans toute l'Île-de-France : Paris, Boulogne-Billancourt, Versailles, Saint-Denis, Créteil, Nanterre et plus.",
};

export default function ZonesPage() {
  return (
    <>
      <section className="bg-dark py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Zone d&apos;<span className="text-primary italic">Intervention</span>
          </h1>
          <p className="text-lg text-white/50 max-w-3xl">
            Notre flotte de dépanneuses couvre l&apos;ensemble de Paris et de l&apos;Île-de-France.
            Intervention rapide garantie en 30 minutes.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ZONES.map((zone) => (
              <article
                key={zone.slug}
                id={zone.slug}
                className="bg-dark-card border border-white/10 rounded-2xl p-6 hover:border-primary/40 transition-all scroll-mt-24"
              >
                <h2 className="text-xl font-bold text-white mb-3">
                  Dépannage à {zone.name}
                </h2>
                <p className="text-white/50 leading-relaxed mb-4">
                  Service de dépannage et remorquage automobile à {zone.name} et ses environs.
                  Intervention rapide 24h/24, 7j/7. Nos dépanneurs connaissent parfaitement
                  le secteur de {zone.name} pour une prise en charge optimale.
                </p>
                <a
                  href={PHONE_HREF}
                  className="text-primary font-semibold hover:underline"
                >
                  Appeler pour {zone.name} &rarr;
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Dépannage automobile en Île-de-France
          </h2>
          <div className="space-y-4 text-white/50 leading-relaxed">
            <p>
              Basés à Paris, nous intervenons dans l&apos;ensemble des départements
              d&apos;Île-de-France : Paris (75), Hauts-de-Seine (92), Seine-Saint-Denis (93),
              Val-de-Marne (94), Yvelines (78), Essonne (91), Val-d&apos;Oise (95) et
              Seine-et-Marne (77).
            </p>
            <p>
              Que vous soyez en panne sur le périphérique, sur une autoroute d&apos;Île-de-France
              ou dans une rue de banlieue, notre équipe de dépanneurs professionnels arrive
              en moyenne en 30 minutes.
            </p>
            <p>
              N&apos;hésitez pas à nous contacter au{" "}
              <a href={PHONE_HREF} className="text-primary font-semibold">
                {PHONE}
              </a>{" "}
              pour une intervention immédiate ou un devis gratuit.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
