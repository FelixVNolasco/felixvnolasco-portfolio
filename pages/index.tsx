import type { NextPage } from "next";
import Link from "next/link";
import { portfolio } from "../data/portfolio";
import { FeaturedProjectBento, FeaturedProjectHorizontal } from "../components";

type EditorialProject = {
  name: string;
  year: string;
  category: string;
  description: string;
  href: string;
  image: ImageSource;
  supportImage: ImageSource;
};

type EditorialProjectHorizontal = {
  name: string;
  year: string;
  category: string;
  description: string;
  href: string;
  image: ImageSource;  
};

type ImageSource = string | { src: string };

const MOLIERE_HERO = "/projects/MoliereHero.webp";
const HERO_NEW = "/projects/HeroNew.webp";
const COPA_1 = "/projects/Banner_Horizontal-COPA.webp";
const COPA_2 = "/projects/COPA-HERO.webp";
const OGC_1 = "/projects/OGC-1.webp";
const OGC_2 = "/projects/OGC-2.webp";
const POLYGON_1 = "/projects/POLYGON-1.png";
const EPI_1 = "/projects/EPI-1.png";
const KAISER_1 = "/projects/KAISER-1.png";
const TECNOVIDRIO_1 = "/projects/TECNOVIDRIO-1.webp";
const OLYMPIA_1 = "/projects/olympia-1.png";
const LARENA_1 = "/projects/LARENA-1.png";

const leftProjects: EditorialProject[] = [
    {
    name: "OGC",
    year: "2026",
    category: "Web Application",
    description:
      "Real-time budget control, progress tracking, and on-site reporting — all in one place. Stop guessing. Start managing.",
    href: "https://www.ogarrioarquitectos.com/",
    image: OGC_1,
    supportImage: OGC_2,
  },
    {
    name: "Copa Padel",
    year: "2023",
    category: "E-commerce Website",
    description:
      "From this house, the game took shape and went out into the world. COPA Corcuera Pádel 1969® was created from a single idea: to share the origin of padel with the world.",
    href: "https://copapadel.com/",
    image: COPA_1,
    supportImage: COPA_2,
  },
  {
    name: "Grupo Amphytrion",
    year: "2023",
    category: "Hospitality Website",
    description:
      "Rent favorite spaces for private events in Mexico City",
    href: "https://www.amphitryon.mx/",
    image: MOLIERE_HERO,
    supportImage:
      HERO_NEW,
  },
];

const rightProjects: EditorialProjectHorizontal[] = [
  {
    name: "GRUPO TECNOVIDRIO",
    year: "2024",
    category: "Corporate Website",
    description:
      "Digital presence to showcase glass and aluminum solutions with a clear service structure, business trust and straightforward navigation.",
    href: "https://tecnovidrio-projects-eight.vercel.app/",
    image: TECNOVIDRIO_1,    
  },
  {
    name: "OLYMPIA GREEK",
    year: "2024",
    category: "Brand Website",
    description:
      "Olympia Greek Yogurt is a charming establishment dedicated to crafting creamy, authentic Greek yogurt that delights the palate and nourishes the body.",
    href: "https://www.olympiagreekyogurt.com/",
    image: OLYMPIA_1,
  },
  {
    name: "LARENA",
    year: "2025",
    category: "Architecture Portfolio",
    description:
      "Brand page with an editorial focus to communicate proposal, catalog and contact points without losing a clean reading experience.",
    href: "https://www.larena.mx/",
    image: LARENA_1,
  },
  {
    name: "EPI GROUP",
    year: "2025",
    category: "Corporate Website",
    description:
      "Web experience for a business group, organized to explain services, operational scope and institutional credibility.",
    href: "https://cotizador-epi-group.vercel.app/",
    image: EPI_1,
  },
    {
    name: "Polygon Agency",
    year: "2023",
    category: "Creative Agency Website",
    description:
      "We help companies like yours with a unique marketing approach.",
    href: "https://www.polygonag.com/",
    image: POLYGON_1,    
  },
  {
    name: "KAISER",
    year: "2023",
    category: "Brand Website",
    description:
      "",
    href: "https://www.kaiser.com.mx/",
    image: KAISER_1,
  }
];

const stackItems = [
  {
    title: "PROGRAMMING LANGUAGES",
    description:
      "Typescript as primary. Python, SQL and Liquid when the project needs it.",
  },
  {
    title: "FRONTEND",
    description:
      "NextJS, ReactJs and VueJs for interfaces that are maintainable and fast to iterate.",
  },
  {
    title: "BACKEND",
    description:
      "Convex, SQL, Express.js and Prisma for product flows, APIs and data-heavy tools.",
  },
];

const emailLink =
  portfolio.socials.find((social) => social.kind === "email")?.href ??
  "mailto:felixvnolasco@gmail.com";
