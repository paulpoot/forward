import type { Meta, Story } from '@storybook/react';

import React from 'react';

import type { Props } from './Card';
import CardComponent from './Card';

export default {
  title: 'Atoms/Card',
  component: CardComponent,
  parameters: {
    docs: {
      description: {
        component: 'Simple card component',
      },
    },
  },
} as Meta;

const Template: Story<Props> = (args) => <CardComponent {...args} />;

export const Card = Template.bind({});
Card.args = {
  title: 'Sample title',
  description: 'Lorem ipsum dolor sit amet',
  link: '/',
};
