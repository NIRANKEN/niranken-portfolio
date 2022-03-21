import Grid from '@mui/material/Grid';
import { Header } from 'components/molecules/Header';
import React from 'react';
import { Appeal } from './Appeal';

// TODO: 互い違いで段々にするのもおもろいかも
export const Appeals = () => (
  <>
    <Header iconName='appeals' title='3つのスキルアピール' explanation='' />
    <Grid container direction='column' spacing={2}>
      <Grid item>
        <Appeal 
          appeal={'1. Java6~8 + SpringFrameworkを直近よく使ってました'}
          detail={`Javaであれば、ある程度すぐに戦力として活躍できるかなと思います。
          なにかスキル証明できるものを貼っておく`}
          imagePath='/static/images/haribote.png'
          imageHeight='240'
        />
      </Grid>
      <Grid item>
        <Appeal
          appeal={'2. CI/CDの構築や、CUIでのLinuxコマンドを使った操作が得意です'}
          detail={`3年前からJenkinsオジサンと友達です。最近GitLab-CIにも手を付けてます。
          単調作業が嫌いなので、何かとgrep/sed/sortなどを組み合わせてスクリプト書いて対応することが多いです。
          ArchLinuxのサーバーを趣味で立てたりしているので、GUIの無い状況に慣れてます。`}
          imagePath='/static/images/haribote.png'
          imageHeight='240'
        />
      </Grid>
      <Grid item>
        <Appeal
          appeal={'3. 積極的に知らないことを勉強してコミットします！'}
          detail={`研究室時代に、C++、bash、Qtを独学して、物理のシミュレーション研究していました。
          知らないことにチャレンジして勉強することが好きなので、
          目的達成のために必要なことを自主的にキャッチアップしつつ成果出していきます。`}
          imagePath='/static/images/jamming_qt.png'
          imageHeight='480'
        />
      </Grid>
    </Grid>
  </>
);