import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';

type SkillProps = {
  appeal: string;
  detail: string;
  // gifResource: object;
};


export const Skill: React.FC<SkillProps> = ({
  appeal,
  detail,
}: SkillProps) => (
  <>
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Box mt={2}>
          <Typography component="div">
            <Box fontWeight="fontWeightBold" fontSize="h6.fontSize">
              {appeal}
            </Box>
            <Box mt={4}>{detail}</Box>
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6}>
        {/* gifとか写真とか置けるスペースつくる？ */}
        <Card>
          <CardContent>
            <Typography>ここにgifとか説明キャプチャを置く</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </>
);