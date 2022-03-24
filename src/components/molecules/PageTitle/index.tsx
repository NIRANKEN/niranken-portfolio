import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';

type PageTitleProps = {
  title: string;
  explanation: string;
};

export const PageTitle: React.FC<PageTitleProps> = ({
  title,
  explanation,
}: PageTitleProps) => {
  return (
    <Box mt={2}>
      <Typography component="div">
        <Box data-testid="title-box" fontWeight="fontWeightBold" fontSize="h3.fontSize">
          {title}
        </Box>
        <Box mt={4}>{explanation}</Box>
      </Typography>
    </Box>
  );
};
