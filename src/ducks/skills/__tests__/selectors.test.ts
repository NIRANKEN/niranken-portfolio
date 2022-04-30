import { selectors } from '../selectors';
import { createInitialRootState } from 'store/__utils__';
import { Skill } from '../Skill';

describe('skills', () => {
  const skill1: Skill = {
    id: 'id1',
    title: 'dummyTitle',
    explanation: 'dummyExplanation',
    colorCode: '#FFFFFF',
    results: []
  };
  describe('selector', () => {
    const state = createInitialRootState({
      skills: {
        readAll: {
          status: 'rejected',
          error: { message: 'readAll' },
        },
        entities: {
          id1: skill1,
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
    describe('skill', () => {
      it('should return skill', () => {
        const skill = selectors.skill('id1')(state);
        expect(skill).toEqual(skill1);
      });
    });
  });
});
