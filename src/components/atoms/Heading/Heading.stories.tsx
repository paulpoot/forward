import type { Meta, Story } from '@storybook/react';

import React from 'react';

import type { Props } from './Heading';
import HeadingComponent from './Heading';

export default {
  title: 'Atoms/Heading',
  component: HeadingComponent,
  parameters: {
    docs: {
      description: {
        component:
          'The heading element is used to dynamically create a heading tag based on a prop. This way we can make a child component use a different heading level depending on the context. This is useful for maintaining a logical HTML structure if a component that contains a heading can be used on different levels of the page. For example, the product tile contains a heading and can be used as a child of the lister page (so h2), but it can also be used in the related products section of the product details page, where h2 would be taken by the related products title, forcing the product tile to move down to h3.',
      },
    },
  },
} as Meta;

const Template: Story<Props> = (args) => (
  <HeadingComponent level={args.level}>{args.level}</HeadingComponent>
);

export const Heading = Template.bind({});
Heading.args = { level: 'h1' };