const linkedInLink =
  portfolio.socials.find((social) => social.kind === "linkedin")?.href ??
  "https://www.linkedin.com/in/felixvnolasco/";
const whatsAppLink = "https://wa.me/+525578136020";

const getImageSrc = (image: ImageSource) =>
  typeof image === "string" ? image : image.src;

const ImageFill = ({
  src,
  alt,
}: {
  src: ImageSource;
  alt: string;
}) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src={getImageSrc(src)}
    alt={alt}
    className="absolute inset-0 h-full w-full object-cover"
  />
);

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto w-full max-w-[1440px] overflow-hidden bg-black">
        <section className="relative flex min-h-screen flex-col px-5 py-8 sm:px-8 lg:gap-16">
          <header className="flex items-center justify-between gap-6 font-geist-mono text-xs font-semibold uppercase tracking-normal">
            {/* <a href="#" className="whitespace-nowrap text-white">
              INICIO
            </a> */}

            <nav
              className="hidden items-center gap-8 text-[#a6a6a6] sm:flex"
              aria-label="Main navigation"
            >
              <a href="#skills" className="duration-150 hover:text-white">
                Skills
              </a>
              <a href="#projects" className="duration-150 hover:text-white">
                Projects
              </a>
              <a href="#contact" className="duration-150 hover:text-white">
                Contact
              </a>
            </nav>

            <a
              href="https://felixvnolasco.com"
              className="hidden text-white sm:block"
            >
              felixvnolasco.com
            </a>
          </header>

          <h2 className="sr-only">{portfolio.owner.name}</h2>

          <div className="grid flex-1 content-center gap-2 py-10 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,36%)] lg:gap-12 lg:py-16">
            <div className="min-w-0 order-2 lg:order-1">
              <h1 className="font-anton text-[clamp(5rem,13vw,156px)] uppercase leading-[0.88] tracking-normal lg:block hidden">
                PORTFOLIO
              </h1>

              <div className="mt-2 max-w-[390px] lg:ml-auto lg:mt-[clamp(3rem,10vh,7.5rem)]">
                <p className="font-geist text-[22px] font-medium leading-[1.25] text-white">
                  Self-motivated, goal-oriented developer building reliable web
                  products across frontend, backend and commerce workflows.
                </p>
                <p className="mt-5 font-geist-mono text-xs font-medium leading-[1.6] text-[#a6a6a6]">
                  React / Typescript / NextJS / Convex / Vite <br /> Spec Driven Development / Harness Design
                  <br /> MCP / AI Agents / Shopify Liquid / SQL
                </p>
              </div>
            </div>

            <aside className="min-w-0 lg:pt-0 lg:pl-20 order-1 lg:order-2">
              <p
                className="text-outline font-anton text-[clamp(4.2rem,4.5vw,156px)] uppercase leading-[0.88] tracking-normal text-transparent"
                aria-hidden="true"
              >
                SENIOR SOFTWARE DEVELOPER
              </p>
              <p className="mt-3 font-anton text-[clamp(3.8rem,7vw,92px)] uppercase leading-[0.9] tracking-normal">
                FELIX VEGA
              </p>

              <div className="mt-5 aspect-square w-[clamp(6.5rem,12vw,8.25rem)] overflow-hidden bg-[#181818]">
                <div className="relative h-full w-full">
                  <ImageFill
                    src={portfolio.owner.avatar.src}
                    alt={portfolio.owner.avatar.alt}
                  />
                </div>
              </div>

              <p className="mt-5 max-w-[314px] font-geist text-base font-medium leading-[1.35] text-[#a6a6a6]">
                Web apps / ecommerce / product interfaces
              </p>
            </aside>
          </div>

          <div className="mt-auto flex flex-col gap-8 pb-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-7 font-geist-mono text-[13px] font-semibold uppercase">
              <a
                href={linkedInLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#25D366]"
              >
                LINKEDIN
              </a>
              <a href={emailLink} className="hover:text-[#25D366]">
                EMAIL
              </a>
              <span>MEXICO / REMOTE</span>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[4.5rem] flex-1 items-center justify-center bg-[#25D366] px-8 text-center font-geist-mono text-[13px] font-bold uppercase text-black sm:min-w-[13rem]"
              >
                SEND WHATSAPP
              </a>

              {/* linkedin */}
              <a
                href={linkedInLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[4.5rem] flex-1 items-center justify-center bg-[#0A66C2] px-8 text-center font-geist-mono text-[13px] font-bold uppercase text-white sm:min-w-[13rem]"
              >
                LINKEDIN
              </a>
              <a
                href={emailLink}
                className="flex min-h-[4.5rem] flex-1 items-center justify-center bg-white px-8 text-center font-geist-mono text-[13px] font-bold uppercase text-black sm:min-w-[13rem]"
              >
                SEND ME AN EMAIL
              </a>
            </div>
          </div>
        </section>

        <section
          className="px-5 py-14 sm:px-8 lg:py-24"
          id="skills"
        >
          <h2 className="sr-only">Skills</h2>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.7fr)] lg:items-start lg:gap-16">
            <div className="space-y-10">
              <p className="font-anton text-[clamp(5rem,14vw,190px)] uppercase leading-[0.86]">
                STACK
              </p>
              {/* <p
                className="text-outline -mt-4 font-anton text-[clamp(4rem,8vw,96px)] uppercase leading-[0.9] text-transparent lg:absolute lg:left-[680px] lg:top-[84px] lg:mt-0"
                aria-hidden="true"
              >
                CAPABILITIES
              </p> */}
              <p className="font-geist-mono text-xs font-bold uppercase">
                SKILLS
              </p>
            </div>

            <div className="grid gap-12">
              <p className="max-w-[546px] font-geist text-2xl font-medium leading-[1.25]">
                I build web applications, internal tools and ecommerce experiences
                with a practical bias: clean architecture, useful interfaces and
                enough backend depth to ship complete solutions.
              </p>

              <div className="grid gap-10 md:grid-cols-3 lg:gap-[clamp(2rem,5vw,4.25rem)]">
                {stackItems.map((item) => (
                  <article key={item.title}>
                    <h3 className="font-geist-mono text-xs font-bold uppercase">
                      {item.title}
                    </h3>
                    <p className="mt-5 font-geist text-xl font-medium leading-[1.3] text-[#a6a6a6]">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="px-5 py-16 sm:px-8 lg:py-24"
          id="projects"
        >
          <h2 className="sr-only">Featured Projects</h2>
          <div className="flex flex-col gap-1">
            <h2 className="font-anton text-[clamp(4.5rem,12vw,178px)] uppercase leading-[0.86]">
              FEATURED PROJECTS
            </h2>
          </div>

          <div className="mx-auto mt-16 grid w-full  gap-12  lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.9fr)] lg:gap-4">
            <div className="lg:flex flex-col gap-5 hidden">
              {leftProjects.map((project) => (
                <FeaturedProjectBento
                  key={project.href}
                  href={project.href}
                  category={project.category}
                  title={project.name}
                  description={project.description}
                  heroImage={project.image}
                  supportImage={project.supportImage}
                  year={project.year}
                />
              ))}
            </div>

            <div className="lg:hidden flex-col gap-5 flex">              
              {leftProjects.map((project) => (
                <FeaturedProjectHorizontal
                  key={project.href}
                  href={project.href}
                  category={project.category}
                  title={project.name}
                  description={project.description}
                  image={project.image}
                  year={project.year}
                />
              ))}
            </div>
            <div className="flex flex-col gap-8">
              {rightProjects.map((project) => (
                <Link key={project.href} href={project.href} passHref>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-white"
                  >
                    <FeaturedProjectHorizontal
                      href={project.href}
                      category={project.category}
                      year={project.year}
                      title={project.name}
                      description={project.description}
                      image={project.image}
                    />
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <footer
          className="px-5 py-16 sm:px-8 lg:py-24"
          id="contact"
        >
          <h2 className="sr-only">Get in touch</h2>
          <div className="grid gap-12 lg:grid-cols-[minmax(10rem,0.7fr)_minmax(18rem,1fr)_minmax(18rem,0.9fr)] lg:items-start lg:gap-16">
            <p className="font-geist-mono text-xs font-bold uppercase text-white">
              AVAILABLE FOR NEW OPPORTUNITIES
            </p>
            <p className="max-w-[430px] font-geist text-[22px] font-medium leading-[1.3] text-[#a6a6a6]">
              Send a note or connect through LinkedIn.
            </p>
            <h2 className="font-anton text-[clamp(4.5rem,9vw,116px)] uppercase leading-[0.9]">
              LET&apos;S TALK
            </h2>
          </div>

          <div className="mt-16 flex flex-col gap-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-8 font-geist-mono text-[13px] font-bold uppercase">
              <a
                href={linkedInLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#25D366]"
              >
                LINKEDIN
              </a>
              <a href={emailLink} className="hover:text-[#25D366]">
                EMAIL
              </a>
              <a href="https://github.com/felixvnolasco" className="hover:text-[#25D366]">
                GITHUB
              </a>
              {/* whatsapp */}
              <a href="https://wa.me/+525578136020" className="hover:text-[#25D366]">
                WHATSAPP
              </a>
            </div>

            <p className="font-geist-mono text-xs font-medium text-[#a6a6a6]">
              Felix Vega / Senior Software Developer
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
