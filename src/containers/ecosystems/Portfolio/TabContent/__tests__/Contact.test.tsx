import React from 'react';
import { render, screen } from '@testing-library/react';
import { Contact } from '../Contact';

describe('Contact', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render', () => {
    render(<Contact />);
    expect(screen.getByText('連絡先')).toBeInTheDocument();
    expect(screen.getByTestId('contact-icon')).toBeInTheDocument();
    expect(screen.getByText('ご連絡はこちら')).toBeInTheDocument();
  });
});
