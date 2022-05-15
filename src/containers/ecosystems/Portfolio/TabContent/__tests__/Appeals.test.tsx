import React from 'react';
import { render, screen } from '@testing-library/react';
import { Appeals } from '../Appeals';

describe('Appeals', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('should render', () => {
    const renderComponent = (isLoading: () => boolean) =>
      render(
        <Appeals
          appeals={[
            {
              id: 'dummyId',
              ord: 1,
              appeal: 'dummyAppeal',
              detail: 'dummyDetail',
              imagePath: 'dummyImagePath',
              imageHeight: '123',
              imageExplanation: 'dummyImageExplanation',
            },
          ]}
          isLoading={isLoading}
        />
      );

    it('isLoading', () => {
      renderComponent(() => true);
      expect(screen.getByText('得意なこと3選')).toBeInTheDocument();
      expect(screen.getByTestId('appeals-icon')).toBeInTheDocument();
      expect(screen.queryByText('dummyAppeal')).not.toBeInTheDocument();
      expect(
        screen.queryByText('▼ dummyImageExplanation')
      ).not.toBeInTheDocument();
      expect(screen.getByRole('progressbar')).toBeInTheDocument();
    });

    it('afterLoading', () => {
      renderComponent(() => false);
      expect(screen.getByText('得意なこと3選')).toBeInTheDocument();
      expect(screen.getByTestId('appeals-icon')).toBeInTheDocument();
      expect(screen.getByText('dummyAppeal')).toBeInTheDocument();
      expect(screen.getByText('▼ dummyImageExplanation')).toBeInTheDocument();
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
    });
  });
});
