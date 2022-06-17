import { render, screen } from '@testing-library/react';

import React from 'react';

import Heading from './Heading';

describe('Heading component', () => {
  it('should render the correct heading tag depending on the input', () => {
    render(
      <div>
        <Heading level="h1">Heading 1</Heading>
        <Heading level="h2">Heading 2</Heading>
        <Heading level="h3">Heading 3</Heading>
        <Heading level="h4">Heading 4</Heading>
        <Heading level="h5">Heading 5</Heading>
        <Heading level="h6">Heading 6</Heading>
      </div>,
    );

    expect((screen.getByText('Heading 1') as HTMLHeadingElement).tagName).toBe(
      'H1',
    );
    expect((screen.getByText('Heading 2') as HTMLHeadingElement).tagName).toBe(
      'H2',
    );
    expect((screen.getByText('Heading 3') as HTMLHeadingElement).tagName).toBe(
      'H3',
    );
    expect((screen.getByText('Heading 4') as HTMLHeadingElement).tagName).toBe(
      'H4',
    );
    expect((screen.getByText('Heading 5') as HTMLHeadingElement).tagName).toBe(
      'H5',
    );
    expect((screen.getByText('Heading 6') as HTMLHeadingElement).tagName).toBe(
      'H6',
    );
  });
});
