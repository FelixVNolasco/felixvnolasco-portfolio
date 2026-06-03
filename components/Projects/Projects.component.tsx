import Link from "next/link";

import { portfolio } from "../../data/portfolio";
import RevealText from "../RevealText/RevealText.component";

const Projects = () => {
  return (
    <div className="my-16 px-3 font-sen" id="projects">
      <RevealText as="h2" className="text-3xl font-bold text-white">
        Featured Projects
      </RevealText>
      <div className="my-8 grid grid-cols-2 flex-col items-center justify-center gap-2 sm:grid-cols-3 2xl:grid-cols-4">
        {portfolio.projects.map((project, index) => (
          <Link key={project.href} href={project.href} passHref>
            <RevealText
              as="a"
              className={`h-[7rem] w-full cursor-pointer rounded-lg bg-gradient-to-r p-1 text-white duration-100 hover:scale-105 ${project.gradientClassName}`}
              target="_blank"
              rel="noopener noreferrer"
              delay={index * 0.04}
              variant="card"
            >
              <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
                <p className="max-w-full break-words text-lg font-semibold leading-tight sm:text-xl">
                  {project.name}
                </p>
              </div>
            </RevealText>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
