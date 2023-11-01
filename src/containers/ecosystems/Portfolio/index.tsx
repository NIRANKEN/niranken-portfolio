import Box from '@mui/material/Box';
import { BasicTabs } from 'components/organisms/BasicTabs';
import { About } from './TabContent/About';
import { Works } from './TabContent/Works';
import { Appeals } from './TabContent/Appeals';
import { Skills } from './TabContent/Skills';
import { PageTitle } from 'components/molecules/PageTitle';
import { worksOperations, worksSelectors } from 'ducks/works';
import { skillsOperations, skillsSelectors } from 'ducks/skills';
import { appealsOperations, appealsSelectors } from 'ducks/appeals';
import { aboutOperations, aboutSelectors } from 'ducks/about';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'store';
import { RequestResultType } from 'lib/RequestResult';
import {
  ContactData,
  contactOperations,
  contactSelectors,
} from 'ducks/contact';

export const Portfolio: React.FC = () => {
  const dispatch: AppDispatch = useDispatch<AppDispatch>();
  // TODO: useSelectorとその利用箇所が冗長になっているのでリファクタする
  const works = useSelector(worksSelectors.works);
  const skills = useSelector(skillsSelectors.skills);
  const appeals = useSelector(appealsSelectors.appeals);
  const about = useSelector(aboutSelectors.about('niranken'));
  const contact = useSelector(contactSelectors.contact('1'));

  const readAllWorksResult = useSelector(worksSelectors.readAllResult);
  const readAllSkillsResult = useSelector(skillsSelectors.readAllResult);
  const readAllAppealsResult = useSelector(appealsSelectors.readAllResult);
  const readAboutResult = useSelector(aboutSelectors.readResult);
  const sendContactMessageResult = useSelector(contactSelectors.sendResult);

  useEffect(() => {
    if (
      !readAllWorksResult.status &&
      !readAllSkillsResult.status &&
      !readAllAppealsResult.status &&
      !readAboutResult.status
    ) {
      dispatch(worksOperations.readAll());
      dispatch(skillsOperations.readAll());
      dispatch(appealsOperations.readAll());
      dispatch(aboutOperations.read());
    }
  }, [
    dispatch,
    readAllWorksResult.status,
    readAllSkillsResult.status,
    readAllAppealsResult,
    readAboutResult,
  ]);

  const isLoading = (dispatchResult: RequestResultType) => (): boolean =>
    dispatchResult.status ? dispatchResult.status === 'pending' : true;

  const handleClickSendMessage = (contactData: ContactData) => {
    dispatch(contactOperations.send(contactData));
  };

  return (
    <Box component="div" sx={{ width: '100%' }}>
      <PageTitle title="にらんけんのポートフォリオ" explanation="" />
      <BasicTabs
        basicTabs={[
          {
            title: 'ABOUT',
            content: (
              <About
                aboutContent={about}
                sentContact={contact}
                isLoading={isLoading(readAboutResult)}
                onClickSendMessage={handleClickSendMessage}
                sendContactMessageResult={sendContactMessageResult.status}
              />
            ),
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
                  isLoading: isLoading(readAllWorksResult),
                }}
              />
            ),
          },
          {
            title: 'APPEALS',
            content: (
              <Appeals
                appeals={appeals}
                isLoading={isLoading(readAllAppealsResult)}
              />
            ),
          },
          {
            title: 'SKILLS',
            content: (
              <Skills
                skills={skills}
                isLoading={isLoading(readAllSkillsResult)}
              />
            ),
          },
        ]}
      />
    </Box>
  );
};
