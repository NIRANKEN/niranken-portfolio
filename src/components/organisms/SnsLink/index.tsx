import React from 'react';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { SxProps, Theme } from '@mui/material/styles';

export type SnsMediaEnum = 'youtube' | 'twitter' | 'qiita' | 'github' | 'note';

type SnsMediaMapValue = {
  imageSrc: string;
  sxProps: SxProps<Theme>;
};

const snsMediaMap: { [P in SnsMediaEnum]: SnsMediaMapValue } = {
  youtube: {
    imageSrc: '/static/images/links/youtube_social_icon_red.png',
    sxProps: {
      mt: 6,
      height: 45,
      width: 64,
    },
  },
  twitter: {
    imageSrc: '/static/images/links/Twitter social icons - circle - blue.png',
    sxProps: {
      mt: 4,
      height: 64,
      width: 64,
    },
  },
  qiita: {
    imageSrc: '/static/images/links/qiita-logo-background-color.png',
    sxProps: {
      mt: 7,
      height: 39,
      width: 103,
    },
  },
  github: {
    imageSrc: '/static/images/links/GitHub-Mark-64px.png',
    sxProps: {
      mt: 4,
      height: 64,
      width: 64,
    },
  },
  note: {
    imageSrc: '/static/images/links/note-square.png',
    sxProps: {
      mt: 7,
      height: 52,
      width: 156,
    },
  },
};

type SnsLinkProps = {
  snsMediaEnum: SnsMediaEnum;
  linkUrl: string;
  explanation: string;
};

export const SnsLink: React.FC<SnsLinkProps> = ({
  snsMediaEnum,
  linkUrl,
  explanation,
}) => {
  const snsMediaMapValue = snsMediaMap[snsMediaEnum];
  return (
    <Card sx={{ maxWidth: 256 }}>
      <CardActionArea href={linkUrl} target="_blank">
        <Box display="flex" alignItems="center" justifyContent="center">
          <CardMedia
            component="img"
            image={snsMediaMapValue.imageSrc}
            alt={snsMediaEnum}
            sx={snsMediaMapValue.sxProps}
          />
        </Box>
        <CardContent>
          <Typography gutterBottom component="div">
            <Box display="flex" alignItems="center" justifyContent="center">
              {explanation}
            </Box>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
