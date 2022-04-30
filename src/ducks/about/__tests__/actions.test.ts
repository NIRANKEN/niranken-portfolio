import * as service from '../service';
import { AboutContent } from '../AboutContent';
import { actions } from '../actions';

jest.mock('../service', () => ({
	readAll: jest.fn(),
  read: jest.fn(),
}));

describe('about', () => {
  const mockedDispatch = jest.fn();
  const mockedGetState = jest.fn();
  const mockedRead = service.read as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe('actions', () => {
		describe('read', () => {
      it('should return Information', async () => {
        const json: AboutContent[] = [];
        mockedRead.mockResolvedValueOnce({
          status: 200,
          json: () => json,
        });
        const action = actions.read();
        const { payload, type } = await action(
          mockedDispatch,
          mockedGetState,
          undefined
        );
        expect(payload).toEqual(json);
        expect(type).toEqual('about/read/fulfilled');
      });
      it('should throw error', async () => {
        const message = 'Forbidden';
        mockedRead.mockResolvedValueOnce({
          status: 403,
          statusText: message,
        });
        const action = actions.read();
        const { payload, type } = await action(
          mockedDispatch,
          mockedGetState,
          undefined
        );
        expect(payload).toEqual({
          message,
        });
        expect(type).toEqual('about/read/rejected');
      });
		});
  });
});
