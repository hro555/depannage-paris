import { PHONE } from "@/lib/constants";
import PhoneLink from "@/components/PhoneLink";

export default function CTASection() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-primary rounded-2xl px-8 py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
            Besoin d&apos;un remorquage maintenant ?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Appelez-nous immédiatement pour une intervention rapide
          </p>
          <PhoneLink className="inline-flex items-center gap-3 bg-white hover:bg-white/90 text-dark font-bold px-10 py-4 rounded-xl text-xl transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {PHONE}
          </PhoneLink>
        </div>
      </div>
    </section>
  );
}
