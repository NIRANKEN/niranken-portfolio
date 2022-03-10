import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';

type HeaderProps = {
  title: string;
  explanation: string;
};

export const Header: React.FC<HeaderProps> = ({
  title,
  explanation,
}: HeaderProps) => {
  return (
    <Box mt={2}>
      <Typography component="div">
        <Box fontWeight="fontWeightBold" fontSize="h4.fontSize">
          {title}
        </Box>
        <Box mt={4}>{explanation}</Box>
      </Typography>
    </Box>
  );
};
