import Image from "next/image";
import { PHONE } from "@/lib/constants";
import PhoneLink from "@/components/PhoneLink";

const PHOTOS = [
  { src: "/photos/depannage-remarquage-01.jpg", alt: "Dépannage automobile - intervention sur route" },
  { src: "/photos/depannage-remarquage-03.jpg", alt: "Remorquage de véhicule en panne" },
  { src: "/photos/depannage-remarquage-04.jpg", alt: "Dépanneuse en intervention" },
  { src: "/photos/depannage-remarquage-05.jpg", alt: "Transport de véhicule accidenté" },
  { src: "/photos/depannage-remarquage-09.jpg", alt: "Remorquage rapide Paris ouest" },
  { src: "/photos/depannage-remarquage-12.jpg", alt: "Assistance routière 24h/24" },
  { src: "/photos/depannage-remarquage-16.jpg", alt: "Dépannage sur autoroute" },
  { src: "/photos/depannage-remarquage-18.jpg", alt: "Plateau dépanneuse professionnel" },
];

export default function PhotoGallery() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
            Nos <span className="text-primary italic">Interventions</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Quelques exemples de nos interventions récentes à Paris et alentours
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {PHOTOS.map((photo, i) => (
            <div
              key={photo.src}
              className={`relative overflow-hidden rounded-xl group ${
                i === 0 || i === 5 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className={`relative ${i === 0 || i === 5 ? "aspect-square" : "aspect-[4/3]"}`}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes={i === 0 || i === 5 ? "(max-width: 768px) 50vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-xs md:text-sm font-medium">{photo.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <PhoneLink className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg">
            Besoin d&apos;aide ? Appelez le {PHONE}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </PhoneLink>
        </div>
      </div>
    </section>
  );
}
