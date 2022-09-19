import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { entityAdapter, SendMessageState } from './reducers';

const featureStateSelector = (state: RootState): SendMessageState => state.contact;
const sendResult = createSelector(
  featureStateSelector,
  (state) => state.send
);
const { selectById } = entityAdapter.getSelectors();
const contact = (id: string) =>
  createSelector(featureStateSelector, (state) => selectById(state, id));

export const selectors = {
  sendResult,
  contact,
};
