import type { AppProps } from "next/app";
import "../styles/globals.css";

import NextNProgress from "nextjs-progressbar";
import { NextSeo } from "next-seo";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>

      <NextSeo
        title="FelixVNolasco | Software Developer"
        titleTemplate="FelixVNolasco | Software Developer"
        defaultTitle="FelixVNolasco | Software Developer"
        openGraph={{
          url: "",
          title: "FelixVNolasco | Software Developer",
          description: ""
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Software Developer, felixvnolasco, felix vega, Web Developer, web development, web developer, tech enthusiast",
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
