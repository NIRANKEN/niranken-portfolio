import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { Header } from 'components/molecules/Header';
import React from 'react';

export const About = () => (
  <>
    <Header iconName="about" title="自己紹介・価値観" explanation="" />
    <Box mt={2}>
      <Grid container direction="row" spacing={2}>
        <Grid item xs={3}>
          <Tooltip title="こんにちは！">
            <Avatar
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
            <Typography>
              {`こんにちは、そのへんにいる一般エンジニア「にらんけん」です。
              普段はWebエンジニアとして働いています。
              プログラミング歴は独学(研究室時代)3年 + 社会人(Webエンジニア)4年で7年です。

              最近の興味ごとは「開発者の開発体験を良くすること」で、
              アプリケーション開発だけでなく、CI/CDや古くなった開発環境の改善などに力を入れてます。
              みかん箱の上で開発するのはストレスだ！(みかん箱であることに気づかないことも多い)といつも心で唱えてます。
              個人で開発してたら絶対に広い机や疲れにくい椅子を買うはずです。

              定期的なアウトプットの機会として、隔週でお遊びプログラムや勉強した内容を動画化する取り組みを始めており、
              #4として本ポートフォリオを作ってます。半分自己満足ですが、おかげで休日に時間をとって勉強できています。
              `}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box mt={8} display="flex" maxWidth={1080}>
        <CardMedia
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
