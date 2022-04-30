import {
  createEntityAdapter,
  createReducer,
} from '@reduxjs/toolkit';
import { actions } from './actions';
import { initialRequestResult } from '../../lib/RequestResult';
import { AppealContent } from './AppealContent';

export const entityAdapter = createEntityAdapter<AppealContent>();

export const initialState = entityAdapter.getInitialState({
  readAll: initialRequestResult,
});

export type AppealContentsState = typeof initialState;

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
      return entityAdapter.setAll<AppealContentsState>(
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