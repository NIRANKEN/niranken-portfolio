import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

export const SimpleBackdrop = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleToggle}>
        Show backdrop
      </Button>
      <Backdrop open={open} onClick={handleClose} sx={{
        zIndex: theme => theme.zIndex.drawer + 1,
        color: '#fff',
      }}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}