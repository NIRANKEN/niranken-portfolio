import React from 'react';
import { render, screen } from '@testing-library/react';
import { Contact } from '../Contact';

describe('Contact', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render', () => {
    render(<Contact />);
    expect(screen.queryByText('連絡先')).toBeInTheDocument();
    expect(screen.queryByTestId('contact-icon')).toBeInTheDocument();
    expect(screen.queryByText('ご連絡はこちら')).toBeInTheDocument();
  });
});
