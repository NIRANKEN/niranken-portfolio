import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { entityAdapter, WorksState } from './reducers';

const featureStateSelector = (state: RootState): WorksState => state.works;
const readAllResult = createSelector(
  featureStateSelector,
  (state) => state.readAll
);
const readResult = createSelector(featureStateSelector, (state) => state.read);
const { selectAll, selectById } = entityAdapter.getSelectors();
const works = createSelector(featureStateSelector, selectAll);
const work = (id: string) =>
  createSelector(featureStateSelector, (state) => selectById(state, id));
export const selectors = {
  readAllResult,
  readResult,
  works,
  work,
};
