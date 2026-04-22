import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import HowItWorks from "@/components/HowItWorks";
import ServiceCard from "@/components/ServiceCard";
import PhotoGallery from "@/components/PhotoGallery";
import Reviews from "@/components/Reviews";
import CTASection from "@/components/CTASection";
import { SERVICES, ZONES, PHONE, PHONE_HREF } from "@/lib/constants";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <HowItWorks />

      {/* Services */}
      <section className="py-16 md:py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
              Nos Services de <span className="text-primary italic">Remorquage</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Professionnel du remorquage auto et dépannage voiture à Paris et alentours ouest – service 24/7
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Zones */}
      <section className="py-16 md:py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
              Zone d&apos;<span className="text-primary italic">Intervention</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Remorquage auto et dépannage voiture à Paris et dans l&apos;ouest parisien
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {ZONES.map((zone) => (
              <Link
                key={zone.slug}
                href={`/zones#${zone.slug}`}
                className="bg-dark-card border border-white/10 rounded-xl p-4 text-center font-medium text-white/70 hover:text-primary hover:border-primary/40 transition-all"
              >
                {zone.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      <PhotoGallery />

      <Reviews />

      {/* Why us */}
      <section className="py-16 md:py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
              Pourquoi Choisir Notre <span className="text-primary italic">Service</span> ?
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Experts du remorquage auto à Paris et alentours ouest
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Disponibilité 24/7",
                text: "Service de dépannage disponible jour et nuit, tous les jours de l'année, y compris les jours fériés.",
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Intervention Rapide",
                text: "Nos dépanneurs interviennent en moins de 30 minutes à Paris et dans l'ouest parisien.",
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Professionnels Certifiés",
                text: "Équipe expérimentée et agréée par les principales compagnies d'assurance.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-dark-card border border-white/10 rounded-2xl p-8 text-center hover:border-primary/40 transition-all"
              >
                <div className="text-primary flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/50 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA with phone */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-white/40 mb-4">
            Service professionnel de remorquage automobile et dépannage voiture.<br />
            Intervention 24h/24 - 7j/7 à Paris et alentours ouest
          </p>
          <a
            href={PHONE_HREF}
            className="text-primary text-3xl font-extrabold hover:underline"
          >
            {PHONE}
          </a>
          <div className="mt-6">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-3 rounded-xl transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {PHONE}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
