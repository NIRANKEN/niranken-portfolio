import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { RootState } from '.';
import { initialState as workInitState } from '../ducks/works';
import { initialState as skillInitState } from '../ducks/skills';
import { initialState as appealInitState } from '../ducks/appeals';
import { initialState as aboutInitState } from '../ducks/about';

export const createInitialRootState = (
  withState: Partial<RootState>
): RootState => ({
  works: {
    ...workInitState,
    ...withState.works,
  },
  skills: {
    ...skillInitState,
    ...withState.skills,
  },
  appeals: {
    ...appealInitState,
    ...withState.appeals,
  },
  about: {
    ...aboutInitState,
    ...withState.about,
  },
});

export const mockStore = (withState: Partial<RootState>) =>
  configureMockStore<RootState, {}>([thunk])(createInitialRootState(withState));
