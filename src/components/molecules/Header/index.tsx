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
          <Box ml={1} fontSize="h4.fontSize" fontWeight="fontWeightBold">
            {title}
          </Box>
        </Box>
        <Box mt={4} whiteSpace="pre-line">{explanation}</Box>
      </Typography>
    </Box>
  );
};

// TODO: いちいち定義するのはよろしくないので、sx渡すようにしたい
const mapping: { [id: string]: JSX.Element } = {
  about: <Face sx={{ fontSize: 'h4.fontSize' }} />,
  works1: <PeopleIcon sx={{ fontSize: 'h4.fontSize' }} />,
  works2: <PersonIcon sx={{ fontSize: 'h4.fontSize' }} />,
  appeals: <CampaignIcon sx={{ fontSize: 'h4.fontSize' }} />,
  skills: <NotesIcon sx={{ fontSize: 'h4.fontSize' }} />, 
  contact: <Contacts sx={{ fontSize: 'h4.fontSize' }} />,
}