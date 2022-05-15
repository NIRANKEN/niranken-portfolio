import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BasicTabs } from '..';
import Typography from '@mui/material/Typography';

describe('BasicTabs', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    window.scrollTo = jest.fn();
  });

  const checkCommon = () => {
    expect(screen.getByText('タイトル1')).toBeInTheDocument();
    expect(screen.getByText('タイトル2')).toBeInTheDocument();
    expect(screen.getByRole('tabpanel')).toBeInTheDocument();
    expect(screen.getByTestId('before-tab-content')).toBeInTheDocument();
    expect(screen.getByTestId('next-tab-content')).toBeInTheDocument();
  };

  const renderComponent = () =>
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

  it('should render', () => {
    renderComponent();
    checkCommon();
    expect(screen.getByText('テスト1')).toBeInTheDocument();
    expect(screen.queryByText('テスト2')).not.toBeInTheDocument();
    expect(screen.getByTestId('before-tab-content')).toBeDisabled();
    expect(screen.getByTestId('next-tab-content')).toBeEnabled();

    fireEvent.click(screen.getByText('タイトル2'));
    checkCommon();
    expect(screen.queryByText('テスト1')).not.toBeInTheDocument();
    expect(screen.getByText('テスト2')).toBeInTheDocument();
    expect(screen.getByTestId('before-tab-content')).toBeEnabled();
    expect(screen.getByTestId('next-tab-content')).toBeDisabled();

    fireEvent.click(screen.getByTestId('before-tab-content'));
    checkCommon();
    expect(screen.getByText('テスト1')).toBeInTheDocument();
    expect(screen.queryByText('テスト2')).not.toBeInTheDocument();
    expect(screen.getByTestId('before-tab-content')).toBeDisabled();
    expect(screen.getByTestId('next-tab-content')).toBeEnabled();
    expect(window.scrollTo).toBeCalledWith(0, 0);

    fireEvent.click(screen.getByTestId('next-tab-content'));
    checkCommon();
    expect(screen.queryByText('テスト1')).not.toBeInTheDocument();
    expect(screen.getByText('テスト2')).toBeInTheDocument();
    expect(screen.getByTestId('before-tab-content')).toBeEnabled();
    expect(screen.getByTestId('next-tab-content')).toBeDisabled();
    expect(window.scrollTo).toBeCalledWith(0, 0);
  });
});
