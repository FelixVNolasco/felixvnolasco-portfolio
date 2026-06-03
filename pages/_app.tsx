import type { AppProps } from "next/app";
import "../styles/globals.css";

import NextNProgress from "nextjs-progressbar";
import { NextSeo } from "next-seo";
import Head from "next/head";

import { portfolio } from "../data/portfolio";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title={portfolio.seo.title}
        titleTemplate={portfolio.seo.title}
        defaultTitle={portfolio.seo.title}
        description={portfolio.seo.description}
        openGraph={{
          url: "",
          title: portfolio.seo.title,
          description: portfolio.seo.description,
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content: portfolio.seo.keywords,
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
