import React from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { Home } from '../Home';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Portfolio } from '../Portfolio';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import { MenuType } from './MenuType';
import { MenuDrawer } from './MenuDrawer';

export const Main: React.FC = () => {
  const history = useHistory();
  const [title, setTitle] = React.useState<string>('');
  const [open, setOpen] = React.useState<boolean>(false);

  const topMenuItems: Array<MenuType> = [
    { id: 'home', name: 'HOME', Icon: HomeIcon, PageComponent: Home },
  ];
  const bottomMenuItems: Array<MenuType> = [
    {
      id: 'portfolio',
      name: 'ポートフォリオ',
      Icon: PeopleIcon,
      PageComponent: Portfolio,
    },
  ];

  // TODO: anyを適切なevent型に変更する
  const toggleDrawer = (openDrawer: boolean) => (event: any) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setOpen(openDrawer);
  };

  const onClickMenuItem = (id: string, name: string) => () => {
    setOpen(false);
    setTitle(name);
    history.push(`/${id}`);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          flexGrow: 1,
          height: 'auto',
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            aria-controls="simple-menu"
            onClick={toggleDrawer(!open)}
            sx={{ marginRight: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="main"
        id="main"
        sx={{
          flexGrow: 1,
          width: 'auto',
          height: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 8,
          paddingTop: 2,
          paddingRight: 4,
          paddingBottom: 2,
          paddingLeft: 2,
        }}
      >
        <MenuDrawer
          {...{
            open,
            topMenuItems,
            bottomMenuItems,
            handleCloseDrawer: toggleDrawer(false),
            handleClickMenuItem: onClickMenuItem,
          }}
        />
        <Switch>
          {[...topMenuItems, ...bottomMenuItems].map(
            ({ id, PageComponent }) => (
              <Route key={id} exact path={`/${id}`} component={PageComponent} />
            )
          )}
          <Redirect from="/*" to="/home" />
        </Switch>
      </Box>
    </>
  );
};
