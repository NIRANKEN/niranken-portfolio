import React from 'react';
import { PageTitle } from 'components/molecules/PageTitle';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';

export const Home: React.FC<{}> = () => {
  return (
    <>
      <PageTitle
        title="ホーム"
        explanation={`にらんけんのPlaygroundスペースです。
      ポートフォリオ置いてます。`}
      />
      <Box sx={{ width: { xs: 320, sm: 480, md: 640, lg: 960 } }}>
        <Card>
          <CardMedia
            data-testid="asciiqualium-gif"
            component="img"
            image="/static/images/asciiqualium.gif"
            sx={{
              p: 1,
              m: 1,
            }}
          />
        </Card>
      </Box>
    </>
  );
};
