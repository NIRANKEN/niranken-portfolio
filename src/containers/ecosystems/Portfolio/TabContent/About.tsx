import { Typography } from '@mui/material';
import { Header } from 'components/molecules/Header';
import React from 'react';

export const About = () => (
  <>
    {/* 自分がどういう人間(?)なのかを伝える */}
    {/* 
      * エンジニア歴 != プログラム書いてきた歴。
    */}
    <Header title='自己紹介・価値観・趣味' explanation='こういう人間なんすよ、好き={A, B, C} 嫌い={D, E, F}' />
    <Typography>
      色々手を付けます。
    </Typography>
    <Typography>
      開発しにくい、ストレス溜まる環境で開発し続けることに疑問を投げかけながら、開発環境やCI/CDの改善にも目をつけて日々開発に勤しんでおります。
    </Typography>
    <Typography>
      だって、不便な環境から良い製品や良い機能は創造されないと思うから。
    </Typography>
    {/*
      <Box># このProjectのやることリスト</Box>
      <Box> - 情報を埋める</Box>
      <Box> - AWS S3まわり設定してアップロード</Box>
      <Box> - スタイルをそれっぽくする</Box>
      <Box> - CI/CD整備して簡単に更新できるようにする</Box>
    */}
  </>
);