import snapshotDiff from 'snapshot-diff';
import {
  AboutContentState,
  initialState as aboutInitialState,
  reducer,
} from '../reducers';
import { actions } from '../actions';
import { AboutContent } from '../AboutContent';

describe('notifications', () => {
  const about1: AboutContent = {
    id: 'dummyId',
    selfIntroduction: 'dummySelfIntroduction',
  };
  describe('reducer', () => {
    describe('readAll', () => {
      it('should set pending state', () => {
        const initialState: AboutContentState = {
          ...aboutInitialState,
        };
        expect(
          snapshotDiff(
            initialState,
            reducer(initialState, actions.read.pending('requestId'))
          )
        ).toMatchInlineSnapshot(`
          "Snapshot Diff:
          - First value
          + Second value

            Object {
              \\"entities\\": Object {},
              \\"ids\\": Array [],
              \\"read\\": Object {
                \\"error\\": undefined,
          -     \\"status\\": undefined,
          +     \\"status\\": \\"pending\\",
              },
            }"
        `);
      });
      it('should set fulfilled state', () => {
        const initialState: AboutContentState = {
          ...aboutInitialState,
        };
        const modifiedState = reducer(
          initialState,
          actions.read.fulfilled(about1, 'requestId')
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
          +       \\"id\\": \\"dummyId\\",
          +       \\"selfIntroduction\\": \\"dummySelfIntroduction\\",
          +     },
          +   },
          +   \\"ids\\": Array [
          +     \\"dummyId\\",
          +   ],
              \\"read\\": Object {
                \\"error\\": undefined,
          -     \\"status\\": undefined,
          +     \\"status\\": \\"fulfilled\\",
              },
            }"
        `);
      });
      it('should set rejected state', () => {
        const initialState: AboutContentState = {
          ...aboutInitialState,
        };
        expect(
          snapshotDiff(
            initialState,
            reducer(
              initialState,
              actions.read.rejected(
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
              \\"read\\": Object {
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
