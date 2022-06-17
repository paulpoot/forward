import type { Meta, Story } from '@storybook/react';

import React from 'react';

import ContainerComponent from './Container';
import css from './Container.stories.module.scss';

export default {
  title: 'Atoms/Container',
  component: ContainerComponent,
} as Meta;

const Template: Story = () => (
  <div className={css.background}>
    <ContainerComponent>Test inhoud</ContainerComponent>
  </div>
);

export const Container = Template.bind({});
Container.parameters = {
  layout: 'fullscreen',
};
