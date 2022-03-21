import * as service from '../service';
import { Work } from '../Work';
import { actions } from '../actions';

jest.mock('../service', () => ({
	readAll: jest.fn(),
  read: jest.fn(),
}));

describe('works', () => {
  const mockedDispatch = jest.fn();
  const mockedGetState = jest.fn();
  const mockedReadAll = service.readAll as jest.Mock;
  const mockedRead = service.read as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe('actions', () => {
		describe('readAll', () => {
      it('should return Information', async () => {
        const json: Work[] = [];
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
        expect(type).toEqual('works/readAll/fulfilled');
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
        expect(type).toEqual('works/readAll/rejected');
      });
		});
    describe('read', () => {
			const notificationId = 'dummy-id';
      it('should return Information', async () => {
        const json: Work[] = [];
        mockedRead.mockResolvedValueOnce({
          status: 200,
          json: () => json,
        });
        const action = actions.read(notificationId);
        const { payload, type } = await action(
          mockedDispatch,
          mockedGetState,
          undefined
        );
        expect(payload).toEqual(json);
        expect(type).toEqual('works/read/fulfilled');
      });
      it('should throw error', async () => {
        const message = 'Forbidden';
        mockedRead.mockResolvedValueOnce({
          status: 403,
          statusText: message,
        });
        const action = actions.read(notificationId);
        const { payload, type } = await action(
          mockedDispatch,
          mockedGetState,
          undefined
        );
        expect(payload).toEqual({
          message,
        });
        expect(type).toEqual('works/read/rejected');
      });
    });
  });
});
