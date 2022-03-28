import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '..';

describe('Header', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render no icon Header component', () => {
    render(<Header title="No Icon Title" explanation="No Icon Explanation" />);
    expect(screen.getByText('No Icon Title')).toBeInTheDocument();
    expect(screen.getByText('No Icon Explanation')).toBeInTheDocument();
    // TODO: getByRole('svg')をしたい
    expect(screen.queryByTestId('about-icon')).not.toBeInTheDocument();

    const titleBox = screen.getByTestId('title-box');
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
    expect(screen.getByText('Use Icon Title')).toBeInTheDocument();
    expect(screen.getByText('Use Icon Explanation')).toBeInTheDocument();
    expect(screen.getByTestId('about-icon')).toBeInTheDocument();
  });
});
