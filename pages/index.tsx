import type { NextPage } from "next";
import Link from "next/link";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { portfolio } from "../data/portfolio";
import {
  AnimatedButton,
  FeaturedProjectBento,
  FeaturedProjectHorizontal,
  Header,
  RevealText,
} from "../components";

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
    href: "https://www.ogc.mx/",
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
    title: "Frontend",
    description:
      "React, TypeScript, Next.js, Vue.js, Angular, Vite, TailwindCSS, CSS, SCSS",
  },
  {
    title: "Backend & Data",
    description: "Convex, SQL, MongoDB, Python, C#, .NET Core, ASP.NET MVC",
  },
  {
    title: "UI & State Management",
    description:
      "Radix UI, shadcn/ui, TanStack Table, Redux Toolkit, Zustand, React Hook Form, Zod",
  },
  {
    title: "Auth & Security",
    description:
      "Clerk, Role-Based Access Control, Protected Routes, User Management, JWT",
  },
  {
    title: "E-commerce & CMS",
    description: "Shopify, Liquid 2.0, Technical SEO",
  },
  {
    title: "Cloud & Tools",
    description: "AWS, Vercel, Git, GitHub",
  },
  {
    title: "AI-Assisted Development",
    description:
      "Spec-Driven Development, Claude Code, OpenCode, Harness Engineering",
  },
];

