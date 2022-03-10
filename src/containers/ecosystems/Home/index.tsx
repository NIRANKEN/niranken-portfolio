import React from 'react';
import Box from '@mui/material/Box';
import { Header } from 'components/molecules/Header';

export const Home: React.FC<{}> = () => {
  return (
    <>
      <Box>
        <Header
          title="ホーム"
          explanation="ここに説明でも入れる"
        />
      </Box>
    </>
  );
};
