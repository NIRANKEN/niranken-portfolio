import snapshotDiff from 'snapshot-diff';
import {
  WorksState,
  initialState as worksInitialState,
  reducer,
} from '../reducers';
import { actions } from '../actions';
import { Work } from '../Work';

describe('notifications', () => {
  const work1: Work = {
    id: 'dummyId',
    type: 'personal',
    ord: 1,
    category: 'dummyCategory',
    work: 'dummyWork',
    detail: `文1
    文2`,
    writtenAt: 'YYYY-MM-DD',
    writtenBy: 'にらんけん',
  };
  describe('reducer', () => {
    const workId = 'dummyId';

    describe('readAll', () => {
      it('should set pending state', () => {
        const initialState: WorksState = {
          ...worksInitialState,
          read: { status: 'rejected', error: { message: 'error' } },
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

          @@ -7,8 +7,8 @@
                },
                \\"status\\": \\"rejected\\",
              },
              \\"readAll\\": Object {
                \\"error\\": undefined,
          -     \\"status\\": undefined,
          +     \\"status\\": \\"pending\\",
              },
            }"
        `);
      });
      it('should set fulfilled state', () => {
        const initialState: WorksState = {
          ...worksInitialState,
          read: {
            status: 'pending',
            error: undefined,
          },
        };
        const modifiedState = reducer(
          initialState,
          actions.readAll.fulfilled([work1], 'requestId')
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
          +       \\"category\\": \\"dummyCategory\\",
          +       \\"detail\\": \\"文1
          +     文2\\",
          +       \\"id\\": \\"dummyId\\",
          +       \\"ord\\": 1,
          +       \\"type\\": \\"personal\\",
          +       \\"work\\": \\"dummyWork\\",
          +       \\"writtenAt\\": \\"YYYY-MM-DD\\",
          +       \\"writtenBy\\": \\"にらんけん\\",
          +     },
          +   },
          +   \\"ids\\": Array [
          +     \\"dummyId\\",
          +   ],
              \\"read\\": Object {
                \\"error\\": undefined,
                \\"status\\": \\"pending\\",
              },
              \\"readAll\\": Object {
                \\"error\\": undefined,
          -     \\"status\\": undefined,
          +     \\"status\\": \\"fulfilled\\",
              },
            }"
        `);
      });
      it('should set rejected state', () => {
        const initialState: WorksState = {
          ...worksInitialState,
          read: {
            status: 'pending',
            error: undefined,
          },
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

          @@ -4,9 +4,12 @@
              \\"read\\": Object {
                \\"error\\": undefined,
                \\"status\\": \\"pending\\",
              },
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

    describe('read', () => {
      it('should set pending state', () => {
        const initialState: WorksState = {
          ...worksInitialState,
          read: { status: 'rejected', error: { message: 'error' } },
        };
        expect(
          snapshotDiff(
            initialState,
            reducer(initialState, actions.read.pending('requestId', workId))
          )
        ).toMatchInlineSnapshot(`
          "Snapshot Diff:
          - First value
          + Second value

          @@ -7,8 +7,8 @@
                },
                \\"status\\": \\"rejected\\",
              },
              \\"readAll\\": Object {
                \\"error\\": undefined,
          -     \\"status\\": undefined,
          +     \\"status\\": \\"pending\\",
              },
            }"
        `);
      });
      it('should set fulfilled state', () => {
        const initialState: WorksState = {
          ...worksInitialState,
          read: {
            status: 'pending',
            error: undefined,
          },
        };
        const modifiedState = reducer(
          initialState,
          actions.read.fulfilled(work1, 'requestId', workId)
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
          +       \\"category\\": \\"dummyCategory\\",
          +       \\"detail\\": \\"文1
          +     文2\\",
          +       \\"id\\": \\"dummyId\\",
          +       \\"ord\\": 1,
          +       \\"type\\": \\"personal\\",
          +       \\"work\\": \\"dummyWork\\",
          +       \\"writtenAt\\": \\"YYYY-MM-DD\\",
          +       \\"writtenBy\\": \\"にらんけん\\",
          +     },
          +   },
          +   \\"ids\\": Array [
          +     \\"dummyId\\",
          +   ],
              \\"read\\": Object {
                \\"error\\": undefined,
                \\"status\\": \\"pending\\",
              },
              \\"readAll\\": Object {
                \\"error\\": undefined,
          -     \\"status\\": undefined,
          +     \\"status\\": \\"fulfilled\\",
              },
            }"
        `);
      });
      it('should set rejected state', () => {
        const initialState: WorksState = {
          ...worksInitialState,
          read: {
            status: 'pending',
            error: undefined,
          },
        };
        expect(
          snapshotDiff(
            initialState,
            reducer(
              initialState,
              actions.read.rejected(
                { name: 'name', message: 'message' },
                'requestId',
                workId
              )
            )
          )
        ).toMatchInlineSnapshot(`
          "Snapshot Diff:
          - First value
          + Second value

          @@ -4,9 +4,12 @@
              \\"read\\": Object {
                \\"error\\": undefined,
                \\"status\\": \\"pending\\",
              },
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
