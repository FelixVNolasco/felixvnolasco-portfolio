import {
  MdEmail,
  AiOutlineGithub,
  AiOutlineLinkedin  
} from "../Icons";

import Link from "next/link";

const Contact = () => {
  return (
    <div className="px-3 font-sen" id="contact">
      <p className="text-3xl font-bold text-white">Get in touch</p>

      <div className="my-8 flex flex-row justify-center gap-x-4">

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

        <Link
          href="https://www.linkedin.com/in/felixvnolasco/"
          passHref
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="mail"
            className="rounded-lg border-2 border-zinc-900 bg-zinc-800 p-2 text-2xl text-white hover:border-white"
          >
            <AiOutlineLinkedin />
          </a>
        </Link>

      </div>
    </div>
  );
};

export default Contact;
