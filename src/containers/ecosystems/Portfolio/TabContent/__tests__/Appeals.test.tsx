import React from 'react';
import { render, screen } from '@testing-library/react';
import { Appeals } from '../Appeals';

describe('Appeals', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render', () => {
    render(<Appeals />);
    expect(screen.queryByText('3つのスキルアピール')).toBeInTheDocument();
    expect(screen.queryByTestId('appeals-icon')).toBeInTheDocument();
    // TODO: Appealコンポーネントの期待値を決めてテストを追加する
  });
});
