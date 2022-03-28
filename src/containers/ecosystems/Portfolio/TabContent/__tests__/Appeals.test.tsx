import React from 'react';
import { render, screen } from '@testing-library/react';
import { Appeals } from '../Appeals';

describe('Appeals', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render', () => {
    render(
      <Appeals
        appeals={[
          {
            id: 'dummyId',
            appeal: 'dummyAppeal',
            detail: 'dummyDetail',
            imagePath: 'dummyImagePath',
            imageHeight: '123',
            imageExplanation: 'dummyImageExplanation',
          },
        ]}
      />
    );
    expect(screen.getByText('3つのスキルアピール')).toBeInTheDocument();
    expect(screen.getByTestId('appeals-icon')).toBeInTheDocument();
    // TODO: Appealコンポーネントの期待値を決めてテストを追加する
    expect(screen.getByText('dummyAppeal')).toBeInTheDocument();
    expect(screen.getByText('▼ dummyImageExplanation')).toBeInTheDocument();
  });
});
