import Image from "next/image";
import Link from "next/link";

import { portfolio } from "../../data/portfolio";
import { HiOutlineArrowNarrowRight } from "../Icons";
import RevealText from "../RevealText/RevealText.component";

const About = () => {
  const emailLink = portfolio.socials.find((social) => social.kind === "email");
  const linkedInLink = portfolio.socials.find(
    (social) => social.kind === "linkedin"
  );

  return (
    <div className="my-8 flex flex-row items-center justify-between px-3 font-sen">
      <div>
        <RevealText
          as="h1"
          className="text-3xl font-bold text-white"
          variant="hero"
        >
          {portfolio.owner.name}
        </RevealText>
        <RevealText
          as="p"
          className="mt-1 text-lg font-medium text-gray-300"
          delay={0.08}
          variant="hero"
        >
          {portfolio.owner.role}
        </RevealText>

        <RevealText
          as="p"
          className="mt-4 text-gray-400 md:max-w-2xl"
          delay={0.16}
          variant="body"
        >
          {portfolio.owner.bio}
        </RevealText>

        {linkedInLink && (
          <Link href={linkedInLink.href} passHref>
            <RevealText
              as="a"
              className="mt-4 flex cursor-pointer flex-row items-center gap-1 font-jost text-xl text-gray-400 duration-100 hover:ml-2"
              target="_blank"
              rel="noopener noreferrer"
              delay={0.24}
              variant="link"
            >
              LinkedIn
              <HiOutlineArrowNarrowRight />
            </RevealText>
          </Link>
        )}

        {emailLink && (
          <RevealText
            as="a"
            className="mt-4 flex cursor-pointer flex-row items-center gap-1 font-jost text-xl text-gray-400 duration-100 hover:ml-2"
            href={emailLink.href}
            target="_blank"
            rel="noopener noreferrer"
            delay={0.3}
            variant="link"
          >
            Send me an email
            <HiOutlineArrowNarrowRight />
          </RevealText>
        )}
      </div>

      <div className="hidden lg:block">
        <Image
          src={portfolio.owner.avatar.src}
          width="112"
          height="112"
          className="rounded-full"
          alt={portfolio.owner.avatar.alt}
        />
      </div>
    </div>
  );
};

export default About;