const careerItems = [
  {
    year: "2023",
    title: "Software Developer",
    period: "Dec 2023 - Present",
    company: "Polygon Agency",
    highlights: [
      "Develop full-stack web applications and internal business dashboards using React, TypeScript, Next.js, Vite, TailwindCSS, Convex, and Clerk.",
      "Build financial and operational modules for project management, budget control, transactions, payments, sales workflows, document management, and reporting.",
      "Implement role-based access control, protected routes, user management, and secure authorization flows for admin, user, and viewer roles.",
      "Design reusable UI components, tables, modals, forms, filters, charts, and dashboards using Radix UI, TanStack Table, Zustand, React Hook Form, and Zod.",
      "Create backend schemas, queries, mutations, and validation logic in Convex to support real-time data operations and business workflows.",
      "Customize and develop Shopify storefronts using Liquid 2.0, improving usability, performance, and customer engagement.",
      "Optimize websites for SEO, responsive design, accessibility, and Google PageSpeed performance.",
    ],
  },
  {
    year: "2022",
    title: "Software Developer",
    period: "Apr 2022 - Dec 2023",
    company: "Softtek",
    highlights: [
      "Automated data workflows using KNIME Analytics, Python, and SQL to improve operational efficiency and reduce manual processing.",
      "Designed, maintained, and optimized relational databases to support reporting, data retrieval, and business analysis.",
      "Built and executed SQL queries for data extraction, transformation, validation, and integrity checks.",
      "Supported data-driven decision making by transforming complex datasets into structured and actionable information.",
      "Collaborated with cross-functional teams to align technical solutions with business requirements.",
    ],
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

const splitSkillDescription = (description: string) =>
  description.split(",").map((skill) => skill.trim());

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
    className="absolute inset-0 h-full w-full object-cover text-[0px]"
  />
);

const ContactButtons = ({ delay = 0 }: { delay?: number }) => (
  <RevealText
    as="div"
    className="flex flex-col gap-3 sm:flex-row"
    variant="card"
    delay={delay}
  >
    <AnimatedButton
      href={whatsAppLink}
      target="_blank"
      rel="noopener noreferrer"
      tone="whatsapp"
    >
      <FaWhatsapp className="h-5 w-5 shrink-0" aria-hidden="true" />
      SEND WHATSAPP
    </AnimatedButton>

    <AnimatedButton
      href={linkedInLink}
      target="_blank"
      rel="noopener noreferrer"
      tone="linkedin"
    >
      <FaLinkedinIn className="h-5 w-5 shrink-0" aria-hidden="true" />
      LINKEDIN
    </AnimatedButton>
    <AnimatedButton href={emailLink} tone="email">
      <MdEmail className="h-5 w-5 shrink-0" aria-hidden="true" />
      SEND ME AN EMAIL
    </AnimatedButton>
  </RevealText>
);

const HeroActions = ({ delay = 0 }: { delay?: number }) => (
  <RevealText
    as="div"
    className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
    variant="card"
    delay={delay}
  >
    <AnimatedButton
      href={whatsAppLink}
      target="_blank"
      rel="noopener noreferrer"
      tone="whatsapp"
      className="sm:flex-none"
    >
      <FaWhatsapp className="h-5 w-5 shrink-0" aria-hidden="true" />
      SEND WHATSAPP
    </AnimatedButton>

    <a
      href={linkedInLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-[3.75rem] items-center justify-center gap-3 rounded-lg border border-white/15 px-5 font-geist-mono text-[11px] font-bold uppercase text-white duration-200 hover:border-white hover:bg-white/10 sm:min-h-0 sm:px-4 sm:py-3"
    >
      <FaLinkedinIn className="h-4 w-4 shrink-0" aria-hidden="true" />
      LINKEDIN
    </a>
  </RevealText>
);

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto w-full max-w-[1440px] overflow-x-hidden bg-black">
        <Header />

        <main>
        <section className="relative flex min-h-screen flex-col px-5 py-8 sm:px-8 lg:gap-16">

          <h2 className="sr-only">{portfolio.owner.name}</h2>

          <div className="grid flex-1 content-center gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end lg:gap-16">
            <div className="max-w-full min-w-0">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden bg-[#181818] lg:hidden">
                  <ImageFill
                    src={portfolio.owner.avatar.src}
                    alt={portfolio.owner.avatar.alt}
                  />
                </div>

                <RevealText
                  as="p"
                  className="font-geist-mono text-xs font-bold uppercase leading-[1.5] text-[#a6a6a6]"
                  variant="link"
                >
                  Senior Software Developer
                </RevealText>
              </div>

              <RevealText
                as="h1"
                className="mt-4 max-w-full font-anton text-[clamp(3.6rem,16vw,6.25rem)] uppercase leading-[0.86] tracking-normal sm:text-[clamp(6rem,16vw,11rem)] lg:text-[clamp(7rem,11vw,10rem)]"
                variant="hero"
                delay={0.1}
              >
                <span className="block sm:inline">FELIX</span>{" "}
                <span className="block sm:inline">VEGA</span>
              </RevealText>

              <RevealText
                as="p"
                className="mt-6 w-full max-w-full break-words font-geist text-[20px] font-medium leading-[1.25] text-white sm:max-w-[38rem] sm:text-[28px] lg:text-[32px]"
                variant="body"
                delay={0.16}
              >
                Building reliable web apps, ecommerce experiences and product
                interfaces across frontend, backend and commerce workflows.
              </RevealText>

              <RevealText
                as="p"
                className="mt-5 max-w-[34rem] font-geist-mono text-[11px] font-medium uppercase leading-[1.7] text-[#a6a6a6] sm:text-xs"
                variant="body"
                delay={0.22}
              >
                React / TypeScript / Next.js / Convex / Shopify / SQL
              </RevealText>

              <HeroActions delay={0.28} />
            </div>

            <aside className="hidden lg:block">
              <RevealText as="div" variant="card" delay={0.2}>
                <div className="aspect-square w-full overflow-hidden bg-[#181818]">
                  <div className="relative h-full w-full">
                    <ImageFill
                      src={portfolio.owner.avatar.src}
                      alt={portfolio.owner.avatar.alt}
                    />
                  </div>
                </div>

                <p className="mt-5 font-geist text-base font-medium leading-[1.35] text-[#a6a6a6]">
                  Web apps / ecommerce / product interfaces
                </p>
              </RevealText>
            </aside>
          </div>
        </section>

        <section
          className="px-5 py-16 sm:px-8 lg:py-24"
          id="skills"
        >
          <h2 className="sr-only">Skills</h2>
          <div className="grid gap-8 lg:grid-cols-[18rem_minmax(0,1fr)] lg:gap-16">
            <div>
              <RevealText
                as="p"
                className="font-geist-mono text-sm font-bold uppercase leading-none tracking-normal text-white sm:text-base"
                variant="link"
              >
                SKILLS
              </RevealText>

              <RevealText
                as="p"
                className="mt-4 max-w-[15rem] font-geist text-base font-medium leading-[1.35] text-[#a6a6a6]"
                variant="body"
                delay={0.08}
              >
                Full-stack toolkit organized for quick scanning.
              </RevealText>
            </div>

            <div className="grid gap-3 border-t-2 border-white pt-6 sm:grid-cols-2 lg:grid-cols-3">
              {stackItems.map((item, index) => (
                <RevealText
                  as="article"
                  key={item.title}
                  className="border border-white/15 p-4"
                  variant="card"
                  delay={index * 0.06}
                >
                  <h3 className="font-geist-mono text-[11px] font-bold uppercase leading-[1.35] text-white">
                    {item.title}
                  </h3>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {splitSkillDescription(item.description).map((skill) => (
                      <li
                        key={`${item.title}-${skill}`}
                        className="rounded-full border border-white/10 px-3 py-1 font-geist text-sm font-medium leading-tight text-[#d6d6d6]"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </RevealText>
              ))}
            </div>
          </div>
        </section>

        <section
          className="px-5 py-16 sm:px-8 lg:py-24"
          id="career"
        >
          <h2 className="sr-only">Career Record</h2>
          <RevealText
            as="p"
            className="flex items-center gap-4 font-geist-mono text-sm font-bold uppercase leading-none tracking-normal text-white sm:text-base"
            variant="link"
          >            
            <span>JOB HISTORY</span>
          </RevealText>

          <div className="mt-10 h-[2px] w-full bg-white" aria-hidden="true" />

          <div className="mt-12">
            <div className="relative max-w-[980px] lg:ml-3">
              <div
                className="absolute bottom-0 left-[1rem] top-6 w-[2px] bg-white sm:left-[1.25rem]"
                aria-hidden="true"
              />

              <div className="grid gap-0">
                {careerItems.map((item, index) => (
                  <RevealText
                    as="article"
                    key={`${item.year}-${item.title}`}
                    className="relative grid grid-cols-[4.25rem_minmax(0,1fr)] gap-12 pb-14 last:pb-0 sm:grid-cols-[7.75rem_minmax(0,1fr)] sm:gap-7"
                    variant="card"
                    delay={index * 0.06}
                  >
                    <div className="relative pt-1">
                      <span
                        className="absolute left-0 top-4 h-[2px] w-10 bg-white sm:w-14"
                        aria-hidden="true"
                      />
                      <span className="block pl-12 font-geist text-xl font-bold leading-none text-white sm:pl-16 sm:text-2xl">
                        {item.year}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-geist text-[clamp(1.8rem,5.8vw,2rem)] font-bold leading-[1.05] tracking-normal text-white sm:text-[2rem]">
                        {item.title} | {item.period}
                      </h3>
                      <p className="mt-3 font-geist text-xl font-medium leading-[1.25] text-white sm:text-2xl">
                        {item.company}
                      </p>
                      <ul className="mt-7 max-w-[760px] list-disc space-y-2 pl-5 font-geist text-base font-medium leading-[1.45] text-[#a6a6a6] sm:text-lg">
                        {item.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </RevealText>
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
            <RevealText
              as="h2"
              className="font-anton text-[clamp(3.5rem,15vw,7rem)] uppercase leading-[0.86] sm:text-[clamp(4rem,9.3vw,8.25rem)]"
              variant="heading"
            >
              FEATURED PROJECTS
            </RevealText>
          </div>

          <div className="mx-auto mt-16 grid w-full  gap-12  lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.9fr)] lg:gap-4">
            <div className="lg:flex flex-col gap-5 hidden">
              {leftProjects.map((project, index) => (
                <RevealText
                  as="div"
                  key={project.href}
                  variant="card"
                  delay={index * 0.08}
                >
                  <FeaturedProjectBento
                    href={project.href}
                    category={project.category}
                    title={project.name}
                    description={project.description}
                    heroImage={project.image}
                    supportImage={project.supportImage}
                    year={project.year}
                  />
                </RevealText>
              ))}
            </div>

            <div className="lg:hidden flex-col gap-5 flex">              
              {leftProjects.map((project, index) => (
                <RevealText
                  as="div"
                  key={project.href}
                  variant="card"
                  delay={index * 0.08}
                >
                  <FeaturedProjectHorizontal
                    href={project.href}
                    category={project.category}
                    title={project.name}
                    description={project.description}
                    image={project.image}
                    year={project.year}
                  />
                </RevealText>
              ))}
            </div>
            <div className="flex flex-col gap-8">
              {rightProjects.map((project, index) => (
                <Link key={project.href} href={project.href} passHref>
                  <RevealText
                    as="a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-white"
                    variant="card"
                    delay={index * 0.06}
                  >
                    <FeaturedProjectHorizontal
                      href={project.href}
                      category={project.category}
                      year={project.year}
                      title={project.name}
                      description={project.description}
                      image={project.image}
                    />
                  </RevealText>
                </Link>
              ))}
            </div>
          </div>
        </section>
        </main>

        <footer
          className="px-5 py-16 sm:px-8 lg:py-24"
          id="contact"
        >
          <h2 className="sr-only">Get in touch</h2>
          <div className="grid gap-12 lg:grid-cols-[minmax(10rem,0.7fr)_minmax(18rem,1fr)_minmax(18rem,0.9fr)] lg:items-start lg:gap-16">
            <RevealText
              as="p"
              className="font-geist-mono text-xs font-bold uppercase text-white"
              variant="link"
            >
              AVAILABLE FOR NEW OPPORTUNITIES
            </RevealText>
            <RevealText
              as="p"
              className="max-w-[430px] font-geist text-[22px] font-medium leading-[1.3] text-[#a6a6a6]"
              variant="body"
              delay={0.06}
            >
              Send a note or connect through LinkedIn.
            </RevealText>
            <RevealText
              as="h2"
              className="font-anton text-[clamp(4.5rem,9vw,116px)] uppercase leading-[0.9]"
              variant="heading"
              delay={0.12}
            >
              LET&apos;S TALK
            </RevealText>
          </div>

          <div className="mt-16 flex flex-col gap-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            <ContactButtons />

            <RevealText
              as="p"
              className="font-geist-mono text-xs font-medium text-[#a6a6a6]"
              variant="body"
            >
              Felix Vega / Senior Software Developer
            </RevealText>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
