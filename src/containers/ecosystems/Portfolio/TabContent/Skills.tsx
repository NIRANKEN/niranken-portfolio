import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { CircularProgress } from 'components/atoms/CircularProgress';
import { Header } from 'components/molecules/Header';
import { ChartView } from 'components/organisms/ChartView';
import { Skill } from 'ducks/skills/Skill';
import React from 'react';

type SkillsProps = {
  skills: Skill[];
  isLoading: () => boolean;
};

export const Skills: React.FC<SkillsProps> = ({
  skills,
  isLoading,
}: SkillsProps) => (
  <>
    {/* TODO: 右のカードの説明は0~5の数値の説明に変更する */}
    <Header iconName="skills" title="スキル一覧" explanation="" />
    {isLoading() ? (
      <CircularProgress />
    ) : (
      <Box mt={1} whiteSpace="pre-line">
        {skills.map((skill) => (
          <React.Fragment key={skill.id}>
            <Typography component="div">
              <Box fontWeight="fontWeightBold" fontSize="h6.fontSize" mt={2}>
                {skill.title}
              </Box>
            </Typography>
            <Grid container direction="row" spacing={2}>
              <Grid item xs={12} sm={12} md={12} lg={8} xl={6}>
                <Box
                  key={skill.id}
                  height={360}
                  px={2}
                  mt={1}
                  sx={{
                    height: { xs: 240, sm: 320 },
                    width: { xs: 320, sm: 480, md: 820 },
                  }}
                >
                  <ChartView chart={skill} />
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={4} xl={6}>
                <Card
                  sx={{
                    p: 2,
                    height: '100%',
                  }}
                >
                  <Typography>{skill.explanation}</Typography>
                </Card>
              </Grid>
            </Grid>
          </React.Fragment>
        ))}
        <Card
          sx={{
            p: 2,
          }}
        >
          {/* TODO: その他の部分の書き方考える。ベタ書きではなくAPIから取得する */}
          <Typography>
            {`# その他
        - スクラム: 1週間スプリントで半年ほど経験。開発体験が良かったのでもうちょい経験積みたい。
        - Jira: 1週間スプリントで運用経験あり。
        - 社内のWindowsやLinux(Ubuntu, CentOS)のサーバーを3年くらいメンテしてます。
        `}
          </Typography>
        </Card>
      </Box>
    )}
  </>
);
