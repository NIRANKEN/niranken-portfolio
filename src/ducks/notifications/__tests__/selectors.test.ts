import { selectors } from '../selectors';
import { createInitialRootState } from 'store/__utils__';
import { Notification } from '../Notification';

describe('notifications', () => {
  const notification1: Notification = {
    id: 'dummy-id',
		content: 'HPが更新されました',
		writtenBy: 'NIRANKEN',
		writtenAt: '2021-08-01',
  };
  describe('selector', () => {
    const state = createInitialRootState({
      notifications: {
        readAll: {
          status: 'rejected',
          error: { message: 'readAll' },
        },
        read: {
          status: 'rejected',
          error: { message: 'read' },
        },
        entities: {
          id1: notification1,
        },
        ids: ['id1'],
      },
    });
    describe('readAllResult', () => {
      it('should return readResult', () => {
        const result = selectors.readAllResult(state);
        expect(result).toEqual({
          status: 'rejected',
          error: { message: 'readAll' },
        });
      });
    });
    describe('readResult', () => {
      it('should return readResult', () => {
        const result = selectors.readResult(state);
        expect(result).toEqual({
          status: 'rejected',
          error: { message: 'read' },
        });
      });
    });
    describe('notification', () => {
      it('should return notification', () => {
        const notification = selectors.notification('id1')(state);
        expect(notification).toEqual(notification1);
      });
    });
  });
});
