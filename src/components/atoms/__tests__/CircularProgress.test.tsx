import React from 'react';
import { CircularProgress } from '../CircularProgress';
import { render, screen } from '@testing-library/react';

describe('CircularProgress', () => {
  describe('useWindowHeight is false', () => {
    it('should not have height', () => {
      render(<CircularProgress />);
      const muiProgress = screen.queryByRole('progressbar');
      expect(muiProgress).toBeInTheDocument();
      expect(
        window.getComputedStyle(muiProgress!.parentElement!).height
      ).toBeFalsy();
    });
  });
  describe('useWindowHeight is true', () => {
    it('should have height', () => {
      render(<CircularProgress useWindowHeight={true} />);
      const muiProgress = screen.queryByRole('progressbar');
      expect(muiProgress).toBeInTheDocument();
      expect(
        window.getComputedStyle(muiProgress!.parentElement!).height
      ).toEqual('calc(100vh - 112px)');
    });
  });
});
