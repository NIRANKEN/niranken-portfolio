import React from 'react';
import { render, screen } from '@testing-library/react';
import { Skills } from '../Skills';
import { Skill } from 'ducks/skills';

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

  describe('should render', () => {
    const skill: Skill = {
      id: 'id1',
      title: 'dummyTitle',
      explanation: 'dummyExplanation',
      colorCode: '#FFFFFF',
      results: [],
    };

    it('isLoading', () => {
      render(<Skills skills={[skill]} isLoading={() => true} />);
      expect(screen.getByText('スキル一覧')).toBeInTheDocument();
      expect(screen.getByTestId('skills-icon')).toBeInTheDocument();
      expect(screen.queryByText('dummyTitle')).not.toBeInTheDocument();
      expect(screen.getByRole('progressbar')).toBeInTheDocument();
    });

    it('afterLoading', () => {
      render(<Skills skills={[skill]} isLoading={() => false} />);
      expect(screen.getByText('スキル一覧')).toBeInTheDocument();
      expect(screen.getByTestId('skills-icon')).toBeInTheDocument();
      expect(screen.getByText('dummyTitle')).toBeInTheDocument();
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
    });
  });
});
