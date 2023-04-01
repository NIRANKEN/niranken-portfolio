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
import { Tweet } from 'components/organisms/Tweet';
import { AboutContent } from 'ducks/about/AboutContent';
import { ContactData, SendContactMessageResult } from 'ducks/contact';
import { afterRenderSlideChildren } from 'lib/afterRenderSlideChildren';
import { RequestStatus } from 'lib/RequestResult';
import React, { useState } from 'react';
import { Contact } from './Contact';

type AboutProps = {
  aboutContent: AboutContent | undefined;
  sentContact: SendContactMessageResult | undefined;
  isLoading: () => boolean;
  onClickSendMessage: (contactData: ContactData) => void;
  sendContactMessageResult: RequestStatus | undefined;
};

export const About: React.FC<AboutProps> = ({
  aboutContent,
  sentContact,
  isLoading,
  onClickSendMessage,
  sendContactMessageResult,
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
            <Grid item xs={12} sm={6} md={3}>
              <SnsLink
                snsMediaEnum="github"
                linkUrl={'https://github.com/NIRANKEN'}
                explanation={'趣味で書いたソース達'}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <SnsLink
                snsMediaEnum="qiita"
                linkUrl={'https://qiita.com/niranken'}
                explanation={'勉強したことの記事'}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <SnsLink
                snsMediaEnum="youtube"
                linkUrl={
                  'https://www.youtube.com/channel/UCMqUgV5eVyeiO1cWBn4sU-Q'
                }
                explanation={'勉強したことの動画'}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <SnsLink
                snsMediaEnum="twitter"
                linkUrl={'https://twitter.com/_NIRANKEN'}
                explanation={'つぶやきどころ'}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <SnsLink
                snsMediaEnum="note"
                linkUrl={'https://note.com/niranken'}
                explanation={'日記 / 雑記'}
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
              <Card sx={{ maxWidth: 1080, m: 1, p: 1 }}>
                <CardContent>
                  <Box whiteSpace="pre-line" textOverflow="auto">
                    {isLoading() ? (
                      <CircularProgress suffix="self-introduction" />
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
      </Box>
      <Grid container direction="row" spacing={2} mt={8} mb={8}>
        <Grid item md={6}>
          <Tweet />
        </Grid>
        <Grid item md={6}>
          <Contact
            sentContact={sentContact}
            sendMessageResult={sendContactMessageResult}
            onClickSendMessage={onClickSendMessage}
          />
        </Grid>
      </Grid>
    </>
  );
};
