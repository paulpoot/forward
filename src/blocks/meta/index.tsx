import React, { FunctionComponent } from 'react';
import Head from 'next/head';
import { IMetaFields } from '~/@types/generated/contentful';

type Props = IMetaFields;

const Meta: FunctionComponent<Props> = (meta: Props) => {
    return (
        <Head>
            <title>{meta.title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="description" content={meta.description} />
            {/* TODO: Check locale. Perhaps base it on router for multilanguage apps. */}
            <meta property="og:locale" content="en-US" />
            <meta property="og:type" content={'website'} />
            <meta property="og:title" content={meta.openGraphTitle} />
            <meta property="og:description" content={meta.openGraphDescription} />
            <meta property="og:image" content={meta.openGraphImage?.fields.file.url} />
            {/* TODO: Enter site name */}
            <meta property="og:site_name" content="" />
            <meta
                name="robots"
                content={`${meta.index ? 'index' : 'noindex'}, ${meta.follow ? 'follow' : 'nofollow'}`}
            />
            <link rel="apple-touch-icon-precomposed" sizes="180x180" href="apple-touch-icon.png" />
            <link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32" />
            <link rel="icon" type="image/png" href="favicon-16x16.png" sizes="16x16" />
            {/* TODO: Enter application name */}
            <meta name="application-name" content="" />
            <meta name="msapplication-TileColor" content="#FFFFFF" />
            <meta name="msapplication-TileImage" content="mstile-144x144.png" />
        </Head>
    );
};

export default Meta;
