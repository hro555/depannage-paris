import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import { ZONES, PHONE, PHONE_HREF } from "@/lib/constants";
import PhoneLink from "@/components/PhoneLink";

export const metadata: Metadata = {
  title: "Zones d'intervention | Dépannage Paris et ouest parisien",
  description:
    "Dépannage et remorquage à Paris et ouest parisien : Boulogne-Billancourt, Neuilly, Versailles, Saint-Cloud, Nanterre et plus.",
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
            Notre flotte de dépanneuses couvre Paris et tout l&apos;ouest parisien.
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
                <PhoneLink className="text-primary font-semibold hover:underline">
                  Appeler pour {zone.name} &rarr;
                </PhoneLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Dépannage automobile à Paris et ouest parisien
          </h2>
          <div className="space-y-4 text-white/50 leading-relaxed">
            <p>
              Basés à Paris, nous intervenons principalement dans l&apos;ouest parisien :
              Paris (75), Hauts-de-Seine (92), Yvelines (78) et les communes voisines.
            </p>
            <p>
              Que vous soyez en panne sur le périphérique ouest, l&apos;A13, l&apos;A86
              ou dans une rue de Paris ou sa banlieue ouest, notre équipe de dépanneurs professionnels arrive
              en moyenne en 30 minutes.
            </p>
            <p>
              N&apos;hésitez pas à nous contacter au{" "}
              <PhoneLink className="text-primary font-semibold">
                {PHONE}
              </PhoneLink>{" "}
              pour une intervention immédiate ou un devis gratuit.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
