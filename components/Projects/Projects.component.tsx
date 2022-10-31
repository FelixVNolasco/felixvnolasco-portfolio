import React from "react";

import Link from "next/link";

const Projects: React.FC = () => {
  return (
    <div className="my-16 px-3 font-sen" id="projects">
      <p className="text-3xl font-bold text-white">Featured Projects</p>
      <div className="my-8 flex flex-col items-center justify-center gap-10 sm:flex-row">
        <Link href="https://journal-app-react-mu.vercel.app/auth/login" passHref>
          <a
            className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#D8B4FE] to-[#818CF8] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
              <p className="text-xl font-semibold">Journal App</p>
              <p>Journal created with ReactJS & Firebase</p>
            </div>
          </a>
        </Link>

        <Link href="https://olympus-store-app.vercel.app/" passHref>
          <a
            className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#FDE68A] via-[#FCA5A5] to-[#FECACA] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
              <p className="text-xl font-semibold">Olympus Store</p>
              <p>Ecommerce created with ReactJS & NodeJs</p>
            </div>
          </a>


        </Link>
        <Link href="https://olympus-dashboard.vercel.app/" passHref>
          <a
            className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#C4D6B0] via-[#477998] to-[#FECACA] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
              <p className="text-xl font-semibold">Olympus Dashboard</p>
              <p>Dashboard created with ReactJS & NodeJs</p>
            </div>
          </a>
        </Link>

        <Link href="https://felixvnolasco-firebase-auth.herokuapp.com/login" passHref>
          <a
            className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#9e3030] via-[#ad39a4] to-[#c54abb] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
              <p className="text-xl font-semibold">Firebase Auth</p>
              <p>Auth App created with Firebase</p>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
