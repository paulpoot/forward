import { render, screen } from '@testing-library/react';

import React from 'react';

import Text from './Text';

describe('Text component', () => {
  it('should render a code element for the code variant ', () => {
    render(<Text variant="code">Sample text</Text>);

    expect((screen.getByText('Sample text') as HTMLElement).tagName).toBe(
      'CODE',
    );
  });

  it('should render a p element for the body variant ', () => {
    render(<Text variant="body">Sample text</Text>);

    expect((screen.getByText('Sample text') as HTMLElement).tagName).toBe('P');
  });
});
