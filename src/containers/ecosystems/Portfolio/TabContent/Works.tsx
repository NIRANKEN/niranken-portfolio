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
  category: string;
  work: string;
  skills: string;
  detail: string;
}

const rows: TableRowType[] = [
  {
    ord: 1,
    category: '独学',
    work: '物理のシミュレーション研究',
    skills: '',
    detail: '物理のシミュレーション研究のプログラム書いてたよ(C++, bash, Qt5), アルバイトでPython3とNodeJS'
  },
  {
    ord: 2,
    category: '保守開発',
    work: 'Webアプリケーション製品の保守開発',
    skills: 'フロント: javaScript, Sass, vm, jsp, css | バックエンド: Java6/8, SpringFramework, hibernate, SQL | インフラ: IHS, WAS, nginx, tomcat, Oracle, Ubuntu, CentOS',
    detail: 'Webアプリ製品の、不具合修正、機能改善、お問い合わせ回答したり、お客様環境に入って緊急トラブル解消したり、ビルドデプロイの改修したり・・・'
  },
  {
    ord: 3,
    category: '(既存基盤での)新規開発',
    work: 'Webアプリケーション製品の新機能開発',
    skills: 'フロント: javaScript, Sass, vm | バックエンド: Java6/8, SpringFramework, SQL | インフラ: IHS, WAS, nginx, tomcat, Oracle, Ubuntu, CentOS',
    detail: 'Webアプリ製品の新規機能(要詳細)をつけた。'
  },
  {
    ord: 4,
    category: '新規開発',
    work: 'MicroServiceApplication(MSA)の開発',
    skills: 'フロント: React, Redux, Typescript, Material-UI, Jest, Cypress | バックエンド: Typescript, PostgreSQL, NodeJS | インフラ: AWS(Lambda, S3, CodeBuild, AuroraDB)',
    detail: 'モダンな開発基盤を使ったアプリケーション開発で、主にフロント部分の実装をメインに携わりました。'
  },
  {
    ord: 20,
    category: '品質向上',
    work: 'JUnitの導入',
    skills: 'Java6/8, JUnit, SpringFramework, Mockito, GitLab-CI, Docker',
    detail: 'ユニットテストを実施していないWebアプリ製品に、プレマージでのテスト実行などを含むユニットテストの実施基盤とサンプルのユニットテストを導入しました。'
  },
  {
    ord: 21,
    category: 'CI/CD',
    work: 'CI/CD改善、保守',
    skills: 'Windowsバッチ, Jenkins, NodeJS, Bash, Docker, Groovy',
    detail: 'Windowsバッチで書かれた古のJenkinsビルドジョブの改修、パイプライン化、Jenkins agent(Docker)の導入を実施しました。'
  },
  {
    ord: 23,
    category: 'CI/CD',
    work: '',
    skills: 'Jenkins, Bash, Ansible, AWS EC2, AWS S3',
    detail: 'BashとAnsibleで書かれているデプロイジョブの保守、機能追加の実施'
  },
  {
    ord: 24,
    category: '開発環境改善?',
    work: 'オンプレサーバーへの自動更新パッチ適用ツールの開発',
    skills: 'Java7, Python3, Jenkins',
    detail: '作業者が現地のオンプレサーバー上の製品に、Windowバッチで更新パッチを適用しに行く -> 画面上から適用したいパッチを選ぶだけで更新できるようになった　のどこ担当したのかと内容を簡潔に書く'
  },
  {
    ord: 25,
    category: '開発環境改善',
    work: '',
    skills: '',
    detail: '最新のEclipseを使って開発できるように、開発環境構築手順や利用しているプラグイン(tomcat pluginのDevLoader)の修正'
  },
].sort((w1, w2) => w2.ord - w1.ord); // 期間でソート？スキルで絞り込み？とかできたほうがいいかも。

// ここでは実際に実施したこと、を書いていく
// TODO: こう書いて、相手方に手を動かすレベルくらいのイメージつくかどうか。
// TODO: 物理の研究 != Webアプリケーション開発者だよね。
// TODO: skillsまで書いて、詳細はアコーディオンにする？それともskillsはアコーディオン？やダイアログ？あとは、Stringカンマ区切りじゃなくてEnumリストみたいな形にするか。
export const Works = () => (
  <>
    <Header title='Webアプリケーション開発者' explanation='' /> 
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* TODO: カテゴリでの抽出やソートをつけたい */}
            <TableCell align="left">カテゴリ</TableCell>
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
              <TableCell align="left">{row.category}</TableCell>
              <TableCell align="left">{row.work}</TableCell>
              <TableCell align="left">{row.detail}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>
);