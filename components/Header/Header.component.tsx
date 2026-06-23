import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

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
      className="cursor-pointer rounded-md px-3 py-2 text-xs font-semibold uppercase text-[#a6a6a6] duration-150 hover:bg-white/10 hover:text-white"
      variant="link"
    >
      {label}
    </RevealText>
  );
};

const SocialIcon = ({ social }: { social: SocialLink }) => {
  const Icon = social.kind === "email" ? MdEmail : AiOutlineLinkedin;

  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.label}
      className="grid h-10 w-10 place-items-center rounded-md border border-white/10 bg-white text-xl text-black duration-150 hover:-translate-y-0.5 hover:border-white"
    >
      <Icon />
    </a>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuId = "mobile-navigation";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 px-5 font-geist-mono backdrop-blur sm:px-8">
      {/* <div className="flex min-h-[4.5rem] items-center justify-between gap-4">
        <RevealText
          as="a"
          href="#"
          className="text-xs font-bold uppercase text-white"
          variant="link"
        >
          felixvnolasco.com
        </RevealText>

        <nav
          className="hidden items-center gap-2 md:flex"
          aria-label="Main navigation"
        >
          {portfolio.navigation.map((link) => (
            <TextLink key={link.href} {...link} />
          ))}
        </nav>

        <div className="hidden gap-2 md:flex">
          {portfolio.socials.map((social) => (
            <SocialIcon key={social.href} social={social} />
          ))}
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-md border border-white/10 text-xl text-white duration-150 hover:border-white hover:bg-white/10 md:hidden"
          aria-controls={menuId}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div> */}

      {isMenuOpen ? (
        <nav
          id={menuId}
          className="border-t border-white/10 py-4 md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="grid gap-2">
            {portfolio.navigation.map((link) => (
              <RevealText
                as="a"
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-3 text-sm font-semibold uppercase text-[#d6d6d6] duration-150 hover:bg-white/10 hover:text-white"
                variant="link"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </RevealText>
            ))}
          </div>

          <div className="mt-4 flex gap-2">
            {portfolio.socials.map((social) => (
              <SocialIcon key={social.href} social={social} />
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
};

export default Header;
