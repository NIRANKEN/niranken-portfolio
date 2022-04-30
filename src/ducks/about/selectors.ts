import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { entityAdapter, AboutContentState } from './reducers';

const featureStateSelector = (state: RootState): AboutContentState => state.about;
const readResult = createSelector(
  featureStateSelector,
  (state) => state.read
);
const { selectById } = entityAdapter.getSelectors();
const about = (id: string) =>
  createSelector(featureStateSelector, (state) => selectById(state, id));

export const selectors = {
  readResult,
  about,
};
