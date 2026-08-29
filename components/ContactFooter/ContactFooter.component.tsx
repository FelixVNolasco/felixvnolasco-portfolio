import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { portfolio } from "../../data/portfolio";
import RevealText from "../RevealText/RevealText.component";

const actionButtonClassName =
  "inline-flex min-h-[3.75rem] items-center justify-center gap-3 whitespace-nowrap rounded-lg border px-5 font-geist-mono text-[11px] font-bold uppercase duration-200 sm:min-h-0 sm:px-4 sm:py-3";

const emailHref =
  portfolio.socials.find((social) => social.kind === "email")?.href ??
  "mailto:felixvnolasco@gmail.com";
const linkedInHref =
  portfolio.socials.find((social) => social.kind === "linkedin")?.href ??
  "https://www.linkedin.com/in/felixvnolasco/";
const whatsAppHref = "https://wa.me/+525578136020";

const emailAddress = emailHref.replace(/^mailto:/i, "");
const linkedInDisplay = linkedInHref
  .replace(/^https?:\/\//i, "")
  .replace(/^www\./i, "")
  .replace(/\/$/, "");
const whatsAppNumber = "+52 55 7813 6020";

const reachLines = [
  { label: "Email", value: emailAddress },
  { label: "WhatsApp", value: whatsAppNumber },
  { label: "LinkedIn", value: linkedInDisplay },
];

const ContactButtons = ({ delay = 0 }: { delay?: number }) => (
  <RevealText
    as="div"
    className="flex flex-col gap-3 sm:flex-row sm:items-center"
    variant="card"
    delay={delay}
  >
    <a
      href={whatsAppHref}
      target="_blank"
      rel="noopener noreferrer"
      className={`${actionButtonClassName} border-[#25D366] bg-[#25D366] text-black hover:bg-[#36e277]`}
    >
      <FaWhatsapp className="h-4 w-4 shrink-0" aria-hidden="true" />
      SEND WHATSAPP
    </a>

    <a
      href={linkedInHref}
      target="_blank"
      rel="noopener noreferrer"
      className={`${actionButtonClassName} border-[#0A66C2] bg-[#0A66C2] text-white hover:bg-[#1478dc]`}
    >
      <FaLinkedinIn className="h-4 w-4 shrink-0" aria-hidden="true" />
      LINKEDIN
    </a>
    <a
      href={emailHref}
      className={`${actionButtonClassName} border-white bg-white text-black hover:bg-[#f1f1f1]`}
    >
      <MdEmail className="h-4 w-4 shrink-0" aria-hidden="true" />
      SEND ME AN EMAIL
    </a>
  </RevealText>
);

const ContactFooter = () => {
  return (
    <footer className="border-t-2 border-white px-5 py-16 sm:px-8 lg:py-24" id="contact">
      <h2 className="sr-only">Get in touch</h2>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,0.85fr)] lg:items-end lg:gap-16">
        <div>
          <RevealText
            as="p"
            className="font-geist-mono text-sm font-bold uppercase leading-none tracking-normal text-white sm:text-base"
            variant="link"
          >
            AVAILABLE FOR NEW WORK
          </RevealText>

          <RevealText
            as="p"
            className="mt-6 max-w-[38rem] font-geist text-[20px] font-medium leading-[1.3] text-[#a6a6a6] sm:text-[24px]"
            variant="body"
            delay={0.06}
          >
            Freelance product work, retainers, and full-time conversations.
            Web apps, Shopify storefronts, and interfaces that have to hold
            up after launch — React, TypeScript, Next.js, Convex.
          </RevealText>
        </div>

        <RevealText
          as="p"
          className="font-anton text-[clamp(4.5rem,12vw,7.25rem)] uppercase leading-[0.86]"
          variant="heading"
          delay={0.12}
        >
          LET&apos;S TALK
        </RevealText>
      </div>

      <div className="mt-16 grid gap-10 border-t-2 border-white pt-10 sm:grid-cols-3 sm:gap-8 lg:gap-16">
        <RevealText as="article" variant="card" delay={0.08}>
          <h3 className="font-geist-mono text-[11px] font-bold uppercase leading-[1.35] text-white">
            The brief
          </h3>
          <p className="mt-4 max-w-[22rem] font-geist text-base font-medium leading-[1.45] text-[#a6a6a6]">
            Dashboards, checkout flows, and internal tools. Convex and Clerk
            when the app needs a live backend. Liquid when the store has to
            sell.
          </p>
        </RevealText>

        <RevealText as="article" variant="card" delay={0.14}>
          <h3 className="font-geist-mono text-[11px] font-bold uppercase leading-[1.35] text-white">
            Direct lines
          </h3>
          <dl className="mt-4 grid gap-4">
            {reachLines.map((line) => (
              <div key={line.label}>
                <dt className="font-geist-mono text-[10px] font-bold uppercase tracking-wide text-[#6a6a6a]">
                  {line.label}
                </dt>
                <dd className="mt-1 select-all font-geist text-[15px] font-medium leading-tight text-white">
                  {line.value}
                </dd>
              </div>
            ))}
          </dl>
        </RevealText>

        <RevealText as="article" variant="card" delay={0.2}>
          <h3 className="font-geist-mono text-[11px] font-bold uppercase leading-[1.35] text-white">
            Mexico · CST
          </h3>
          <p className="mt-4 max-w-[22rem] font-geist text-base font-medium leading-[1.45] text-[#a6a6a6]">
            WhatsApp is usually the fastest path; email if you want a thread.
            I typically reply the same day.
          </p>
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
  );
};

export default ContactFooter;
