import { selectors } from '../selectors';
import { createInitialRootState } from 'store/__utils__';
import { mockedContactMessageResult } from '../mockedContact';

describe('contact', () => {
  describe('selector', () => {
    const state = createInitialRootState({
      contact: {
        send: {
          status: 'rejected',
          error: { message: 'contact' },
        },
        entities: {
          id1: mockedContactMessageResult,
        },
        ids: ['id1'],
      },
    });
    describe('sendResult', () => {
      it('should return readResult', () => {
        const result = selectors.sendResult(state);
        expect(result).toEqual({
          status: 'rejected',
          error: { message: 'contact' },
        });
      });
    });
    describe('contact', () => {
      it('should return contact', () => {
        const contact = selectors.contact('id1')(state);
        expect(contact).toEqual(mockedContactMessageResult);
      });
    });
  });
});
