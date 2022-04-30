import { selectors } from '../selectors';
import { createInitialRootState } from 'store/__utils__';
import { AppealContent } from '../AppealContent';

describe('appeals', () => {
  const appeal1: AppealContent = {
    id: 'dummyId',
    appeal: 'dummyAppealTitle',
    detail: 'dummyAppealDetail',
    imagePath: '/hoge/fuga',
    imageHeight: '256',
    imageExplanation: 'dummyImageExplanation',
  };
  describe('selector', () => {
    const state = createInitialRootState({
      appeals: {
        readAll: {
          status: 'rejected',
          error: { message: 'readAll' },
        },
        entities: {
          id1: appeal1,
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
    describe('appeal', () => {
      it('should return appeal', () => {
        const appeal = selectors.appeal('id1')(state);
        expect(appeal).toEqual(appeal1);
      });
    });
  });
});
