import React from 'react';
import { render, screen } from '@testing-library/react';
import { TabPanel } from '../TabPanel';
import { Typography } from '@mui/material';

describe('TabPanel', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render when "index" equals "value"', () => {
    render(
      <TabPanel index={1} value={1}>
        <Typography>テスト</Typography>
      </TabPanel>
    );
    expect(screen.queryByText('テスト')).toBeInTheDocument();
    expect(screen.queryByRole('tabpanel')).toBeInTheDocument();
  });

  it('should render when "index" not equals "value"', () => {
    render(
      <TabPanel index={1} value={2}>
        <Typography>テスト</Typography>
      </TabPanel>
    );
    expect(screen.queryByText('テスト')).not.toBeInTheDocument();
    expect(screen.queryByRole('tabpanel')).not.toBeInTheDocument();
  });
});
