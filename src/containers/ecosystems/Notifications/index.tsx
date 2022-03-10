import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { operations, selectors } from 'ducks/notifications';
import { useDispatch, useSelector } from 'react-redux';
import { SimpleBackdrop } from 'components/molecules/Backdrop';
import { useEffect } from 'react';
import { AppDispatch } from 'store';
import { Header } from 'components/molecules/Header';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export const Notifications: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const notifications = useSelector(selectors.notifications);
  const readAllNotificationsResult = useSelector(selectors.readAllResult);

  useEffect(() => {
    if (!readAllNotificationsResult.status) {
      dispatch(operations.readAll());
    }
  }, [dispatch, readAllNotificationsResult.status]);

  const isLoading = () =>
    !readAllNotificationsResult.status ||
    readAllNotificationsResult.status === 'pending';

  return (
    <>
      <Header title="お知らせ" explanation="お知らせを表示します" />
      <Box mt={2}>
        <List component="nav" aria-label="notifications" sx={{backgroundColor: '#F5F5F5'}}>
          <ListItem>
            <ListItemText primary="お知らせ一覧(最新順)" />
          </ListItem>
          {isLoading() ? (
            <SimpleBackdrop />
          ) : 
            <Grid container spacing={2} p={2}>
              {notifications.map((notification) => (
                <Grid item key={notification.id} xs={3}>
                  <Card >
                    <CardContent>
                      <Box display="flex" justifyContent="center">
                        <Typography
                          variant="body1"
                          noWrap={true}
                        >
                          {notification.title}
                        </Typography>
                      </Box>
                      <Box display="flex" justifyContent="flex-end">
                          <Typography
                            variant="body2"
                            noWrap={true}                         
                          >
                            {notification.writtenAt}
                          </Typography>
                      </Box>
                      <Box px={2} mt={1}>
                        {notification.content}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          }
        </List>
      </Box>
    </>
  );
};
