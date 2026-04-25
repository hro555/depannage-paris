import type { Metadata } from "next";
import { PHONE, PHONE_HREF, EMAIL, ADDRESS } from "@/lib/constants";
import PhoneLink from "@/components/PhoneLink";

export const metadata: Metadata = {
  title: "Contact | Dépannage Auto Paris",
  description:
    "Contactez notre service de dépannage automobile à Paris. Disponible 24h/24, 7j/7. Appel, email ou formulaire de contact.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-dark py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="text-primary italic">Contactez</span>-nous
          </h1>
          <p className="text-lg text-white/50 max-w-3xl">
            Besoin d&apos;un dépannage urgent ou d&apos;un devis ? Nous sommes disponibles
            24h/24 et 7j/7.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8">
              Nos coordonnées
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-white">Téléphone</h3>
                  <PhoneLink className="text-primary text-lg font-semibold hover:underline">
                    {PHONE}
                  </PhoneLink>
                  <p className="text-sm text-white/40 mt-1">Disponible 24h/24 - 7j/7</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-white">Email</h3>
                  <a href={`mailto:${EMAIL}`} className="text-primary hover:underline">
                    {EMAIL}
                  </a>
                  <p className="text-sm text-white/40 mt-1">Réponse sous 1h en journée</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-white">Adresse</h3>
                  <p className="text-white/50">{ADDRESS}</p>
                </div>
              </div>
            </div>

            <div className="mt-10 bg-dark-card border border-white/10 rounded-2xl h-64 flex items-center justify-center text-white/30">
              <p className="text-center">
                Intégrez ici votre carte Google Maps<br />
                <span className="text-sm">(iframe Google Maps)</span>
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8">
              Demande de devis gratuit
            </h2>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="nom" className="block text-sm font-medium text-white/70 mb-1">
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-dark-card border border-white/10 text-white placeholder-white/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="telephone" className="block text-sm font-medium text-white/70 mb-1">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-dark-card border border-white/10 text-white placeholder-white/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                    placeholder="06 12 34 56 78"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-xl bg-dark-card border border-white/10 text-white placeholder-white/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-white/70 mb-1">
                  Type de service
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 rounded-xl bg-dark-card border border-white/10 text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                >
                  <option value="">Sélectionnez un service</option>
                  <option value="remorquage">Remorquage</option>
                  <option value="depannage">Dépannage sur place</option>
                  <option value="accident">Assistance accident</option>
                  <option value="autoroute">Dépannage autoroute</option>
                  <option value="transport">Transport de véhicule</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-dark-card border border-white/10 text-white placeholder-white/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition resize-none"
                  placeholder="Décrivez votre situation (lieu, type de véhicule, problème rencontré...)"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl transition-colors text-lg"
              >
                Envoyer la demande
              </button>
              <p className="text-xs text-white/30 text-center">
                En soumettant ce formulaire, vous acceptez d&apos;être contacté par notre équipe.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
