import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { RootState } from '.';
import { initialState as workInitState } from '../ducks/works';

export const createInitialRootState = (
  withState: Partial<RootState>
): RootState => ({
  works: {
    ...workInitState,
    ...withState.works,
  },
});

export const mockStore = (withState: Partial<RootState>) =>
  configureMockStore<RootState, {}>([thunk])(createInitialRootState(withState));
