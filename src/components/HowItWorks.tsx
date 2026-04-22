import { PHONE, PHONE_HREF } from "@/lib/constants";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Vous appelez",
      description: "Un conseiller vous répond immédiatement et prend en charge votre demande.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      number: "2",
      title: "On arrive en 30 min",
      description: "Un dépanneur professionnel est envoyé immédiatement à votre position.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      number: "3",
      title: "Problème résolu",
      description: "Réparation sur place ou remorquage vers le garage de votre choix.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
            Comment ça <span className="text-primary italic">marche</span> ?
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            3 étapes simples pour être dépanné rapidement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />

          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 shadow-lg shadow-primary/30">
                <span className="text-white">{step.icon}</span>
              </div>
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-dark border-2 border-primary rounded-full flex items-center justify-center z-20">
                <span className="text-primary font-bold text-sm">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-white/50 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white font-bold px-10 py-4 rounded-xl text-lg transition-colors shadow-lg shadow-primary/25 animate-pulse-slow"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Appelez maintenant : {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}
