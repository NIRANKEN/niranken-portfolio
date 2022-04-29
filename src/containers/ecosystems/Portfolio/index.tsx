import Box from '@mui/material/Box';
import { BasicTabs } from 'components/organisms/BasicTabs';
import { About } from './TabContent/About';
import { Works } from './TabContent/Works';
import { Contact } from './TabContent/Contact';
import { Appeals } from './TabContent/Appeals';
import { Skills } from './TabContent/Skills';
import { PageTitle } from 'components/molecules/PageTitle';
import { operations, selectors } from 'ducks/works';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'store';
import { mockedAboutContent } from 'ducks/about/mockedAboutContent';
import { mockedAppealContents } from 'ducks/appeals/mockedAppealContents';
import { mockedSkills } from 'ducks/skills/mockedSkills';

export const Portfolio: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const works = useSelector(selectors.works);
  const readAllWorksResult = useSelector(selectors.readAllResult);

  useEffect(() => {
    if (!readAllWorksResult.status) {
      dispatch(operations.readAll());
    }
  }, [dispatch, readAllWorksResult.status]);

  const isLoading = () =>
    !readAllWorksResult.status || readAllWorksResult.status === 'pending';

  return (
    <Box sx={{ width: '100%' }}>
      <PageTitle title="にらんけんのポートフォリオ" explanation="" />
      <BasicTabs
        basicTabs={[
          {
            title: 'ABOUT',
            content: <About aboutContent={mockedAboutContent} />,
          },
          {
            title: 'WORKS',
            content: (
              <Works
                {...{
                  works: works.filter((work) => work.type === 'webEngineer'),
                  personalWorks: works.filter(
                    (work) => work.type === 'personal'
                  ),
                  isLoading,
                }}
              />
            ),
          },
          {
            title: 'APPEALS',
            content: <Appeals appeals={mockedAppealContents} />,
          },
          {
            title: 'SKILLS',
            content: <Skills skills={mockedSkills} />,
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
