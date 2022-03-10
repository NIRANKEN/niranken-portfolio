import {
  createSelector,
} from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { entityAdapter, NotificationsState } from './reducers';

const featureStateSelector = (state: RootState): NotificationsState =>
  state.notifications;
const readAllResult = createSelector(
  featureStateSelector,
  (state) => state.readAll
);
const readResult = createSelector(
  featureStateSelector,
  (state) => state.read
);
const { selectAll, selectById } = entityAdapter.getSelectors();
const notifications = createSelector(featureStateSelector, selectAll);
const notification = (id: string) =>
  createSelector(featureStateSelector, (state) => selectById(state, id));
;

export const selectors = {
  readAllResult,
  readResult,
  notifications,
  notification,
};