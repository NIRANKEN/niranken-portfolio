import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Face from '@mui/icons-material/Face';
import Contacts from '@mui/icons-material/Contacts';
import CampaignIcon from '@mui/icons-material/Campaign';
import NotesIcon from '@mui/icons-material/Notes';

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
  works: <PermIdentityIcon sx={{ fontSize: 'h4.fontSize' }} />,
  skills: <CampaignIcon sx={{ fontSize: 'h4.fontSize' }} />,
  otherSkills: <NotesIcon sx={{ fontSize: 'h4.fontSize' }} />, 
  contact: <Contacts sx={{ fontSize: 'h4.fontSize' }} />,
}