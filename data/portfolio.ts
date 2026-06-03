export type NavigationLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  kind: "email" | "linkedin";
};

export type Skill = {
  title: string;
  description: string;
};

export type Project = {
  name: string;
  href: string;
  gradientClassName: string;
};

type Portfolio = {
  owner: {
    name: string;
    role: string;
    avatar: {
      src: string;
      alt: string;
    };
    bio: string;
  };
  seo: {
    title: string;
    keywords: string;
    description: string;
  };
  navigation: NavigationLink[];
  socials: SocialLink[];
  skills: {
    featured: Skill[];
    additional: string[];
  };
  projects: Project[];
};

export const portfolio: Portfolio = {
  owner: {
    name: "Felix Enrique Vega Nolasco",
    role: "Sr. Software Developer",
    avatar: {
      src: "https://media.licdn.com/dms/image/v2/D5603AQFojN6lxrl3Sg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1707966633734?e=1782345600&v=beta&t=z9PHmICIDgufFcm7gn2LEKeHkCCuahd7oKEryZJWljo",
      alt: "Felix Enrique Vega Nolasco avatar",
    },
    bio: "Senior Software Developer focused on full-stack web applications, internal business dashboards, financial and operational modules, secure role-based workflows, and high-performance Shopify storefronts.",
  },
  seo: {
    title: "Felix Enrique Vega Nolasco | Sr. Software Developer",
    keywords:
      "Sr. Software Developer, Felix Enrique Vega Nolasco, felixvnolasco, React, TypeScript, Next.js, Convex, Shopify, Liquid, Python, SQL",
    description:
      "Personal portfolio for Felix Enrique Vega Nolasco, Sr. Software Developer focused on full-stack web applications, business dashboards, Shopify storefronts, and data-driven systems.",
  },
  navigation: [
    { label: "Home", href: "#" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  socials: [
    {
      label: "Email Felix Enrique Vega Nolasco",
      href: "mailto:felixvnolasco@gmail.com",
      kind: "email",
    },
    {
      label: "Felix Enrique Vega Nolasco on LinkedIn",
      href: "https://www.linkedin.com/in/felixvnolasco/",
      kind: "linkedin",
    },
  ],
  skills: {
    featured: [
      { title: "React, TypeScript, Next.js", description: "for modern frontend development" },
      {
        title: "Convex, SQL, Python",
        description: "for backend, data workflows, and business reporting",
      },
      { title: "Shopify, Liquid 2.0, Technical SEO", description: "for e-commerce storefronts" },
    ],
    additional: [
      "Vue.js",
      "Angular",
      "Vite",
      "TailwindCSS",
      "Radix UI",
      "shadcn/ui",
      "TanStack Table",
      "Zustand",
      "React Hook Form",
      "Zod",
      "Clerk",
      "RBAC",
      "MongoDB",
      "C#",
      ".NET Core",
      "AWS",
      "Vercel",
      "Git",
      "GitHub",
      "Claude Code",
      "OpenCode",
    ],
  },
  projects: [
    {
      name: "Grupo Amphytrion",
      href: "https://www.amphitryon.mx/",
      gradientClassName: "from-[#D8B4FE] to-[#818CF8]",
    },
    {
      name: "Copa Padel",
      href: "https://copapadel.com/",
      gradientClassName: "from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]",
    },
    {
      name: "Ogarrio Arquitectos",
      href: "https://www.ogarrioarquitectos.com/",
      gradientClassName: "from-[#C4D6B0] via-[#477998] to-[#FECACA]",
    },
    {
      name: "Polygon Agency",
      href: "https://www.polygonag.com/",
      gradientClassName: "from-[#456989] via-[#477998] to-[#67389c]",
    },
    {
      name: "Grupo Tecnovidrio",
      href: "https://tecnovidrio-projects-eight.vercel.app/",
      gradientClassName: "from-[#22375f] via-[#477998] to-[#1b2b41]",
    },
    {
      name: "Olympia Greek",
      href: "https://www.olympiagreekyogurt.com/",
      gradientClassName: "from-[#80c4d4] via-[#477998] to-[#304579]",
    },
    {
      name: "Larena",
      href: "https://www.larena.mx/",
      gradientClassName: "from-[#838383] via-[#477998] to-[#454545]",
    },
    {
      name: "EPI Group",
      href: "https://cotizador-epi-group.vercel.app/",
      gradientClassName: "from-[#a4c8d2] via-[#477998] to-[#182f40]",
    },
  ],
};
