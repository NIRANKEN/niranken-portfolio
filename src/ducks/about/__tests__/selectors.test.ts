import { selectors } from '../selectors';
import { createInitialRootState } from 'store/__utils__';
import { AboutContent } from '../AboutContent';

describe('about', () => {
  const about1: AboutContent = {
    id: 'id1',
    selfIntroduction: 'dummySelfIntroduction',
  };
  describe('selector', () => {
    const state = createInitialRootState({
      about: {
        read: {
          status: 'rejected',
          error: { message: 'read' },
        },
        entities: {
          id1: about1,
        },
        ids: ['id1'],
      },
    });
    describe('readAllResult', () => {
      it('should return readResult', () => {
        const result = selectors.readResult(state);
        expect(result).toEqual({
          status: 'rejected',
          error: { message: 'read' },
        });
      });
    });
    describe('about', () => {
      it('should return about', () => {
        const about = selectors.about('id1')(state);
        expect(about).toEqual(about1);
      });
    });
  });
});
