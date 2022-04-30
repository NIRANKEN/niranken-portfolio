import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { entityAdapter, AppealContentsState } from './reducers';

const featureStateSelector = (state: RootState): AppealContentsState => state.appeals;
const readAllResult = createSelector(
  featureStateSelector,
  (state) => state.readAll
);
const { selectAll, selectById } = entityAdapter.getSelectors();
const appeals = createSelector(featureStateSelector, selectAll);
const appeal = (id: string) =>
  createSelector(featureStateSelector, (state) => selectById(state, id));
export const selectors = {
  readAllResult,
  appeals,
  appeal,
};
