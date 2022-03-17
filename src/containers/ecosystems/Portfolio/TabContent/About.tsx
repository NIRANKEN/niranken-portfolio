import { Header } from 'components/molecules/Header';
import React from 'react';

export const About = () => (
  <>
    {/* 自分がどういう人間(?)なのかを伝える */}
    {/* 
      * エンジニア歴 != プログラム書いてきた歴。
    */}
    <Header title='自己紹介・価値観・趣味' explanation='こういう人間なんすよ、好き={A, B, C} 嫌い={D, E, F}' />
    {/*
      <Box># このProjectのやることリスト</Box>
      <Box> - 情報を埋める</Box>
      <Box> - AWS S3まわり設定してアップロード</Box>
      <Box> - スタイルをそれっぽくする</Box>
      <Box> - CI/CD整備して簡単に更新できるようにする</Box>
    */}
  </>
);