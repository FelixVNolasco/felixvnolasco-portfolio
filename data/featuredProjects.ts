export type FeaturedProject = {
  id: string;
  name: string;
  year: string;
  category: string;
  description: string;
  href: string;
  image: string;
  supportImage?: string;
};

export type FeaturedBentoProject = FeaturedProject & {
  supportImage: string;
};

const MOLIERE_HERO = "/projects/MoliereHero.webp";
const HERO_NEW = "/projects/HeroNew.webp";
const COPA_BANNER = "/projects/Banner_Horizontal-COPA.webp";
const COPA_HERO = "/projects/COPA-HERO.webp";
const OGC_1 = "/projects/OGC-1.webp";
const OGC_2 = "/projects/OGC-2.webp";
const POLYGON_1 = "/projects/POLYGON-1.png";
const EPI_1 = "/projects/EPI-1.png";
const KAISER_1 = "/projects/KAISER-1.png";
const TECNOVIDRIO_1 = "/projects/TECNOVIDRIO-1.webp";
const LARENA_1 = "/projects/LARENA-1.png";

export const leftProjects: FeaturedBentoProject[] = [
  {
    id: "ogc",
    name: "OGC",
    year: "2026",
    category: "Web Application",
    description:
      "Real-time budget control, progress tracking, and on-site reporting — all in one place. Stop guessing. Start managing.",
    href: "https://www.ogc.mx/",
    image: OGC_1,
    supportImage: OGC_2,
  },
  {
    id: "copa-padel",
    name: "Copa Padel",
    year: "2023",
    category: "E-commerce Website",
    description:
      "From this house, the game took shape and went out into the world. COPA Corcuera Pádel 1969® was created from a single idea: to share the origin of padel with the world.",
    href: "https://copapadel.com/",
    image: COPA_BANNER,
    supportImage: COPA_HERO,
  },
  {
    id: "grupo-amphytrion",
    name: "Grupo Amphytrion",
    year: "2023",
    category: "Hospitality Website",
    description: "Rent favorite spaces for private events in Mexico City",
    href: "https://www.amphitryon.mx/",
    image: MOLIERE_HERO,
    supportImage: HERO_NEW,
  },
];

export const rightProjects: FeaturedProject[] = [
  {
    id: "grupo-tecnovidrio",
    name: "GRUPO TECNOVIDRIO",
    year: "2024",
    category: "Corporate Website",
    description:
      "Digital presence to showcase glass and aluminum solutions with a clear service structure, business trust and straightforward navigation.",
    href: "https://tecnovidrio-projects-eight.vercel.app/",
    image: TECNOVIDRIO_1,
  },
  {
    id: "larena",
    name: "LARENA",
    year: "2025",
    category: "Architecture Portfolio",
    description:
      "Brand page with an editorial focus to communicate proposal, catalog and contact points without losing a clean reading experience.",
    href: "https://www.larena.mx/",
    image: LARENA_1,
  },
  {
    id: "epi-group",
    name: "EPI GROUP",
    year: "2025",
    category: "Corporate Website",
    description:
      "Web experience for a business group, organized to explain services, operational scope and institutional credibility.",
    href: "https://cotizador-epi-group.vercel.app/",
    image: EPI_1,
  },
  {
    id: "polygon-agency",
    name: "Polygon Agency",
    year: "2023",
    category: "Creative Agency Website",
    description:
      "We help companies like yours with a unique marketing approach.",
    href: "https://www.polygonag.com/",
    image: POLYGON_1,
  },
  {
    id: "kaiser",
    name: "KAISER",
    year: "2023",
    category: "Brand Website",
    description:
      "A catalog hub for photo albums, ceremony books, and frames — pick a PDF and go.",
    href: "https://www.kaiser.com.mx/",
    image: KAISER_1,
  },
];
