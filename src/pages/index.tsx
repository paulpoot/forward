import React from 'react';
import { GetStaticProps } from 'next';
import DefaultLayout from '~/src/layout';
import { RichText } from '~/src/blocks/rich-text';
import { resolveBySlug } from '~/lib/contentful/slug-resolver';
import { IPageFields } from '~/@types/generated/contentful';

type Props = {
    data: IPageFields;
};

function HomePage({ data }: Props): JSX.Element {
    return <>{data.content && <RichText document={data.content} />}</>;
}

export const getStaticProps: GetStaticProps = async () => {
    const res = await resolveBySlug('/');

    return {
        props: {
            data: res.fields,
        },
    };
};

HomePage.Layout = DefaultLayout;

export default HomePage;
