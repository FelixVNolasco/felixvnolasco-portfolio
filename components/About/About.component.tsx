import Image from "next/image";
import Link from "next/link";

import { HiOutlineArrowNarrowRight } from "../Icons";

const About = () => {
  return (
    <div className="my-8 flex flex-row items-center justify-between px-3 font-sen">
      <div>
        <p className="text-3xl font-bold text-white">Felix Vega</p>
        <p className="mt-1 text-lg font-medium text-gray-300">
          Software Developer
        </p>

        <p className="mt-4 text-gray-400">
        I have a great passion for web development & <br /> new trends in software development 
        </p>

        <Link href="https://github.com/FelixVNolasco" passHref>
          <a
            className="mt-4 flex cursor-pointer flex-row items-center gap-1 font-jost text-xl text-gray-400 duration-100 hover:ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
            <HiOutlineArrowNarrowRight />
          </a>
        </Link>

        <Link href="https://www.linkedin.com/in/felixvnolasco/" passHref>
          <a
            className="mt-4 flex cursor-pointer flex-row items-center gap-1 font-jost text-xl text-gray-400 duration-100 hover:ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
            <HiOutlineArrowNarrowRight />
          </a>
        </Link>
      </div>

      <div>
        <Image
          src="/assests/avatar.jpg"
          width="112"
          height="112"
          className="rounded-full"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default About;
