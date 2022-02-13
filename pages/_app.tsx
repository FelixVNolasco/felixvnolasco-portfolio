import type { AppProps } from "next/app";
import "../styles/globals.css";

import NextNProgress from "nextjs-progressbar";
import { NextSeo } from "next-seo";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>

      <NextSeo
        title="FelixVNolasco | Frontend Developer"
        titleTemplate="FelixVNolasco | Frontend Developer"
        defaultTitle="FelixVNolasco | Frontend Developer"
        description="Hi! I'm Felix, A Frontend Developer & Computer Engineering student!"
        openGraph={{
          url: "",
          title: "FelixVNolasco | Frontend Developer",
          description:
            "Hi! I'm Felix, A Frontend Developer & Computer Engineering student!"
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Frontend Developer, felixvnolasco, felix vega, Web Developer, web development, web developer, tech enthusiast",
          },
        ]}
      />
      <Head>
        <link rel="icon" type="image/png" href="/assests/avatar.jpg" />
      </Head>
      <NextNProgress />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
