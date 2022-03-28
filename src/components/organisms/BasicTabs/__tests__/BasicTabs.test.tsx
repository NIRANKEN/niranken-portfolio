import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BasicTabs } from '..';
import Typography from '@mui/material/Typography';

describe('BasicTabs', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render', () => {
    render(
      <BasicTabs
        basicTabs={[
          {
            title: 'タイトル1',
            content: <Typography>テスト1</Typography>,
          },
          {
            title: 'タイトル2',
            content: <Typography>テスト2</Typography>,
          },
        ]}
      />
    );
    expect(screen.getByText('タイトル1')).toBeInTheDocument();
    expect(screen.getByText('タイトル2')).toBeInTheDocument();
    expect(screen.getByText('テスト1')).toBeInTheDocument();
    expect(screen.queryByText('テスト2')).not.toBeInTheDocument();
    expect(screen.getByRole('tabpanel')).toBeInTheDocument();

    fireEvent.click(screen.getByText('タイトル2'));
    expect(screen.getByText('タイトル1')).toBeInTheDocument();
    expect(screen.getByText('タイトル2')).toBeInTheDocument();
    expect(screen.queryByText('テスト1')).not.toBeInTheDocument();
    expect(screen.getByText('テスト2')).toBeInTheDocument();
    expect(screen.getByRole('tabpanel')).toBeInTheDocument();
  });
});
