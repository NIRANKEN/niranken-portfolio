import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import { MainSkills } from './MainSkills';
import { SubSkills } from './SubSkills';

export const Skills = () => (
  <>
    {/* <Box>ここは、自分雇ったらこういうことできまっせ！を伝えるところ。</Box> 
    <Box>アピールポイント3つくらい + その他の構成で。</Box>
    <Box>gifとかつくる？</Box> */}
    <Grid container direction='column' spacing={2}>
      <Grid item>
        <Box m={1}>
          <MainSkills />
        </Box>
      </Grid>
      <Grid item>
        <Box m={1}>
          <SubSkills />
        </Box>
      </Grid>
    </Grid>
  </>
);