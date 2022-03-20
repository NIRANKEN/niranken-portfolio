import snapshotDiff from 'snapshot-diff';
import {
  WorksState,
  initialState as notificationsInitialState,
  reducer,
} from '../reducers';
import { actions } from '../actions';
import { Notification } from '../Work';

describe('notifications', () => {
  const notification1: Notification = {
    id: 'dummy-id',
    content: 'HPが更新されました',
    writtenBy: 'NIRANKEN',
    writtenAt: '2021-08-01',
  };
  describe('reducer', () => {
    const notificationId = 'dummy-id';

    describe('readAll', () => {
      it('should set pending state', () => {
        const initialState: WorksState = {
          ...notificationsInitialState,
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
          ...notificationsInitialState,
          read: {
            status: 'pending',
            error: undefined,
          },
        };
        const modifiedState = reducer(
          initialState,
          actions.readAll.fulfilled([notification1], 'requestId')
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
          +     \\"dummy-id\\": Object {
          +       \\"content\\": \\"HPが更新されました\\",
          +       \\"id\\": \\"dummy-id\\",
          +       \\"writtenAt\\": \\"2021-08-01\\",
          +       \\"writtenBy\\": \\"NIRANKEN\\",
          +     },
          +   },
          +   \\"ids\\": Array [
          +     \\"dummy-id\\",
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
          ...notificationsInitialState,
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
          ...notificationsInitialState,
          read: { status: 'rejected', error: { message: 'error' } },
        };
        expect(
          snapshotDiff(
            initialState,
            reducer(
              initialState,
              actions.read.pending('requestId', notificationId)
            )
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
          ...notificationsInitialState,
          read: {
            status: 'pending',
            error: undefined,
          },
        };
        const modifiedState = reducer(
          initialState,
          actions.read.fulfilled(notification1, 'requestId', notificationId)
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
          +     \\"dummy-id\\": Object {
          +       \\"content\\": \\"HPが更新されました\\",
          +       \\"id\\": \\"dummy-id\\",
          +       \\"writtenAt\\": \\"2021-08-01\\",
          +       \\"writtenBy\\": \\"NIRANKEN\\",
          +     },
          +   },
          +   \\"ids\\": Array [
          +     \\"dummy-id\\",
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
          ...notificationsInitialState,
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
                notificationId
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
