import {
  createEntityAdapter,
  createReducer,
} from '@reduxjs/toolkit';
import { actions } from './actions';
import { initialRequestResult } from '../../lib/RequestResult';
import { AboutContent } from './AboutContent';

export const entityAdapter = createEntityAdapter<AboutContent>();

export const initialState = entityAdapter.getInitialState({
  read: initialRequestResult,
});

export type AboutContentState = typeof initialState;

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.read.pending, (state) => ({
      ...state,
      read: {
        status: 'pending',
        error: undefined,
      },
    }))
    .addCase(actions.read.fulfilled, (state, { payload }) => {
      return entityAdapter.setAll<AboutContentState>(
        {
          ...state,
          read: {
            ...state.read,
            status: 'fulfilled',
          },
        },
        [payload]
      );
    })
    .addCase(actions.read.rejected, (state, { payload, error }) => ({
      ...state,
      read: {
        status: 'rejected',
        error: payload || error,
      },
    }))
});