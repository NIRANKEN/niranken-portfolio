import React from 'react';
import { render, screen } from '@testing-library/react';
import { Appeal } from '../Appeal';

describe('Appeals', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render', () => {
    render(<Appeal appeal={'テストアピール'} detail={'テスト詳細'} imagePath={'dummy/image/path'} imageHeight={'1234'} />);
    expect(screen.queryByText('テストアピール')).toBeInTheDocument();
    // expect(screen.queryByText('テスト詳細')).toBeInTheDocument();
    expect(screen.queryByTestId('appeals-image')).toBeInTheDocument();
  });
});