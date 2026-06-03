import Link from "next/link";

import {
  portfolio,
  type NavigationLink,
  type SocialLink,
} from "../../data/portfolio";
import { AiOutlineLinkedin, MdEmail } from "../Icons";
import RevealText from "../RevealText/RevealText.component";

type TextLinkProps = NavigationLink;

const TextLink = ({ label, href }: TextLinkProps) => {
  return (
    <RevealText
      as="a"
      href={href}
      className="cursor-pointer rounded-md px-4 py-[0.10rem] text-xl text-gray-200 duration-100 hover:bg-zinc-800"
      variant="link"
    >
      {label}
    </RevealText>
  );
};

const SocialIcon = ({ social }: { social: SocialLink }) => {
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

const Header = () => {
  return (
    <header className="flex flex-row items-center justify-between py-8 font-jost">
      <p className="hidden sm:flex sm:flex-row sm:gap-x-4">
        {portfolio.navigation.map((link) => (
          <TextLink key={link.href} {...link} />
        ))}
      </p>

      <div className="flex gap-2">
        {portfolio.socials.map((social) => (
          <SocialIcon key={social.href} social={social} />
        ))}
      </div>
    </header>
  );
};

export default Header;
