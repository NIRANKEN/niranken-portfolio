import React from 'react';
import { render, screen } from '@testing-library/react';
import { About } from '../About';

describe('About', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('should render', () => {
    const selfIntroText = `ここで自己紹介文を書く。
      改行した際も問題ないかテストする。`;

    const renderComponent = (isLoading: () => boolean) =>
      render(
        <About
          aboutContent={{
            id: 'niranken',
            selfIntroduction: selfIntroText,
          }}
          isLoading={isLoading}
        />
      );

    it('isLoading', () => {
      renderComponent(() => true);
      expect(screen.getByText('自己紹介・価値観')).toBeInTheDocument();
      expect(screen.getByTestId('about-icon')).toBeInTheDocument();
      expect(screen.queryByTestId('self-introduction')).not.toBeInTheDocument();
      expect(screen.getByRole('progressbar')).toBeInTheDocument();
    });

    it('AfterLoading', () => {
      renderComponent(() => false);
      expect(screen.getByText('自己紹介・価値観')).toBeInTheDocument();
      expect(screen.getByTestId('about-icon')).toBeInTheDocument();
      expect(screen.getByTestId('self-introduction').textContent).toContain(
        selfIntroText
      );
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
    });
  });
});
