import React from 'react';
import Box from '@mui/material/Box';
import { BasicTabs } from 'components/organisms/BasicTabs';
import { About } from './TabContent/About';
import { Works } from './TabContent/Works';
import { Contact } from './TabContent/Contact';
import { Appeals } from './TabContent/Appeals';
import { Skills } from './TabContent/Skills';
import { PageTitle } from 'components/molecules/PageTitle';

export const Portfolio: React.FC = () => {
  return (
    <Box>
      <PageTitle
        title="にらんけんのポートフォリオ"
        explanation="自分がどういう人間(?)で、どういう経歴で、どういうスキル持ってんのかみたいなものを、企業のエンジニアや人事担当者にアピールするもの(だと思ってる)"
      />
      <BasicTabs
        basicTabs={[
          {
            title: 'ABOUT',
            content: <About />,
          },
          {
            title: 'WORKS',
            content: <Works />,
          },
          {
            title: 'APPEALS',
            content: <Appeals />
          },
          {
            title: 'SKILLS',
            content: <Skills />,
          },
          {
            title: 'Contact',
            content: <Contact />,
          },
        ]}
      />
    </Box>
  );
};
