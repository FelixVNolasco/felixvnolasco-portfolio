import type { NextPage } from "next";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { leftProjects, rightProjects } from "../data/featuredProjects";
import { portfolio } from "../data/portfolio";
import {
  FeaturedProjectBento,
  FeaturedProjectHorizontal,
  Header,
  HeroBackdrop,
  RevealText,
} from "../components";
import ContactFooter from "../components/ContactFooter/ContactFooter.component";

type ImageSource = string | { src: string };

const stackItems = [
  {
    title: "Interface",
    subtitle: "Dashboards, storefronts, and reusable product UI.",
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "Vite",
      "Tailwind",
      "Radix UI",
      "shadcn/ui",
      "TanStack Table",
      "React Hook Form",
      "Playwright",
    ],
  },
  {
    title: "Systems",
    subtitle: "Data, access control, and the services underneath.",
    skills: [
      "Convex",
      "Clerk",
      "SQL",
      "Python",
      "Zustand",
      "Zod",
      "JWT / RBAC",
      "Node.js",
      "PostgreSQL",
    ],
  },
  {
    title: "Commerce",
    subtitle: "Shopify builds, technical SEO, and where they ship.",
    skills: [
      "Shopify",
      "Liquid 2.0",
      "Technical SEO",
      "Vercel",
      "AWS",
      "Headless Shopify",
    ],
  },
  {
    title: "AI & SDD",
    subtitle: "Spec-driven workflows and AI-assisted shipping.",
    skills: [
      "Spec-Driven Development",
      "Claude Code",
      "Cursor",
      "OpenCode",
      "Harness Engineering",
    ],
  },
];

const careerItems = [
  {
    year: "2023",
    title: "Software Developer",
    period: "Dec 2023 - Present",
    company: "Polygon Agency",
    highlights: [
      "Build full-stack dashboards in React, TypeScript, Next.js, Vite, and Tailwind, with Convex real-time backends (schemas, queries, mutations) and Clerk auth.",
      "Implement financial and ops modules — project management, budgets, payments, sales, documents, reporting — with RBAC for admin, user, and viewer roles.",
      "Design reusable tables, forms, filters, and charts with Radix UI, TanStack Table, Zustand, React Hook Form, and Zod.",
      "Customize Shopify storefronts in Liquid 2.0 and tune sites for SEO, accessibility, and PageSpeed.",
    ],
  },
  {
    year: "2022",
    title: "Software Developer",
    period: "Apr 2022 - Dec 2023",
    company: "Softtek",
    highlights: [
      "Automated operational data workflows with KNIME Analytics, Python, and SQL.",
      "Designed and optimized relational databases; wrote SQL for extraction, transformation, validation, and integrity.",
      "Turned complex datasets into structured reports that support operational decisions.",
    ],
  },
];

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
    className="absolute inset-0 h-full w-full object-cover text-[0px]"
  />
);

const heroActionClassName =
  "inline-flex min-h-[3.75rem] items-center justify-center gap-3 whitespace-nowrap rounded-lg border px-5 font-geist-mono text-[11px] font-bold uppercase duration-200 sm:min-h-0 sm:px-4 sm:py-3";

const HeroActions = ({ delay = 0 }: { delay?: number }) => (
  <RevealText
    as="div"
    className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
    variant="card"
    delay={delay}
  >
    <a
      href={whatsAppLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`${heroActionClassName} border-[#25D366] bg-[#25D366] text-black hover:bg-[#36e277]`}
    >
      <FaWhatsapp className="h-4 w-4 shrink-0" aria-hidden="true" />
      SEND WHATSAPP
    </a>

    <a
      href={linkedInLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`${heroActionClassName} border-white/15 text-white hover:border-white hover:bg-white/10`}
    >
      <FaLinkedinIn className="h-4 w-4 shrink-0" aria-hidden="true" />
      LINKEDIN
    </a>
  </RevealText>
);

const Home: NextPage = () => {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <HeroBackdrop />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] overflow-x-hidden">
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
          <div className="grid gap-10 lg:grid-cols-[18rem_minmax(0,1fr)] lg:gap-16">
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
                className="mt-4 max-w-[16rem] font-geist text-base font-medium leading-[1.35] text-[#a6a6a6]"
                variant="body"
                delay={0.08}
              >
                Production tools from web apps, dashboards, Shopify, and
                AI-assisted shipping.
              </RevealText>
            </div>

            <div className="grid border-t-2 border-white sm:grid-cols-2">
              {stackItems.map((item, index) => (
                <RevealText
                  as="article"
                  key={item.title}
                  className={`py-8 sm:px-8 sm:py-10 ${
                    index === 1 ? "border-t border-white/20 sm:border-t-0" : ""
                  } ${index >= 2 ? "border-t border-white/20" : ""} ${
                    index % 2 === 1
                      ? "sm:border-l sm:border-white/20 sm:pr-0"
                      : "sm:pl-0"
                  }`}
                  variant="card"
                  delay={index * 0.06}
                >
                  <h3 className="font-geist-mono text-[11px] font-bold uppercase leading-[1.35] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-[22rem] font-geist text-sm font-medium leading-[1.45] text-[#a6a6a6]">
                    {item.subtitle}
                  </p>

                  <ul className="mt-6 flex flex-wrap gap-x-2 gap-y-2.5">
                    {item.skills.map((skill) => (
                      <li
                        key={`${item.title}-${skill}`}
                        className="rounded-full border border-white/15 px-3.5 py-1.5 font-geist text-sm font-medium leading-tight text-[#d6d6d6]"
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
            <RevealText
              as="p"
              className="mt-4 max-w-[34rem] font-geist text-base font-medium leading-[1.35] text-[#a6a6a6]"
              variant="body"
              delay={0.08}
            >
              Live web apps, storefronts, and brand sites — same stack, different
              products.
            </RevealText>
          </div>

          <div className="mt-10 h-[2px] w-full bg-white" aria-hidden="true" />

          <div className="mx-auto mt-12 grid w-full gap-16 lg:grid-cols-2 lg:items-start lg:gap-16">
            <div className="hidden flex-col gap-14 lg:flex">
              {leftProjects.map((project, index) => (
                <RevealText
                  as="div"
                  key={project.id}
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

            <div className="flex flex-col gap-10 lg:hidden">
              {leftProjects.map((project, index) => (
                <RevealText
                  as="div"
                  key={project.id}
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
            <div className="flex flex-col gap-10 lg:pt-0">
              {rightProjects.map((project, index) => (
                <RevealText
                  key={project.id}
                  as="div"
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
              ))}
            </div>
          </div>
        </section>
        </main>

        <ContactFooter />
      </div>
    </div>
  );
};

export default Home;
