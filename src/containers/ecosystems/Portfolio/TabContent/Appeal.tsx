import { CardMedia } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { AppealContent } from 'ducks/appeals/AppealContent';
import React from 'react';

type AppealProps = {
  appealContent: AppealContent;
};

export const Appeal: React.FC<AppealProps> = ({
  appealContent,
}: AppealProps) => (
  <Box mt={1}>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={6}>
        <Box mt={2}>
          <Typography component="div">
            <Box fontWeight="fontWeightBold" fontSize="h6.fontSize">
              {appealContent.appeal}
            </Box>
            <Box mt={4} whiteSpace="pre-line">
              {appealContent.detail}
            </Box>
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        {/* gifとか写真とか置けるスペースつくる？ */}
        <Card>
          <CardContent>
            <Box whiteSpace="pre-line">
              <Typography>{`▼ ${appealContent.imageExplanation}`}</Typography>
            </Box>
          </CardContent>
          <CardMedia
            data-testid="appeals-image"
            component="img"
            image={appealContent.imagePath}
            height={appealContent.imageHeight}
            sx={{
              p: 1,
              m: 1,
            }}
          />
        </Card>
      </Grid>
    </Grid>
  </Box>
);
