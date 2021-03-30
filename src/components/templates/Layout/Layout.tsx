import * as React from 'react';
import { NextComponentType, NextPageContext } from 'next';
import Meta from '~/src/blocks/meta';
import { IMetaFields } from '~/@types/generated/contentful';

interface Props {
    children: React.ReactNode;
    meta?: IMetaFields;
}

const Layout: NextComponentType<NextPageContext, Record<string, unknown>, Props> = ({ children, meta }: Props) => {
    return (
        <>
            {meta && <Meta {...meta}></Meta>}
            {children}
        </>
    );
};

export default Layout;
