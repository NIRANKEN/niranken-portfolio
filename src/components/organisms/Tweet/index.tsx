import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CircularProgress } from 'components/atoms/CircularProgress';
import { Header } from 'components/molecules/Header';
import React from 'react';

type TweetProps = {};

export const Tweet: React.FC<TweetProps> = () => {
  React.useEffect(() => {
    const header = document.getElementsByTagName('head')[0] as HTMLElement;
    const scriptUrl = document.createElement('script');
    scriptUrl.type = 'text/javascript';
    scriptUrl.src = 'https://platform.twitter.com/widgets.js';
    scriptUrl.setAttribute('async', 'true');
    scriptUrl.setAttribute('charset', 'utf-8');
    header.appendChild(scriptUrl);
  }, []);

  return (
    <>
      <Header iconName="twitter" title="近況ついーと" explanation="" />
      <Box display="flex" alignItems="center">
        <Card
          sx={{
            maxHeight: 512,
            minWidth: 320,
            width: '100%',
            maxWidth: 1024,
            my: 1,
            mx: 1,
            p: 2,
            overflow: 'auto',
          }}
        >
          <CardContent>
            <Typography component="div">
              <Box display="flex" alignItems="center">
                <Box ml={1} fontSize="h6.fontSize" fontWeight="fontWeightBold">
                  {'ツイート内容'}
                </Box>
              </Box>
            </Typography>
            <a
              className="twitter-timeline"
              href="https://twitter.com/_NIRANKEN?ref_src=twsrc%5Etfw"
            >
              <CircularProgress />
            </a>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};
