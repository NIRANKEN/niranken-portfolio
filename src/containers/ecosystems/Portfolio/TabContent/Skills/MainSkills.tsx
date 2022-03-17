import Grid from '@mui/material/Grid';
import { Header } from 'components/molecules/Header';
import React from 'react';
import { Skill } from './Skill';

export const MainSkills = () => (
  <>
    <Header title={'3つのアピールポイント'} explanation={''} />
    <Grid container direction='column' spacing={2}>
      <Grid item>
        <Skill 
          appeal={'1.Java6~8 + SpringFrameworkで経験積んできました。'}
          detail={'アピール詳細'}
        />
      </Grid>
      <Grid item>
        <Skill
          appeal={'2.CI/CDの構築や、CUIでのLinuxコマンドを使った操作が得意です'}
          detail={'こういうことやってきた・できるよ・アピールの詳細'}
        />
      </Grid>
      <Grid item>
        {/* 研究室時代のこれいる？要検討 */}
        <Skill
          appeal={'3.研究室時代はこんなプログラム書いてました、を書く'}
          detail={'アピール詳細'}
        />
      </Grid>
    </Grid>



  </>
);