export const SITE_NAME = "Dépannage Auto Le Chesnay - Service 24/7";
export const SITE_URL = "https://depannage-auto-paris.fr";
export const PHONE = "07 51 02 85 80";
export const PHONE_HREF = "tel:+33751028580";
export const EMAIL = "mactadevosyan91@gmail.com";
export const ADDRESS = "12 Rue de la République, 75001 Paris";

export const ZONES = [
  { name: "Paris intra-muros", slug: "paris" },
  { name: "Boulogne-Billancourt", slug: "boulogne-billancourt" },
  { name: "Saint-Denis", slug: "saint-denis" },
  { name: "Versailles", slug: "versailles" },
  { name: "Créteil", slug: "creteil" },
  { name: "Nanterre", slug: "nanterre" },
  { name: "Évry-Courcouronnes", slug: "evry-courcouronnes" },
  { name: "Bobigny", slug: "bobigny" },
  { name: "Pontoise", slug: "pontoise" },
  { name: "Melun", slug: "melun" },
  { name: "Argenteuil", slug: "argenteuil" },
  { name: "Montreuil", slug: "montreuil" },
] as const;

export const SERVICES = [
  {
    title: "Remorquage de véhicule",
    slug: "remorquage",
    description:
      "Transport sécurisé de votre véhicule vers le garage ou la destination de votre choix dans toute l'Île-de-France.",
    icon: "truck",
  },
  {
    title: "Dépannage sur place",
    slug: "depannage-sur-place",
    description:
      "Nos techniciens interviennent directement sur le lieu de la panne pour une réparation rapide : batterie, pneu, démarreur.",
    icon: "wrench",
  },
  {
    title: "Assistance accident",
    slug: "assistance-accident",
    description:
      "Prise en charge complète après un accident : sécurisation, remorquage et accompagnement administratif.",
    icon: "shield",
  },
  {
    title: "Dépannage autoroute",
    slug: "depannage-autoroute",
    description:
      "Intervention rapide sur les autoroutes et voies rapides d'Île-de-France, A1, A4, A6, A13, périphérique.",
    icon: "road",
  },
  {
    title: "Transport de véhicule",
    slug: "transport-vehicule",
    description:
      "Transport longue distance de votre véhicule partout en France. Devis gratuit et personnalisé.",
    icon: "map",
  },
  {
    title: "Dépannage 24h/24",
    slug: "depannage-24h",
    description:
      "Service d'urgence disponible 24 heures sur 24, 7 jours sur 7, y compris les jours fériés.",
    icon: "clock",
  },
] as const;
