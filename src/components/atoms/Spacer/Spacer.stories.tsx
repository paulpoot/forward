import type { Meta, Story } from '@storybook/react';

import React from 'react';

import Text from '@atoms/Text/Text';

import type { Props } from './Spacer';
import SpacerComponent from './Spacer';

export default {
  title: 'Atoms/Spacer',
  component: SpacerComponent,
  parameters: {
    docs: {
      description: {
        component:
          'The spacer component can be used to create some distance between elements without needing to add styling. ',
      },
    },
  },
} as Meta;

const Template: Story<Props> = (args) => (
  <>
    <Text>There is a spacer below this line.</Text>
    <SpacerComponent {...args} />
    <Text>There is no spacer below this line.</Text>
    <Text>There is no spacer above this line.</Text>
  </>
);

export const Spacer = Template.bind({});
Spacer.args = { size: 'md' };
