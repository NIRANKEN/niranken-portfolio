import {
  createEntityAdapter,
  createReducer,
} from '@reduxjs/toolkit';
import { actions } from './actions';
import { initialRequestResult } from '../../lib/RequestResult';
import { SendContactMessageResult } from './ContactData';

export const entityAdapter = createEntityAdapter<SendContactMessageResult>();

export const initialState = entityAdapter.getInitialState({
  send: initialRequestResult,
});

export type SendMessageState = typeof initialState;

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.send.pending, (state) => ({
      ...state,
      send: {
        status: 'pending',
        error: undefined,
      },
    }))
    .addCase(actions.send.fulfilled, (state, { payload }) => {
      return entityAdapter.setAll<SendMessageState>(
        {
          ...state,
          send: {
            ...state.send,
            status: 'fulfilled',
          },
        },
        [payload]
      );
    })
    .addCase(actions.send.rejected, (state, { payload, error }) => ({
      ...state,
      send: {
        status: 'rejected',
        error: payload || error,
      },
    }))
});