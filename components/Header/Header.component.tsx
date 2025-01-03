import React, { useState, useEffect } from "react";

import Link from "next/link";
import { AiOutlineLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const TextLink = ({ text, href }: any) => {
  return (
    <a
      href={href}
      className="cursor-pointer rounded-md px-4 py-[0.10rem] text-xl text-gray-200 duration-100 hover:bg-zinc-800"
    >
      {text}
    </a>
  );
};

const Header: React.FC = () => {
  const [topOfPage, setTopOfPage] = useState<boolean>();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1) {
        setTopOfPage(false);
      } else {
        setTopOfPage(true);
      }
    });
  }, []);

  return (
    <header
      className={`flex flex-row items-center justify-between py-8 font-jost`}
    >
      <p className="hidden sm:flex sm:flex-row sm:gap-x-4">
        <TextLink text="Home" href="#" />
        <TextLink text="Skills" href="#skills" />
        <TextLink text="Projects" href="#projects" />
        <TextLink text="Contact" href="#contact" />
      </p>

      <div className="flex gap-2">
        <Link href="mailto:felixvnolasco@gmail.com" passHref>
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="mail"
            className="rounded-lg border-2 border-zinc-900 bg-zinc-800 p-2 text-2xl text-white hover:border-white"
          >
            <MdEmail />
          </a>
        </Link>

        <Link href="https://www.linkedin.com/in/felixvnolasco/" passHref>
          <a
            className="rounded-lg border-2 border-zinc-900 bg-zinc-800 p-2 text-2xl text-white hover:border-white"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="github-repo"
          >
            <AiOutlineLinkedin />
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
