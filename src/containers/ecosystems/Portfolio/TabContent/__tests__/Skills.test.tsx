import React from 'react';
import { render, screen } from '@testing-library/react';
import { Skills } from '../Skills';

describe('Contact', () => {
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

  it('should render', () => {
    render(<Skills skills={[]} />);
    expect(screen.getByText('スキル一覧')).toBeInTheDocument();
    expect(screen.getByTestId('skills-icon')).toBeInTheDocument();
  });
});
