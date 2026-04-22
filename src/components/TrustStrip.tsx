import { PHONE_HREF } from "@/lib/constants";

export default function TrustStrip() {
  const items = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Sur place en 30 min",
      subtitle: "Intervention ultra-rapide",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
      ),
      title: "Agréé assurances",
      subtitle: "Prise en charge directe",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Prix transparent",
      subtitle: "Devis gratuit, sans surprise",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "24h/24 - 7j/7",
      subtitle: "Jours fériés inclus",
    },
  ];

  return (
    <section className="bg-primary/10 border-y border-primary/20">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item) => (
            <a
              key={item.title}
              href={PHONE_HREF}
              className="flex items-center gap-3 group"
            >
              <div className="text-primary shrink-0">{item.icon}</div>
              <div>
                <div className="text-white font-bold text-sm group-hover:text-primary transition-colors">
                  {item.title}
                </div>
                <div className="text-white/40 text-xs">{item.subtitle}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
