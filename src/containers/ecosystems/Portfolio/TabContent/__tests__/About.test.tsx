import React from 'react';
import { render, screen } from '@testing-library/react';
import { About } from '../About';

describe('About', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render', () => {
    const selfIntroText = `ここで自己紹介文を書く。
      改行した際も問題ないかテストする。`;
    render(
      <About
        aboutContent={{
          selfIntroduction: selfIntroText,
        }}
      />
    );
    expect(screen.getByText('自己紹介・価値観')).toBeInTheDocument();
    expect(screen.getByTestId('about-icon')).toBeInTheDocument();
    expect(screen.getByTestId('self-introduction').textContent).toContain(
      selfIntroText
    );
  });
});
