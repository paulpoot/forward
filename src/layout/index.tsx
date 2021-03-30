import React from 'react';
import { IPageFields } from '~/@types/generated/contentful';
import Layout from '~/src/components/templates/Layout';

export type Props = {
    children: React.ReactNode;
    pageProps: {
        data: IPageFields;
        errorCode?: 404;
    };
};

const DefaultLayout = ({ children, pageProps: { data, errorCode } }: Props): JSX.Element =>
    errorCode ? <>{children}</> : <Layout meta={data.meta?.fields}>{children}</Layout>;

export default DefaultLayout;
