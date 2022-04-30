import React from 'react';
import { render, screen } from '@testing-library/react';
import { Works } from '../Works';

describe('Contact', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const checkCommon = () => {
    expect(
      screen.getByText('人事さま向けWebアプリケーション開発者として')
    ).toBeInTheDocument();
    expect(screen.getByTestId('works1-icon')).toBeInTheDocument();
    expect(screen.getByText('個人的に作ったもの')).toBeInTheDocument();
    expect(screen.getByTestId('works2-icon')).toBeInTheDocument();
  };

  describe('isLoading', () => {
    it('should render progressbar', () => {
      render(<Works works={[]} personalWorks={[]} isLoading={() => true} />);
      checkCommon();
      expect(screen.getByRole('progressbar')).toBeInTheDocument();
    });
  });

  describe('afterLoading', () => {
    it('should not render progressbar', () => {
      render(<Works works={[]} personalWorks={[]} isLoading={() => false} />);
      checkCommon();
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
    });
  });
});
