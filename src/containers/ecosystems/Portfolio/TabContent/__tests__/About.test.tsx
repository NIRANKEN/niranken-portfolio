import React from 'react';
import { render, screen } from '@testing-library/react';
import { About } from '../About';
import { ContactData } from 'ducks/contact';

// TODO: lintエラー修正
// eslint-disable-next-line react/display-name, react/prop-types
jest.mock('@mui/material/Slide', () => ({ children }) => <>{children}</>);

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
          sentContact={undefined}
          onClickSendMessage={function (contactData: ContactData): void {
            throw new Error('Function not implemented.');
          }}
          sendContactMessageResult={undefined}
        />
      );

    it('isLoading', () => {
      renderComponent(() => true);
      expect(screen.getByText('自己紹介・価値観')).toBeInTheDocument();
      expect(screen.getByTestId('about-icon')).toBeInTheDocument();
      expect(screen.queryByTestId('self-introduction')).not.toBeInTheDocument();
      expect(
        screen.getByTestId('circular-progress-self-introduction')
      ).toBeInTheDocument();
    });

    it('AfterLoading', async () => {
      renderComponent(() => false);
      expect(screen.getByText('自己紹介・価値観')).toBeInTheDocument();
      expect(screen.getByTestId('about-icon')).toBeInTheDocument();
      const selfIntroduction = await screen.findByTestId('self-introduction');
      expect(selfIntroduction.textContent).toContain(selfIntroText);
      expect(
        screen.queryByTestId('circular-progress-self-introduction')
      ).not.toBeInTheDocument();
    });
  });
});
