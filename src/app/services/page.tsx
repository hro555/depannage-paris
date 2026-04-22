import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Nos Services de Dépannage Auto",
  description:
    "Remorquage, dépannage sur place, assistance accident, dépannage autoroute, transport de véhicule. Service 24h/24 à Paris et ouest parisien.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-dark py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Nos Services de <span className="text-primary italic">Remorquage</span>
          </h1>
          <p className="text-lg text-white/50 max-w-3xl">
            Découvrez l&apos;ensemble de nos prestations de dépannage et remorquage
            disponibles 24h/24 à Paris et dans l&apos;ouest parisien.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-dark">
        <div className="max-w-4xl mx-auto px-4 space-y-16">
          {SERVICES.map((service) => (
            <article key={service.slug} id={service.slug} className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {service.title}
              </h2>
              <p className="text-white/50 leading-relaxed text-lg">
                {service.description}
              </p>
              <p className="text-white/50 leading-relaxed mt-4">
                Nos techniciens qualifiés sont équipés de matériel professionnel pour assurer
                une intervention de qualité. Nous prenons en charge tous types de véhicules :
                voitures, utilitaires, motos et scooters. Contactez-nous pour un devis gratuit
                et personnalisé.
              </p>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
