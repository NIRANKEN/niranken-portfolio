import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { TabPanel } from './TabPanel';
import { BasicTabType } from './BasicTabType';
import { TabContentFab } from 'components/atoms/TabContentFab';

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

type BasicTabsType = {
  basicTabs: Array<BasicTabType>;
};

export const BasicTabs: React.FC<BasicTabsType> = ({
  basicTabs,
}: BasicTabsType) => {
  const [value, setValue] = React.useState<number>(0);
  const maxValue = basicTabs.length - 1;

  return (
    <Box mt={2} sx={{ width: '100%' }} position="relative">
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          maxWidth: { xs: 260, sm: 380 },
        }}
      >
        <Tabs
          value={value}
          onChange={(event, newValue: any) => setValue(newValue)}
          aria-label="scrollable auto tabs"
          variant="scrollable"
          scrollButtons="auto"
        >
          {basicTabs.map((basicTab, idx) => (
            <Tab
              data-testid={`portfolio-tab-${idx}`}
              key={`tab-${idx}`}
              label={basicTab.title}
              {...a11yProps(idx)}
            />
          ))}
        </Tabs>
      </Box>
      {basicTabs.map((basicTab, idx) => (
        <TabPanel key={`tabPanel-${idx}`} value={value} index={idx}>
          {basicTab.content}
        </TabPanel>
      ))}
      <TabContentFab
        label="before-tab-content"
        tooltipTitle={value < 1 ? '' : basicTabs[value - 1].title}
        sxProps={{
          position: 'fixed',
          bottom: 32,
          right: 96,
        }}
        styleEnum="naviBefore"
        isDisabled={value < 1}
        onClick={() => {
          if (value > 0) {
            setValue(value - 1);
            window.scrollTo(0, 0);
          }
        }}
      />
      <TabContentFab
        label="next-tab-content"
        tooltipTitle={value >= maxValue ? '' : basicTabs[value + 1].title}
        sxProps={{
          position: 'fixed',
          bottom: 32,
          right: 32,
        }}
        styleEnum="naviNext"
        isDisabled={value >= maxValue}
        onClick={() => {
          if (value < maxValue) {
            setValue(value + 1);
            window.scrollTo(0, 0);
          }
        }}
      />
    </Box>
  );
};
