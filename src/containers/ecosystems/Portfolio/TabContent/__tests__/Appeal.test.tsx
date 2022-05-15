import React from 'react';
import { render, screen } from '@testing-library/react';
import { Appeal } from '../Appeal';

describe('Appeals', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render', () => {
    render(
      <Appeal
        appealContent={{
          id: 'testId',
          ord: 1,
          appeal: 'テストアピール',
          detail: 'テスト詳細',
          imagePath: 'dummy/image/path',
          imageHeight: '1234',
          imageExplanation: 'テスト説明',
        }}
      />
    );
    expect(screen.getByText('テストアピール')).toBeInTheDocument();
    expect(screen.getByText('▼ テスト説明')).toBeInTheDocument();
    expect(screen.getByTestId('appeals-image')).toBeInTheDocument();
  });
});
