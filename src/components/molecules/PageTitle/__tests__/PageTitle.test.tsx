import React from 'react';
import { render, screen } from '@testing-library/react';
import { PageTitle } from '..';

describe('Page Title', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render', () => {
    render(<PageTitle title="Page Title" explanation="Page Explanation" />);
    expect(screen.queryByText('Page Title')).toBeInTheDocument();
    expect(screen.queryByText('Page Explanation')).toBeInTheDocument();
    const titleBox = screen.queryByTestId('title-box');
    expect(titleBox).toHaveStyle({
      'font-size': '3rem',
      'font-weight': 700,
    });
  });
});