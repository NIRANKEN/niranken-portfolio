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
    <Box component="div" mt={2}>
      <Typography component="div">
        <Box component="div"
          data-testid="title-box"
          fontWeight="fontWeightBold"
          fontSize="h4.fontSize"
        >
          {title}
        </Box>
        <Box component="div" mt={4}>{explanation}</Box>
      </Typography>
    </Box>
  );
};
