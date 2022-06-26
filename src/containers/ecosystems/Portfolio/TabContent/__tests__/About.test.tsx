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

    it('isLoading', async () => {
      renderComponent(() => true);
      expect(screen.getByText('自己紹介・価値観')).toBeInTheDocument();
      expect(screen.getByTestId('about-icon')).toBeInTheDocument();
      expect(screen.queryByTestId('self-introduction')).not.toBeInTheDocument();
      const progressbar = await screen.findByRole('progressbar');
      expect(progressbar).toBeInTheDocument();
    });

    it('AfterLoading', async () => {
      renderComponent(() => false);
      expect(screen.getByText('自己紹介・価値観')).toBeInTheDocument();
      expect(screen.getByTestId('about-icon')).toBeInTheDocument();
      const selfIntroduction = await screen.findByTestId('self-introduction');
      expect(selfIntroduction.textContent).toContain(selfIntroText);
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
    });
  });
});
