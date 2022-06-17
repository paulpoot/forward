import { render, screen } from '@testing-library/react';

import React from 'react';

import Card from './Card';

describe('Card component', () => {
  it('should render correctly', () => {
    render(
      <Card
        title="Title"
        description="Description"
        link="https://example.com"
      />,
    );

    expect(screen.getByText('Title →')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
    expect((screen.getByRole('link') as HTMLAnchorElement).href).toBe(
      'https://example.com/',
    );
  });
});
