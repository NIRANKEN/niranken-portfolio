import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';
import Face from '@mui/icons-material/Face';
import Contacts from '@mui/icons-material/Contacts';
import CampaignIcon from '@mui/icons-material/Campaign';
import NotesIcon from '@mui/icons-material/Notes';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';

type HeaderProps = {
  iconName?: string;
  title: string;
  explanation: string;
};

export const Header: React.FC<HeaderProps> = ({
  iconName,
  title,
  explanation,
}: HeaderProps) => {
  return (
    <Box mt={2}>
      <Typography component="div">
        <Box display="flex" alignItems="center">
          {iconName ? mapping[iconName] : <></>}
          <Box data-testid="title-box" ml={1} fontSize="h4.fontSize" fontWeight="fontWeightBold">
            {title}
          </Box>
        </Box>
        <Box mt={4} whiteSpace="pre-line">{explanation}</Box>
      </Typography>
    </Box>
  );
};

// TODO: いちいち同じもの(sx)を定義するのはよろしくないので、sx渡すようにしたい
const mapping: { [id: string]: JSX.Element } = {
  about: <Face data-testid='about-icon' sx={{ fontSize: 'h4.fontSize' }} />,
  works1: <PeopleIcon data-testid='works1-icon' sx={{ fontSize: 'h4.fontSize' }} />,
  works2: <PersonIcon data-testid='works2-icon' sx={{ fontSize: 'h4.fontSize' }} />,
  appeals: <CampaignIcon data-testid='appeals-icon' sx={{ fontSize: 'h4.fontSize' }} />,
  skills: <NotesIcon data-testid='skills-icon' sx={{ fontSize: 'h4.fontSize' }} />, 
  contact: <Contacts data-testid='contact-icon' sx={{ fontSize: 'h4.fontSize' }} />,
}