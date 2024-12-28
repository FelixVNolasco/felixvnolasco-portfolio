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

        <p className="mt-4 text-gray-400 md:max-w-2xl">
          As a self-motivated and goal-oriented professional, I am committed to
          staying up-to-date with the latest industry trends and best practices.
          I am constantly seeking new challenges and opportunities to push
          myself beyond my limits and enhance my skills further.
        </p>

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

        <div >
          <a
            className="mt-4 flex cursor-pointer flex-row items-center gap-1 font-jost text-xl text-gray-400 duration-100 hover:ml-2"
            href="mailto:felixvnolasco@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Send me an email
            <HiOutlineArrowNarrowRight />
          </a>
        </div>
      </div>

      <div className="hidden lg:block">
        <Image
          src="https://media.licdn.com/dms/image/v2/D5603AQFojN6lxrl3Sg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1707966633734?e=1740614400&v=beta&t=Sf3K6yK8FEW0c0MtSWF6DXE85utIDhQnstBQ99ICaus"
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
