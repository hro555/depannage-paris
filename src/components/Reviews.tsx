export default function Reviews() {
  const reviews = [
    {
      name: "Thomas D.",
      date: "Il y a 2 semaines",
      text: "Panne de batterie à 23h au Chesnay. Le dépanneur est arrivé en 25 minutes. Très professionnel et tarif honnête. Je recommande !",
      stars: 5,
    },
    {
      name: "Sophie M.",
      date: "Il y a 1 mois",
      text: "Remorquage rapide après un accident à Versailles. L'équipe a été très réactive et m'a aidée avec les démarches d'assurance. Service impeccable.",
      stars: 5,
    },
    {
      name: "Karim B.",
      date: "Il y a 3 semaines",
      text: "Crevaison sur l'A13 un dimanche matin. Intervention en moins de 30 minutes. Prix annoncé au téléphone respecté. Merci !",
      stars: 5,
    },
    {
      name: "Marie-Claire L.",
      date: "Il y a 1 mois",
      text: "Mon véhicule ne démarrait plus à Vélizy. Dépanneur très aimable, a réglé le problème sur place. Rapport qualité-prix excellent.",
      stars: 4,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
            Avis de nos <span className="text-primary italic">Clients</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg key={s} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-white font-bold text-lg">4.9/5</span>
            <span className="text-white/40 text-sm">basé sur 127 avis</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-dark-card border border-white/10 rounded-2xl p-6 hover:border-primary/40 transition-all"
            >
              <div className="flex mb-3">
                {Array.from({ length: review.stars }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <span className="text-white font-semibold text-sm">{review.name}</span>
                <span className="text-white/30 text-xs">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
