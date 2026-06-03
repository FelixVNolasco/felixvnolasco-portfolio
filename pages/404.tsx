import type { NextPage } from "next";

import Image from "next/image";
import Link from "next/link";

const ErrorPage: NextPage = () => {
  return (
    <>
      <main className="flex min-h-screen min-w-full flex-col justify-center bg-[#fafdfe]">
        <Image
          src="/assests/404.svg"
          width="800"
          height="400"
          alt="404 illustration"
        />

        <div className="flex w-full flex-col items-center justify-center">
          <h1 className="font-jost text-2xl font-bold text-gray-800 sm:text-3xl">
            Whoops! Lost in Space?
          </h1>
          <p className="text-md font-sen text-center font-medium text-gray-700 sm:text-lg">
            The page you&apos;re looking for isn&apos;t found :( <br />
            We suggest you back to home
          </p>

          <Link href="/" passHref>
            <a className="text-md mt-4 rounded-md bg-purple-600 px-4 py-2 font-jost font-medium text-white duration-100 hover:bg-purple-500 hover:text-gray-100 sm:px-6 sm:py-3 sm:text-lg">
              Back to Home
            </a>
          </Link>
        </div>
      </main>
    </>
  );
};

export default ErrorPage;
