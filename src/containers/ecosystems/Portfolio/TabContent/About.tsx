import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
// import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Slide from '@mui/material/Slide';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { CircularProgress } from 'components/atoms/CircularProgress';
import { Header } from 'components/molecules/Header';
import { SnsLink } from 'components/organisms/SnsLink';
import { AboutContent } from 'ducks/about/AboutContent';
import { afterRenderSlideChildren } from 'lib/afterRenderSlideChildren';
import React, { useState } from 'react';

type AboutProps = {
  aboutContent: AboutContent | undefined;
  isLoading: () => boolean;
};

export const About: React.FC<AboutProps> = ({
  aboutContent,
  isLoading,
}: AboutProps) => {
  const [isSnsCardRendered, setSnsCardRendered] = useState<boolean>(false);
  const [isAvatarRendered, setAvatarRendered] = useState<boolean>(false);
  return (
    <>
      <Box my={8}>
        <Slide
          direction="up"
          in={true}
          mountOnEnter
          unmountOnExit
          addEndListener={(_node, _done) =>
            afterRenderSlideChildren(() => setSnsCardRendered(true))
          }
        >
          <Grid container spacing={2}>
            <Grid item xs={6} sm={4} md={3}>
              <SnsLink
                snsMediaEnum="github"
                linkUrl={'https://github.com/NIRANKEN'}
                explanation={'趣味で書いたソース達'}
              />
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <SnsLink
                snsMediaEnum="qiita"
                linkUrl={'https://qiita.com/niranken'}
                explanation={'勉強したことの記事'}
              />
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <SnsLink
                snsMediaEnum="youtube"
                linkUrl={
                  'https://www.youtube.com/channel/UCMqUgV5eVyeiO1cWBn4sU-Q'
                }
                explanation={'勉強したことの動画'}
              />
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <SnsLink
                snsMediaEnum="twitter"
                linkUrl={'https://twitter.com/_NIRANKEN'}
                explanation={'つぶやきどころ'}
              />
            </Grid>
          </Grid>
        </Slide>
      </Box>
      <Divider />
      <Box mt={8}>
        <Header iconName="about" title="自己紹介・価値観" explanation="" />
      </Box>
      <Box mt={2}>
        <Grid container direction="row" spacing={2}>
          <Grid item md={3}>
            <Slide
              direction="up"
              in={isSnsCardRendered}
              mountOnEnter
              unmountOnExit
              addEndListener={(_node, _done) =>
                afterRenderSlideChildren(() => setAvatarRendered(true))
              }
            >
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
            </Slide>
          </Grid>
          <Grid item md={9}>
            <Slide
              direction="up"
              in={isAvatarRendered}
              mountOnEnter
              unmountOnExit
            >
              <Card>
                <CardContent>
                  <Box whiteSpace="pre-line">
                    {isLoading() ? (
                      <CircularProgress />
                    ) : (
                      <Typography data-testid="self-introduction">
                        {aboutContent
                          ? aboutContent.selfIntroduction
                          : '読み込み失敗'}
                      </Typography>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Slide>
          </Grid>
        </Grid>
        {/* <Box mt={8} display="flex" maxWidth={1080}>
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
      <Typography>(Youtubeの動画もかんたんに貼れるっぽい))</Typography> */}
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
};
