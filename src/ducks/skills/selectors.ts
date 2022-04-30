import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { entityAdapter, SkillsState } from './reducers';

const featureStateSelector = (state: RootState): SkillsState => state.skills;
const readAllResult = createSelector(
  featureStateSelector,
  (state) => state.readAll
);
const { selectAll, selectById } = entityAdapter.getSelectors();
const skills = createSelector(featureStateSelector, selectAll);
const skill = (id: string) =>
  createSelector(featureStateSelector, (state) => selectById(state, id));
export const selectors = {
  readAllResult,
  skills,
  skill,
};
