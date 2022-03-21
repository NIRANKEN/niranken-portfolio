import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Header } from 'components/molecules/Header';
import { ChartView } from 'components/organisms/ChartView';
import { mockedSkills } from 'ducks/skills/mockedFrontSkills';
import React from 'react';

export const Skills = () => (
  <>
    {/* その他のアピールポイントのコンポーネントつくる*/}
    <Header
      iconName="skills"
      title="スキル一覧"
      explanation="フォーマットもろもろを整える。グラフにしちゃう？"
    />
    <Box mt={1} whiteSpace="pre-line">
      {
        mockedSkills.map(skill => 
        <>
          <Box key={skill.id} height={360} width={640} px={2} mt={1}>
            <ChartView chart={skill} />
          </Box>
          <Typography>
            ここに0~5の説明いれる。こんな感じかな
          </Typography>
        </>
        )
      }
      <Typography>
        {`
        # フロント
        - JavaScript & Sass & jQuery: 読み書きできます。Webアプリつくれます。
        - JSP: 読み書きできます。
        - React & Redux & TypeScript & Material-UI: 読み書きできます。このくらいできます。(URL貼る) <- この辺の開発経験を積みたい!
        - Jest: 読み書きできます。
        - Cypress: 読み書きできます。

        # バックエンド
        - Java6~8 & SpringFramework: 読み書きできます。Webアプリつくれます。
        - JUnit: 読み書きできます。導入できます。
        - SQL: 読み書きできます。PL/SQLも書けます。
        - Python3: 読み書きできます。社内ツール作ったり、お遊び(URL貼る)する程度
        - TypeScript: 読み書きできます <- この辺の開発経験を積みたい!
        - hibernate: 読み書きできます

        # インフラまわり
        - Oracle: ログ読みや設定修正できます。
        - tomcat: ログ読みや設定修正、構築できます。
        - nginx: ログ読みや設定修正、構築できます。
        - Linux: 研究室時代含めて、かれこれ7年くらい使ってます。cronやservice仕込んだり、トラブルシュートできます。
        - Windows: サービス設定したり、イベントログとったり、タスクスケジューラ仕込んだり。
        - AWS: マネジメントコンソールやAWS CLI使います。EC2, S3, Lambda, IAM, パラメータストアなど。

        # CI/CD
        - Jenkins: CI/CDの仕組み構築できます。
        - GitLab-CI: CI/CDの仕組み構築できます。
        - Ansible: 読み書きできます。
        - cloudformation: 読みと調べながら書きできます。
        - Docker: Jenkinsや、GitLab-CIなどで、JenkinsFile書いたり。
        - Maven: pom.xmlの読み書きできます。

        # その他
        - スクラム: 1週間スプリントで半年ほど経験。開発体験が良かったのでもうちょい経験積みたい。
        - C++ & Qt: 研究室時代に独学で勉強。この頃は読めないソース書いてたなぁ…。
        `}
      </Typography>
    </Box>
  </>
);
