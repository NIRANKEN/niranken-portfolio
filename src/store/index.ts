import { configureStore } from '@reduxjs/toolkit';
import { reducer as notifications } from 'ducks/notifications'
import { reducer as works } from 'ducks/works'

export const store = configureStore({
  reducer: {
    notifications,
    works,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
