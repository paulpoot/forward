import type { Meta, Story } from '@storybook/react';

import React from 'react';

import type { Props } from './Text';
import TextComponent from './Text';

export default {
  title: 'Atoms/Text',
  component: TextComponent,
  parameters: {
    docs: {
      description: {
        component:
          'The text component can be used to create predefined elements for various styles of text without having to style them. ',
      },
    },
  },
} as Meta;

const Template: Story<Props> = (args) => (
  <TextComponent {...args}>Lorem ipsum dolor sit amet</TextComponent>
);

export const Text = Template.bind({});
Text.args = { variant: 'body', size: 'sm', color: 'primary', align: 'left' };
