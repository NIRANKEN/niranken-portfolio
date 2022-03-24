import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '..';

describe('Header', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render no icon Header component', () => {
    render(<Header title="No Icon Title" explanation="No Icon Explanation" />);
    expect(screen.queryByText('No Icon Title')).toBeInTheDocument();
    expect(screen.queryByText('No Icon Explanation')).toBeInTheDocument();
    // TODO: queryByRole('svg')をしたい
    expect(screen.queryByTestId('about-icon')).not.toBeInTheDocument();

    const titleBox = screen.queryByTestId('title-box');
    expect(titleBox).toHaveStyle({
      'font-size': '2.125rem',
      'font-weight': 700,
    });
  });

  it('should render Header component with icon', () => {
    render(
      <Header
        iconName="about"
        title="Use Icon Title"
        explanation="Use Icon Explanation"
      />
    );
    expect(screen.queryByText('Use Icon Title')).toBeInTheDocument();
    expect(screen.queryByText('Use Icon Explanation')).toBeInTheDocument();
    expect(screen.queryByTestId('about-icon')).toBeInTheDocument();
  });
});
