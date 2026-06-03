import Link from "next/link";

import { portfolio, type SocialLink } from "../../data/portfolio";
import { MdEmail, AiOutlineLinkedin } from "../Icons";
import RevealText from "../RevealText/RevealText.component";

const ContactIcon = ({ social }: { social: SocialLink }) => {
  const Icon = social.kind === "email" ? MdEmail : AiOutlineLinkedin;

  return (
    <Link href={social.href} passHref>
      <a
        target="_blank"
        rel="noopener noreferrer"
        aria-label={social.label}
        className="rounded-lg border-2 border-zinc-900 bg-zinc-800 p-2 text-2xl text-white hover:border-white"
      >
        <Icon />
      </a>
    </Link>
  );
};

const Contact = () => {
  return (
    <div className="px-3 font-sen" id="contact">
      <RevealText as="h2" className="text-3xl font-bold text-white">
        Get in touch
      </RevealText>

      <div className="my-8 flex flex-row justify-center gap-x-4">
        {portfolio.socials.map((social) => (
          <ContactIcon key={social.href} social={social} />
        ))}
      </div>
    </div>
  );
};

export default Contact;
