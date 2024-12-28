import React from "react";

import Link from "next/link";

const Projects: React.FC = () => {
  return (
    <div className="my-16 px-3 font-sen" id="projects">
      <p className="text-3xl font-bold text-white">Featured Projects</p>
      <div className="my-8 grid grid-cols-2 flex-col items-center justify-center gap-2 sm:grid-cols-3 2xl:grid-cols-4">
        <Link href="https://www.amphitryon.mx/" passHref>
          <a
            className="h-[7rem] w-full cursor-pointer rounded-lg bg-gradient-to-r from-[#D8B4FE] to-[#818CF8] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
              <p className="text-xl font-semibold">Grupo Amphytrion</p>
            </div>
          </a>
        </Link>

        <Link href="https://copapadel.com/" passHref>
          <a
            className="h-[7rem] w-full cursor-pointer rounded-lg bg-gradient-to-r from-[#FDE68A] via-[#FCA5A5] to-[#FECACA] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
              <p className="text-xl font-semibold">Copa Padel</p>
            </div>
          </a>
        </Link>
        <Link href="https://www.ogarrioarquitectos.com/" passHref>
          <a
            className="h-[7rem] w-full cursor-pointer rounded-lg bg-gradient-to-r from-[#C4D6B0] via-[#477998] to-[#FECACA] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
              <p className="text-xl font-semibold">Ogarrio Arquitectos</p>
            </div>
          </a>
        </Link>
        <Link href="https://www.polygonag.com/" passHref>
          <a
            className="h-[7rem] w-full cursor-pointer rounded-lg bg-gradient-to-r from-[#456989] via-[#477998] to-[#67389c] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
              <p className="text-xl font-semibold">Polygon Agency</p>
            </div>
          </a>
        </Link>
        <Link href="https://tecnovidrio-projects-eight.vercel.app/" passHref>
          <a
            className="h-[7rem] w-full cursor-pointer rounded-lg bg-gradient-to-r from-[#22375f] via-[#477998] to-[#1b2b41] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
              <p className="text-xl font-semibold">Grupo Tecnovidrio</p>
            </div>
          </a>
        </Link>
        <Link href="https://www.olympiagreekyogurt.com/" passHref>
          <a
            className="h-[7rem] w-full cursor-pointer rounded-lg bg-gradient-to-r from-[#80c4d4] via-[#477998] to-[#304579] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
              <p className="text-xl font-semibold">Olympia Greek</p>
            </div>
          </a>
        </Link>
        <Link href="https://www.larena.mx/" passHref>
          <a
            className="h-[7rem] w-full cursor-pointer rounded-lg bg-gradient-to-r from-[#838383] via-[#477998] to-[#454545] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
              <p className="text-xl font-semibold">Larena</p>
            </div>
          </a>
        </Link>
        <Link href="https://cotizador-epi-group.vercel.app/" passHref>
          <a
            className="h-[7rem] w-full cursor-pointer rounded-lg bg-gradient-to-r from-[#a4c8d2] via-[#477998] to-[#182f40] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
              <p className="text-xl font-semibold">EPI Group</p>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
