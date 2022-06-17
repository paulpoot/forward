import React from 'react';

import Head from 'next/head';

export type Props = {
  title?: string | null;
  description?: string | null;
  openGraphTitle?: string | null;
  openGraphDescription?: string | null;
  openGraphImage?: string | null;
  index?: boolean;
  follow?: boolean;
};

const Meta = ({
  title,
  description,
  openGraphTitle,
  openGraphDescription,
  openGraphImage,
  index = true,
  follow = true,
}: Props): JSX.Element => {
  const metaTitle = title ? `${title} | Forward` : 'Forward';
  const ogTitle = openGraphTitle ?? metaTitle;
  const ogDescription = openGraphDescription ?? description;

  return (
    <Head>
      <title>{metaTitle}</title>
      {description && <meta name="description" content={description} />}
      {/* <meta property="og:locale" content={locale} /> */}
      <meta property="og:type" content="website" />
      {ogTitle && <meta property="og:title" content={ogTitle} />}
      {ogDescription && (
        <meta property="og:description" content={ogDescription} />
      )}
      {openGraphImage && <meta property="og:image" content={openGraphImage} />}
      <meta property="og:site_name" content="Forward" />
      <meta
        name="robots"
        content={`${index ? 'index' : 'noindex'}, ${
          follow ? 'follow' : 'nofollow'
        }`}
      />
    </Head>
  );
};

export default Meta;
