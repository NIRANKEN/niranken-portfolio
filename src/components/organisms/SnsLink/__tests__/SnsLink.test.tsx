import React from 'react';
import { render, screen } from '@testing-library/react';
import { SnsLink, SnsMediaEnum } from '..';

describe('SnsLink', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  const renderComponent = (snsMediaEnum: SnsMediaEnum) =>
    render(
      <SnsLink
        snsMediaEnum={snsMediaEnum}
        linkUrl={'yourSnsMediaLink'}
        explanation={'なにか説明'}
      />
    );

  it('should render youtube', () => {
    renderComponent('youtube');
    expect(screen.getByText('なにか説明')).toBeInTheDocument();
    // TODO: sizeのテスト
  });

  it('should render misskey', () => {
    renderComponent('misskey');
    expect(screen.getByText('なにか説明')).toBeInTheDocument();
    // TODO: sizeのテスト
  });

  it('should render qiita', () => {
    renderComponent('qiita');
    expect(screen.getByText('なにか説明')).toBeInTheDocument();
    // TODO: sizeのテスト
  });

  it('should render note', () => {
    renderComponent('note');
    expect(screen.getByText('なにか説明')).toBeInTheDocument();
    // TODO: sizeのテスト
  });

});
