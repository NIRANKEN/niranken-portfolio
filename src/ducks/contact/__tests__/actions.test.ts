import * as service from '../service';
import { actions } from '../actions';
import {
  mockedContactData,
  mockedContactMessageResult,
} from '../mockedContact';
import { SendContactMessageResult } from '../ContactData';

jest.mock('../service', () => ({
  send: jest.fn(),
}));

describe('works', () => {
  const mockedDispatch = jest.fn();
  const mockedGetState = jest.fn();
  const mockedSend = service.send as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe('actions', () => {
    describe('send', () => {
      it('should return SendContactResult', async () => {
        const json: SendContactMessageResult = mockedContactMessageResult;
        mockedSend.mockResolvedValueOnce({
          status: 200,
          json: () => json,
        });
        const action = actions.send(mockedContactData);
        const { payload, type } = await action(
          mockedDispatch,
          mockedGetState,
          undefined
        );
        expect(payload).toEqual(json);
        expect(type).toEqual('contact/send/fulfilled');
      });
      it('should throw error', async () => {
        const message = 'Forbidden';
        mockedSend.mockResolvedValueOnce({
          status: 403,
          statusText: message,
        });
        const action = actions.send(mockedContactData);
        const { payload, type } = await action(
          mockedDispatch,
          mockedGetState,
          undefined
        );
        expect(payload).toEqual({
          message,
        });
        expect(type).toEqual('contact/send/rejected');
      });
    });
  });
});
