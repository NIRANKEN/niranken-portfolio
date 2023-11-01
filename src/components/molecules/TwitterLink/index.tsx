import React from 'react';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

type TwitterLinkProps = {
  title: string;
  linkUrl: string;
  explanation: string;
};

export const TwitterLink: React.FC<TwitterLinkProps> = ({
  linkUrl,
  explanation,
}) => (
  <Card sx={{ maxWidth: 256 }}>
    <CardActionArea href={linkUrl} target="_blank">
      <Box component="div" display="flex" alignItems="center" justifyContent="center">
        <CardMedia
          component="img"
          image="/static/images/links/Twitter social icons - circle - blue.png"
          alt="youtube"
          sx={{
            mt: 4,
            height: 64,
            width: 64,
          }}
        />
      </Box>
      <CardContent>
        <Typography gutterBottom component="div">
          <Box component="div" whiteSpace="pre-line">{explanation}</Box>
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);
