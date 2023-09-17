import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { CircularProgress } from 'components/atoms/CircularProgress';
import { Header } from 'components/molecules/Header';
import { Work } from 'ducks/works';
import React from 'react';

type WorksProps = {
  works: Work[];
  personalWorks: Work[];
  isLoading: () => boolean;
};

// ここでは実際に実施したこと、を書いていく
// TODO: こう書いて、相手方に手を動かすレベルくらいのイメージつくかどうか。
// TODO: 物理の研究 != Webアプリケーション開発者だよね。
// TODO: skillsまで書いて、詳細はアコーディオンにする？それともskillsはアコーディオン？やダイアログ？あとは、Stringカンマ区切りじゃなくてEnumリストみたいな形にするか。
export const Works: React.FC<WorksProps> = ({
  works,
  personalWorks,
  isLoading,
}: WorksProps) => {
  return (
    <>
      <Header
        iconName="works1"
        title="Webアプリケーション開発者として(正社員/フリーランス)"
        explanation=""
      />

      {isLoading() ? (
        <CircularProgress />
      ) : (
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: { xs: 320, sm: 480, md: 650 } }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                {/* TODO: カテゴリでの抽出や日時ソートをつけたい想定 */}
                <TableCell align="left">カテゴリ</TableCell>
                <TableCell align="left">仕事内容</TableCell>
                <TableCell align="left">詳細</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {works.map((row) => (
                <TableRow
                  key={row.ord}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left">{row.category}</TableCell>
                  <TableCell align="left">{row.work}</TableCell>
                  <TableCell align="left">
                    <Box whiteSpace="pre-line">{row.detail}</Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* TODO: works1, works2を別々のコンポーネントで分ける works1とworks2で共通のものは共通化する*/}
      <Box mt={8} mb={8}>
        <Header iconName="works2" title="個人的に作ったもの" explanation="" />
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: { xs: 320, sm: 480, md: 650 } }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="left">カテゴリ</TableCell>
                <TableCell align="left">つくったもの</TableCell>
                <TableCell align="left">詳細</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {personalWorks.map((row) => (
                <TableRow
                  key={row.ord}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left">{row.category}</TableCell>
                  <TableCell align="left">
                    {row.linkUrl ? (
                      <Tooltip title={row.linkUrl} placement="top" arrow={true}>
                        <Link
                          href={row.linkUrl}
                          rel="noopener noreferrer"
                          target="_brank"
                        >
                          {row.work}
                        </Link>
                      </Tooltip>
                    ) : (
                      <Typography>{row.work}</Typography>
                    )}
                  </TableCell>
                  <TableCell align="left">
                    <Box whiteSpace="pre-line">{row.detail}</Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};
