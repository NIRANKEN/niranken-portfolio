import {
  createEntityAdapter,
  createReducer,
} from '@reduxjs/toolkit';
import { actions } from './actions';
import { initialRequestResult } from '../../lib/RequestResult';
import { Work } from './Work';

export const entityAdapter = createEntityAdapter<Work>({
  // selectId: (notification) => notification.idProp; // IDとなるプロパティを指定できます(デフォルト: id)
  // sortComparer: (a, b) => a.someNumber - b.someNumber, // 数値昇順
  // sortComparer: (a, b) => b.someNumber - a.someNumber, // 数値降順
  // sortComparer: (a, b) => a.writtenAt.localeCompare(b.writtenAt), // string昇順
  sortComparer: (a, b) => b.writtenAt.localeCompare(a.writtenAt), // string降順
});

/**
 * ここで初期状態の定義をします。
 */
export const initialState = entityAdapter.getInitialState({
  readAll: initialRequestResult,
  read: initialRequestResult,
});

export type WorksState = typeof initialState;

/**
 * ここに各アクション実行結果に基づいて、storeをどうやって更新するかについて記載します。
 * <action>実行中 ... <action>.pendingに入ります
 * <action>成功 ... <action>.fulfilledに入ります 
 * <action>失敗 ... <action>.rejectedに入ります
 */
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
      return entityAdapter.setAll<WorksState>(
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
    .addCase(actions.read.pending, (state) => ({
      ...state,
      readAll: {
        status: 'pending',
        error: undefined,
      },
    }))
    .addCase(actions.read.fulfilled, (state, { payload }) => {
      return entityAdapter.upsertOne<WorksState>(
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
    .addCase(actions.read.rejected, (state, { payload, error }) => ({
      ...state,
      readAll: {
        status: 'rejected',
        error: payload || error,
      },
    }))
});