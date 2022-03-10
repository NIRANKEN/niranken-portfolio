import { configureStore } from '@reduxjs/toolkit';
import { reducer as notifications } from 'ducks/notifications'

export const store = configureStore({
  reducer: {
    notifications
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
