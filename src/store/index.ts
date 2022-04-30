import { configureStore } from '@reduxjs/toolkit';
import { reducer as works } from 'ducks/works'
import { reducer as skills } from 'ducks/skills'
import { reducer as appeals } from 'ducks/appeals'
import { reducer as about } from 'ducks/about'

export const store = configureStore({
  reducer: {
    works,
    skills,
    appeals,
    about,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
