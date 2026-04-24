import { PHONE, PHONE_HREF } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative bg-dark overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/40" />

      <div className="relative max-w-7xl mx-auto px-4 pt-10 pb-20 md:pt-10 md:pb-32 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
          <span className="text-white">Remorquage Auto</span>
          <br />
          <span className="text-primary">Chesnay, Versailles, Paris &amp; alentours</span>
        </h1>

        <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
          Dépannage et remorquage de voiture rapide et professionnel. Intervention
          en moins de 30 minutes à Paris et dans tout l&apos;ouest parisien.
        </p>

        <div className="inline-flex flex-col items-center gap-2">
          <span className="text-red-500 font-bold text-sm uppercase tracking-wider">
            Urgence immédiate
          </span>
        <a
          href={PHONE_HREF}
          className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white font-bold px-10 py-4 rounded-xl text-lg transition-colors shadow-lg shadow-primary/25"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Appelez {PHONE}
        </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-12">
          {[
            { icon: "clock", title: "24h/24", subtitle: "Disponible jour et nuit" },
            { icon: "bolt", title: "30 min", subtitle: "Intervention rapide" },
            { icon: "map", title: "Paris Ouest", subtitle: "et alentours" },
          ].map((badge) => (
            <div
              key={badge.title}
              className="bg-dark-lighter/80 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-4 flex flex-col items-center gap-1 min-w-[140px]"
            >
              <div className="text-primary mb-1">
                {badge.icon === "clock" && (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                {badge.icon === "bolt" && (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )}
                {badge.icon === "map" && (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
              </div>
              <span className="text-white font-bold text-lg">{badge.title}</span>
              <span className="text-white/50 text-xs">{badge.subtitle}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
