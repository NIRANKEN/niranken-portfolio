import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Header } from 'components/molecules/Header';
import React from 'react';

type TableRowType = {
  ord: number;
  period: string;
  work: string;
  skills: string;
  detail: string;
}

const rows: TableRowType[] = [
  {
    ord: 1,
    period: '研究室時代(B4~M2) (3years)',
    work: '物理のシミュレーション研究',
    skills: '',
    detail: '物理のシミュレーション研究のプログラム書いてたよ(C++, bash, Qt5), アルバイトでPython3とNodeJS'
  },
  {
    ord: 2,
    period: 'YYYY/MM - YYYY/MM(1years)',
    work: 'Webアプリケーション製品の保守開発',
    skills: 'Java6/8, SpringFramework, jsp, hibernate, javaScript, Sass, vm, Oracle, Jenkins, bash, Windowsバッチ, Python3, NodeJS',
    detail: 'Webアプリ製品の、不具合修正、機能改善、お問い合わせ回答したり、お客様環境に入って緊急トラブル解消したり、ビルドデプロイの改修したり・・・'
  },
  {
    ord: 3,
    period: 'YYYY/MM - YYYY/MM(10months)',
    work: 'Webアプリケーション製品の新機能開発',
    skills: 'Java6/8, SpringFramework, javaScript, Sass, vm, Oracle, NodeJS',
    detail: 'Webアプリ製品の新規機能(要詳細)をつけた。'
  },
  {
    ord: 4,
    period: 'YYYY/MM - YYYY/MM(7months)',
    work: 'MicroServiceApplication(MSA)の開発',
    skills: 'フロント: React, Redux, Typescript, Material-UI バックエンド: Typescript, AWSLambda, AuroraDB(PostgreSQL), NodeJS,...',
    detail: ''
  },
  {
    ord: 20,
    period: 'YYYY/MM - YYYY/MM(1month)',
    work: 'JUnitの導入',
    skills: 'Java6/8, JUnit, SpringFramework, Mockito, GitLab-CI, Docker',
    detail: 'ユニットテストを実施していないWebアプリ製品に、プレマージでのテスト実行などを含むユニットテストの実施基盤を導入しました。'
  },
  {
    ord: 21,
    period: 'YYYY/MM - YYYY/MM(5months)',
    work: '',
    skills: 'Java6/8, SpringFramework, javaScript, Sass, vm, Oracle, NodeJS',
    detail: ''
  },
].sort((w1, w2) => w2.ord - w1.ord); // 期間でソート？スキルで絞り込み？とかできたほうがいいかも。

// ここでは実際に実施したこと、を書いていく
// TODO: こう書いて、相手方に手を動かすレベルくらいのイメージつくかどうか。
export const Works = () => (
  <>
    <Header title='Webアプリケーション開発者' explanation='' /> 
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* TODO: 期間のソートをつけたい */}
            <TableCell>期間</TableCell>
            <TableCell align="left">仕事内容</TableCell>
            <TableCell align="left">詳細</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.ord}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.period}
              </TableCell>
              <TableCell align="left">{row.work}</TableCell>
              <TableCell align="left">{row.detail}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>
);