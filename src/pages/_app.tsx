import React, { PropsWithChildren } from 'react';
import { AppProps } from 'next/app';
import '~/styles.css';
import { NextPage } from 'next';
import { IPageFields } from '~/@types/generated/contentful';

export type CustomNextPage<P> = NextPage<P> & {
    Layout: React.FunctionComponent<{
        children: React.ReactNode;
        pageProps: {
            data: IPageFields;
        };
    }>;
};

type CustomAppProps = AppProps & {
    Component: CustomNextPage<Record<string, unknown>>;
};

const Noop = ({ children }: PropsWithChildren<Record<string, unknown>>): React.ReactNode => children;

const App = ({ Component, pageProps }: CustomAppProps): JSX.Element => {
    const Layout = Component.Layout || Noop;
    return (
        <Layout pageProps={pageProps}>
            <Component {...pageProps} />
        </Layout>
    );
};

export default App;
