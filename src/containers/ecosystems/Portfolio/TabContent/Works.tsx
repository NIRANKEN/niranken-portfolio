import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { CircularProgress } from 'components/atoms/CircularProgress';
import { Header } from 'components/molecules/Header';
import { operations, selectors } from 'ducks/works';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'store';

// ここでは実際に実施したこと、を書いていく
// TODO: こう書いて、相手方に手を動かすレベルくらいのイメージつくかどうか。
// TODO: 物理の研究 != Webアプリケーション開発者だよね。
// TODO: skillsまで書いて、詳細はアコーディオンにする？それともskillsはアコーディオン？やダイアログ？あとは、Stringカンマ区切りじゃなくてEnumリストみたいな形にするか。
export const Works: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const works = useSelector(selectors.works);
  const readAllWorksResult = useSelector(selectors.readAllResult);

  useEffect(() => {
    if (!readAllWorksResult.status) {
      dispatch(operations.readAll());
    }
  }, [dispatch, readAllWorksResult.status]);

  const isLoading = () =>
    !readAllWorksResult.status || readAllWorksResult.status === 'pending';

  return (
    <>
      <Header
        iconName="works"
        title="人事さま向けWebアプリケーション開発者時代"
        explanation=""
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {/* TODO: カテゴリでの抽出や日時ソートをつけたい想定 */}
              <TableCell align="left">カテゴリ</TableCell>
              <TableCell align="left">仕事内容</TableCell>
              <TableCell align="left">詳細</TableCell>
            </TableRow>
          </TableHead>
          {isLoading() ? (
            // TODO: CircularProgressを真ん中に配置する
            <CircularProgress />
          ) : (
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
          )}
        </Table>
      </TableContainer>
    </>
  );
};
