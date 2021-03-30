import React from 'react';
import { Document } from '@contentful/rich-text-types';
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';

type Props = {
    document: Document;
    renderLinkAsButton?: boolean;
};

const options = (): Options => ({
    renderNode: {},
});

const RichText = ({ document }: Props): JSX.Element => {
    return <>{documentToReactComponents(document, options())}</>;
};

export default RichText;
