import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Header } from 'components/molecules/Header';
import React from 'react';

export const About = () => (
  <>
    <Header iconName='about' title='自己紹介・価値観・趣味' explanation='' />
    <Box mt={2}>
      <Grid container direction='row' spacing={2}>
        <Grid item xs={3}>
          <Avatar alt='にらんけん' src='/static/images/profile.png' sx={{
            height: '128px',
            width: '128px',
          }}/>
        </Grid>
        <Grid item xs={9}>
          <Box whiteSpace='pre-line'>
            <Typography>
              {`こんにちは、にらんけんです。ここで自由に自己紹介。
              こういう人間なんすよ、を説明する。
              `}
            </Typography>
          </Box>
        </Grid>
      </Grid>
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