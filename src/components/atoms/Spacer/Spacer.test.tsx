import { render } from '@testing-library/react';

import React from 'react';

import Spacer from './Spacer';

describe('Spacer component', () => {
  it('should render correctly', () => {
    const { container } = render(<Spacer size="md" />);

    expect(container.firstChild).toHaveClass('spacer', 'spacer-md');
  });
});
