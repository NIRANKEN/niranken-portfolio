import React from 'react';
import { render, screen } from '@testing-library/react';
import { ChartView } from '..';

describe('ChartView', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    // RechartsのResponsiveContainer描画時にwindow.ResizeObserver is not a constructorのエラーが出るのでモック対応
    const resizeObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));
    window.ResizeObserver = resizeObserver;

    // RechartsのResponsiveContainerの子要素が描画されないのでモック対応
    jest
      .spyOn(HTMLElement.prototype, 'clientHeight', 'get')
      .mockReturnValue(350);
    jest
      .spyOn(HTMLElement.prototype, 'clientWidth', 'get')
      .mockReturnValue(500);
  });

  describe('bar chart', () => {
    const renderComponent = () =>
      render(
        <ChartView
          chart={{
            id: 'testChartId',
            title: 'テストタイトル',
            explanation: 'テスト説明',
            colorCode: '#abcdef',
            results: [
              {
                baseAxisValue: 'カテゴリ1',
                dataAxisValues: [1],
              },
              {
                baseAxisValue: 'カテゴリ2',
                dataAxisValues: [2],
              },
            ],
          }}
        />
      );

    it('should render', () => {
      renderComponent();
      // x-axis
      expect(screen.getByText('カテゴリ1')).toBeInTheDocument();
      expect(screen.getByText('カテゴリ2')).toBeInTheDocument();

      // y-axis
      expect(screen.getAllByText('1').length).toBeGreaterThan(0);
      expect(screen.getAllByText('2').length).toBeGreaterThan(0);
    });
  });
});
