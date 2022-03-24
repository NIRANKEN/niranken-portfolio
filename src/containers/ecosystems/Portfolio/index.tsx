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
    <Box>
      <PageTitle
        title="にらんけんのポートフォリオ"
        explanation="自分がどういう人間(?)で、どういう経歴で、どういうスキル持ってんのかみたいなものを、企業のエンジニアや人事担当者にアピールするもの(だと思ってる)"
      />
      <BasicTabs
        basicTabs={[
          {
            title: 'ABOUT',
            content: (
              <About
                selfIntroduction={`こんにちは、そのへんにいる一般エンジニア「にらんけん」です。
                普段はWebエンジニアとして働いています。
                プログラミング歴は独学(研究室時代)3年 + 社会人(Webエンジニア)4年で7年です。

                最近の興味ごとは「開発者の開発体験を良くすること」で、
                アプリケーション開発だけでなく、CI/CDや古くなった開発環境の改善などに力を入れてます。
                みかん箱の上で開発するのはストレスだ！(みかん箱であることに気づかないことも多い)といつも心で唱えてます。
                個人で開発してたら絶対に広い机や疲れにくい椅子を買うはずです。

                定期的なアウトプットの機会として、隔週でお遊びプログラムや勉強した内容を動画化する取り組みを始めており、
                #4として本ポートフォリオを作ってます。半分自己満足ですが、おかげで休日に時間をとって勉強できています。
                `}
              />
            ),
          },
          {
            title: 'WORKS',
            content: <Works {...{works, isLoading}} />,
          },
          {
            title: 'APPEALS',
            content: <Appeals />,
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
