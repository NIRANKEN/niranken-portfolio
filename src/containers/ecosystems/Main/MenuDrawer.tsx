import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { MenuType } from './MenuType';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

type MenuDrawerProps = {
  open: boolean;
  topMenuItems: Array<MenuType>;
  bottomMenuItems: Array<MenuType>;
  handleCloseDrawer: (event: any) => void;
  handleClickMenuItem: (id: string, name: string) => () => void;
};

export const MenuDrawer: React.FC<MenuDrawerProps> = ({
  open,
  topMenuItems,
  bottomMenuItems,
  handleCloseDrawer,
  handleClickMenuItem,
}: MenuDrawerProps) => {
  const MenuListItem = ({ id, name, Icon }: MenuType) => (
    <ListItem button key={id} onClick={handleClickMenuItem(id, name)}>
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={name} />
    </ListItem>
  );

  return (
    <Drawer anchor="left" open={open} onClose={handleCloseDrawer}>
      <Box
        sx={{
          width: 250,
          flexGrow: 1,
          marginTop: 8,
        }}
        role="presentation"
        onClick={handleCloseDrawer}
        onKeyDown={handleCloseDrawer}
      >
        <List>{topMenuItems.map((menuItem) => MenuListItem(menuItem))}</List>
        <Divider />
        <List>{bottomMenuItems.map((menuItem) => MenuListItem(menuItem))}</List>
      </Box>
    </Drawer>
  );
};
