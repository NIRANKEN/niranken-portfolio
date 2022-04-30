import * as service from '../service';
import { Skill } from '../Skill';
import { actions } from '../actions';

jest.mock('../service', () => ({
	readAll: jest.fn(),
  read: jest.fn(),
}));

describe('skills', () => {
  const mockedDispatch = jest.fn();
  const mockedGetState = jest.fn();
  const mockedReadAll = service.readAll as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe('actions', () => {
		describe('readAll', () => {
      it('should return Information', async () => {
        const json: Skill[] = [];
        mockedReadAll.mockResolvedValueOnce({
          status: 200,
          json: () => json,
        });
        const action = actions.readAll();
        const { payload, type } = await action(
          mockedDispatch,
          mockedGetState,
          undefined
        );
        expect(payload).toEqual(json);
        expect(type).toEqual('skills/readAll/fulfilled');
      });
      it('should throw error', async () => {
        const message = 'Forbidden';
        mockedReadAll.mockResolvedValueOnce({
          status: 403,
          statusText: message,
        });
        const action = actions.readAll();
        const { payload, type } = await action(
          mockedDispatch,
          mockedGetState,
          undefined
        );
        expect(payload).toEqual({
          message,
        });
        expect(type).toEqual('skills/readAll/rejected');
      });
		});
  });
});
