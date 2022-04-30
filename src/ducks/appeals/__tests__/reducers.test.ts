import snapshotDiff from 'snapshot-diff';
import {
  AppealContentsState,
  initialState as appealsInitialState,
  reducer,
} from '../reducers';
import { actions } from '../actions';
import { AppealContent } from '../AppealContent';

describe('notifications', () => {
  const appeal1: AppealContent = {
    id: 'dummyId',
    appeal: 'dummyAppealTitle',
    detail: 'dummyAppealDetail',
    imagePath: '/hoge/fuga',
    imageHeight: '256',
    imageExplanation: 'dummyImageExplanation',
  };
  describe('reducer', () => {
    describe('readAll', () => {
      it('should set pending state', () => {
        const initialState: AppealContentsState = {
          ...appealsInitialState,
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
        const initialState: AppealContentsState = {
          ...appealsInitialState,
        };
        const modifiedState = reducer(
          initialState,
          actions.readAll.fulfilled([appeal1], 'requestId')
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
          +       \\"appeal\\": \\"dummyAppealTitle\\",
          +       \\"detail\\": \\"dummyAppealDetail\\",
          +       \\"id\\": \\"dummyId\\",
          +       \\"imageExplanation\\": \\"dummyImageExplanation\\",
          +       \\"imageHeight\\": \\"256\\",
          +       \\"imagePath\\": \\"/hoge/fuga\\",
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
        const initialState: AppealContentsState = {
          ...appealsInitialState,
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
