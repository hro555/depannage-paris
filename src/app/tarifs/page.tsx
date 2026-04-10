import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import { PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Tarifs Dépannage & Remorquage",
  description:
    "Tarifs transparents pour nos services de dépannage et remorquage à Le Chesnay, Versailles et alentours. Devis gratuit, pas de frais cachés.",
};

const TARIFS = [
  {
    name: "Dépannage sur place",
    price: "À partir de 89€",
    features: [
      "Diagnostic sur place",
      "Réparation si possible",
      "Batterie, pneu, démarreur",
      "Intervention en 30 min",
    ],
  },
  {
    name: "Remorquage Le Chesnay",
    price: "À partir de 119€",
    features: [
      "Transport jusqu'à 20 km",
      "Plateau ou dépanneuse",
      "Tous types de véhicules",
      "Prise en charge assurance",
    ],
    popular: true,
  },
  {
    name: "Remorquage Versailles et alentours",
    price: "À partir de 159€",
    features: [
      "Transport jusqu'à 50 km",
      "Banlieue et grande couronne",
      "Intervention 24h/24",
      "Devis personnalisé",
    ],
  },
];

export default function TarifsPage() {
  return (
    <>
      <section className="bg-dark py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Nos <span className="text-primary italic">Tarifs</span>
          </h1>
          <p className="text-lg text-white/50 max-w-3xl">
            Des tarifs transparents et compétitifs. Devis gratuit et sans engagement.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TARIFS.map((tarif) => (
              <div
                key={tarif.name}
                className={`rounded-2xl p-8 border-2 ${
                  tarif.popular
                    ? "border-primary bg-primary/5 relative"
                    : "border-white/10 bg-dark-card"
                }`}
              >
                {tarif.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-sm font-bold px-4 py-1 rounded-full">
                    Le plus demandé
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-2">{tarif.name}</h3>
                <div className="text-3xl font-extrabold text-primary mb-6">{tarif.price}</div>
                <ul className="space-y-3 mb-8">
                  {tarif.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-white/50">
                      <svg className="w-5 h-5 text-primary shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={PHONE_HREF}
                  className={`block text-center font-bold py-3 rounded-xl transition-colors ${
                    tarif.popular
                      ? "bg-primary hover:bg-primary-dark text-white"
                      : "bg-white/10 hover:bg-white/20 text-white"
                  }`}
                >
                  Appeler maintenant
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-dark-card border border-white/10 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-2">
              Besoin d&apos;un devis personnalisé ?
            </h3>
            <p className="text-white/50 mb-4">
              Pour un transport longue distance ou une situation particulière,
              contactez-nous pour un devis gratuit et adapté.
            </p>
            <a
              href={PHONE_HREF}
              className="text-primary font-semibold hover:underline text-lg"
            >
              {PHONE}
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
