import React from 'react';

import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import RobotoRegularFont from '@assets/fonts/Roboto-Regular.woff2';
import FontFace from '@blocks/font-face';
import '@styles/base.scss';
import type { LayoutProps } from '@templates/layouts/DefaultLayout/DefaultLayout';

export type CustomNextPage<P> = NextPage<P> & {
  Layout: React.FunctionComponent<LayoutProps>;
};

type CustomAppProps = AppProps & {
  Component: CustomNextPage<Record<string, unknown>>;
};

function MyApp({ Component, pageProps }: CustomAppProps) {
  const Layout = Component.Layout || React.Fragment;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="application-name" content="Forward" />

        <link
          rel="preload"
          as="font"
          crossOrigin="anonymous"
          href={RobotoRegularFont}
        />
      </Head>
      <FontFace />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
