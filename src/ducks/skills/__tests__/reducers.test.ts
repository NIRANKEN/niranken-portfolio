import snapshotDiff from 'snapshot-diff';
import {
  SkillsState,
  initialState as skillsInitialState,
  reducer,
} from '../reducers';
import { actions } from '../actions';
import { Skill } from '../Skill';

describe('notifications', () => {
  const skill1: Skill = {
    id: 'dummyId',
    title: 'dummyTitle',
    explanation: 'dummyExplanation',
    colorCode: '#FFFFFF',
    results: [],
  };
  describe('reducer', () => {
    describe('readAll', () => {
      it('should set pending state', () => {
        const initialState: SkillsState = {
          ...skillsInitialState,
        };
        expect(
          snapshotDiff(
            initialState,
            reducer(initialState, actions.readAll.pending('requestId'))
          )
        ).toMatchInlineSnapshot(`
          "Snapshot Diff:
          - First value
          + Second value

            Object {
              \\"entities\\": Object {},
              \\"ids\\": Array [],
              \\"readAll\\": Object {
                \\"error\\": undefined,
          -     \\"status\\": undefined,
          +     \\"status\\": \\"pending\\",
              },
            }"
        `);
      });
      it('should set fulfilled state', () => {
        const initialState: SkillsState = {
          ...skillsInitialState,
        };
        const modifiedState = reducer(
          initialState,
          actions.readAll.fulfilled([skill1], 'requestId')
        );
        expect(snapshotDiff(initialState, modifiedState))
          .toMatchInlineSnapshot(`
          "Snapshot Diff:
          - First value
          + Second value

            Object {
          -   \\"entities\\": Object {},
          -   \\"ids\\": Array [],
          +   \\"entities\\": Object {
          +     \\"dummyId\\": Object {
          +       \\"colorCode\\": \\"#FFFFFF\\",
          +       \\"explanation\\": \\"dummyExplanation\\",
          +       \\"id\\": \\"dummyId\\",
          +       \\"results\\": Array [],
          +       \\"title\\": \\"dummyTitle\\",
          +     },
          +   },
          +   \\"ids\\": Array [
          +     \\"dummyId\\",
          +   ],
              \\"readAll\\": Object {
                \\"error\\": undefined,
          -     \\"status\\": undefined,
          +     \\"status\\": \\"fulfilled\\",
              },
            }"
        `);
      });
      it('should set rejected state', () => {
        const initialState: SkillsState = {
          ...skillsInitialState,
        };
        expect(
          snapshotDiff(
            initialState,
            reducer(
              initialState,
              actions.readAll.rejected(
                { name: 'name', message: 'message' },
                'requestId'
              )
            )
          )
        ).toMatchInlineSnapshot(`
          "Snapshot Diff:
          - First value
          + Second value

            Object {
              \\"entities\\": Object {},
              \\"ids\\": Array [],
              \\"readAll\\": Object {
          -     \\"error\\": undefined,
          -     \\"status\\": undefined,
          +     \\"error\\": Object {
          +       \\"message\\": \\"message\\",
          +       \\"name\\": \\"name\\",
          +     },
          +     \\"status\\": \\"rejected\\",
              },
            }"
        `);
      });
    });
  });
});
