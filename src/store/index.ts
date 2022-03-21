import { configureStore } from '@reduxjs/toolkit';
import { reducer as works } from 'ducks/works'

export const store = configureStore({
  reducer: {
    works,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
