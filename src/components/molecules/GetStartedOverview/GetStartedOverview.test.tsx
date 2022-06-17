import { render, screen } from '@testing-library/react';

import React from 'react';

import GetStartedOverview from './GetStartedOverview';

describe('GetStartedOverview component', () => {
  it('should render correctly', () => {
    render(<GetStartedOverview />);

    const cards = screen.getAllByRole(/link/);
    expect(cards).toHaveLength(4);
  });
});
