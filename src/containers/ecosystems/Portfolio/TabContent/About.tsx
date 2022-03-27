import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { Header } from 'components/molecules/Header';
import { AboutContent } from 'ducks/about/AboutContent';
import React from 'react';

type AboutProps = {
  aboutContent: AboutContent;
};

export const About: React.FC<AboutProps> = ({ aboutContent }: AboutProps) => (
  <>
    <Header iconName="about" title="自己紹介・価値観" explanation="" />
    <Box mt={2}>
      <Grid container direction="row" spacing={2}>
        <Grid item xs={3}>
          <Tooltip title="こんにちは！">
            <Avatar
              data-testid="avatar-icon"
              alt="にらんけん"
              src="/static/images/profile.png"
              sx={{
                height: '128px',
                width: '128px',
              }}
            />
          </Tooltip>
        </Grid>
        <Grid item xs={9}>
          <Box whiteSpace="pre-line">
            <Typography data-testid="self-introduction">
              {aboutContent.selfIntroduction}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box mt={8} display="flex" maxWidth={1080}>
        <CardMedia
          data-testid="youtube-src"
          sx={{
            width: 640,
            height: 480,
          }}
          component="iframe"
          title="#1 self-intro"
          src="https://www.youtube.com/embed/n0HA1awa9BU"
        />
      </Box>
      <Typography>(Youtubeの動画もかんたんに貼れるっぽい))</Typography>
    </Box>
    {/*
      <Box># このProjectのやることリスト</Box>
      <Box> - 情報を埋める</Box>
      <Box> - AWS S3まわり設定してアップロード</Box>
      <Box> - スタイルをそれっぽくする</Box>
      <Box> - CI/CD整備して簡単に更新できるようにする</Box>
    */}
  </>
);
