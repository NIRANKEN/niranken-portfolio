import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { TabPanel } from './TabPanel';
import { BasicTabType } from './BasicTabType';

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

  return (
    <Box mt={2} sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={(event, newValue: any) => setValue(newValue)}
          aria-label="basic tabs example"
        >
          {basicTabs.map((basicTab, idx) => (
            <Tab data-testid={`portfolio-tab-${idx}`} key={`tab-${idx}`} label={basicTab.title} {...a11yProps(idx)} />
          ))}
        </Tabs>
      </Box>
      {basicTabs.map((basicTab, idx) => (
        <TabPanel key={`tabPanel-${idx}`} value={value} index={idx}>
          {basicTab.content}
        </TabPanel>
      ))}
    </Box>
  );
};
