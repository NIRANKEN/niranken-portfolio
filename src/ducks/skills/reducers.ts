import {
  createEntityAdapter,
  createReducer,
} from '@reduxjs/toolkit';
import { actions } from './actions';
import { initialRequestResult } from '../../lib/RequestResult';
import { Skill } from './Skill';

export const entityAdapter = createEntityAdapter<Skill>({
  sortComparer: (a, b) => (a.ord - b.ord)
});

export const initialState = entityAdapter.getInitialState({
  readAll: initialRequestResult,
});

export type SkillsState = typeof initialState;

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.readAll.pending, (state) => ({
      ...state,
      readAll: {
        status: 'pending',
        error: undefined,
      },
    }))
    .addCase(actions.readAll.fulfilled, (state, { payload }) => {
      return entityAdapter.setAll<SkillsState>(
        {
          ...state,
          readAll: {
            ...state.readAll,
            status: 'fulfilled',
          },
        },
        payload
      );
    })
    .addCase(actions.readAll.rejected, (state, { payload, error }) => ({
      ...state,
      readAll: {
        status: 'rejected',
        error: payload || error,
      },
    }))
});