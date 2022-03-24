import React from 'react';
import { render, screen } from '@testing-library/react';
import { Works } from '../Works';

describe('Contact', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const checkCommon = () => {
    expect(
      screen.queryByText('人事さま向けWebアプリケーション開発者として')
    ).toBeInTheDocument();
    expect(screen.queryByTestId('works1-icon')).toBeInTheDocument();
    expect(screen.queryByText('個人的に作ったもの')).toBeInTheDocument();
    expect(screen.queryByTestId('works2-icon')).toBeInTheDocument();
  };

  describe('isLoading is true', () => {
    it('should render progressbar', () => {
      render(<Works works={[]} isLoading={() => true} />);
      checkCommon();
      expect(screen.queryByRole('progressbar')).toBeInTheDocument();
    });
  });

  describe('isLoading is false', () => {
    it('should not render progressbar', () => {
      render(<Works works={[]} isLoading={() => false} />);
      checkCommon();
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
    });
  });
});
