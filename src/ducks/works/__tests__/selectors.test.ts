import { selectors } from '../selectors';
import { createInitialRootState } from 'store/__utils__';
import { Work } from '../Work';

describe('works', () => {
  const work1: Work = {
    id: 'dummy-id',
    ord: 1,
    category: 'dummy-category',
    work: 'dummy-work',
    detail: 'dummy-detail',
		writtenAt: '2021-08-01',
		writtenBy: 'NIRANKEN',
  };
  describe('selector', () => {
    const state = createInitialRootState({
      works: {
        readAll: {
          status: 'rejected',
          error: { message: 'readAll' },
        },
        read: {
          status: 'rejected',
          error: { message: 'read' },
        },
        entities: {
          id1: work1,
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
    describe('work', () => {
      it('should return work', () => {
        const work = selectors.work('id1')(state);
        expect(work).toEqual(work1);
      });
    });
  });
});
