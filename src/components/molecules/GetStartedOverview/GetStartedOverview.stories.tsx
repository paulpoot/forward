import type { Meta, Story } from '@storybook/react';

import React from 'react';

import GetStartedOverviewComponent from './GetStartedOverview';

export default {
  title: 'Molecules/Get Started Overview',
  component: GetStartedOverviewComponent,
  parameters: {
    docs: {
      description: {
        component: 'The overview of all get started content',
      },
    },
  },
} as Meta;

const Template: Story = (args) => <GetStartedOverviewComponent {...args} />;

export const GetStartedOverview = Template.bind({});
