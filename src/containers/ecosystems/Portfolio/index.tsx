import { Header } from 'components/molecules/Header';
import React from 'react';
import Box from '@mui/material/Box';
import { BasicTabs } from 'components/organisms/BasicTabs';
import { About } from './TabContent/About';
import { Works } from './TabContent/Works';
import { Skills } from './TabContent/Skills';
import { Contact } from './TabContent/Contact';

export const Portfolio: React.FC = () => {
  return (
    <>
      <Box>
        <Header
          title="にらんけんのポートフォリオ"
          explanation="ここに説明でも入れる"
        />
        <BasicTabs basicTabs={[
          {
            title: "ABOUT",
            content: <About />,
          },
          {
            title: "WORKS",
            content: <Works />,
          },
          {
            title: "SKILLS",
            content: <Skills />,
          },
          {
            title: "Contact",
            content: <Contact />,
          },
        ]} />
      </Box>
    </>
  );
};
