import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { TabContentFab } from '../TabContentFab';

describe('TabContentFab', () => {
  describe('isDisabled is false', () => {
    it('should render', async () => {
      render(
        <TabContentFab
          label={'dummy-label'}
          tooltipTitle={'dummyTooltipTitle'}
          sxProps={null}
          styleEnum={'naviBefore'}
          isDisabled={false}
          onClick={() => {
            throw new Error('Function not implemented.');
          }}
        />
      );
      expect(screen.getByTestId('dummy-label')).toBeInTheDocument();
      expect(screen.getByTestId('dummy-label')).toBeEnabled();
      expect(screen.queryByText('dummyTooltipTitle')).not.toBeInTheDocument();
      fireEvent.mouseEnter(screen.getByTestId('dummy-label'));
      await waitFor(() => {
        expect(screen.getByRole('tooltip')).toBeInTheDocument();
      });
      expect(screen.getByText('dummyTooltipTitle')).toBeInTheDocument();
    });
  });
  describe('isDisabled is true', () => {
    it('should render', () => {
      render(
        <TabContentFab
          label={'dummy-label'}
          tooltipTitle={'dummyTooltipTitle'}
          sxProps={null}
          styleEnum={'naviNext'}
          isDisabled={true}
          onClick={() => {
            throw new Error('Function not implemented.');
          }}
        />
      );
      expect(screen.getByTestId('dummy-label')).toBeInTheDocument();
      expect(screen.getByTestId('dummy-label')).toBeDisabled();
      expect(screen.queryByText('dummyTooltipTitle')).not.toBeInTheDocument();
    });
  });
});
