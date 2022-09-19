import snapshotDiff from 'snapshot-diff';
import {
  SendMessageState,
  initialState as contactInitialState,
  reducer,
} from '../reducers';
import { actions } from '../actions';
import {
  mockedContactData,
  mockedContactMessageResult,
} from '../mockedContact';

describe('contact', () => {
  describe('reducer', () => {
    describe('send', () => {
      it('should set pending state', () => {
        const initialState: SendMessageState = {
          ...contactInitialState,
          send: { status: 'rejected', error: { message: 'error' } },
        };
        expect(
          snapshotDiff(
            initialState,
            reducer(
              initialState,
              actions.send.pending('requestId', mockedContactData)
            )
          )
        ).toMatchInlineSnapshot(`
          "Snapshot Diff:
          - First value
          + Second value

            Object {
              \\"entities\\": Object {},
              \\"ids\\": Array [],
              \\"send\\": Object {
          -     \\"error\\": Object {
          -       \\"message\\": \\"error\\",
          -     },
          -     \\"status\\": \\"rejected\\",
          +     \\"error\\": undefined,
          +     \\"status\\": \\"pending\\",
              },
            }"
        `);
      });
      it('should set fulfilled state', () => {
        const initialState: SendMessageState = {
          ...contactInitialState,
          send: {
            status: 'pending',
            error: undefined,
          },
        };
        const modifiedState = reducer(
          initialState,
          actions.send.fulfilled(
            mockedContactMessageResult,
            'requestId',
            mockedContactData
          )
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
          +     \\"1\\": Object {
          +       \\"email\\": \\"niranira@nira.example.com\\",
          +       \\"id\\": \\"1\\",
          +       \\"message\\": \\"テストメッセージ本文\\",
          +       \\"name\\": \\"テストメッセージタイトル\\",
          +     },
          +   },
          +   \\"ids\\": Array [
          +     \\"1\\",
          +   ],
              \\"send\\": Object {
                \\"error\\": undefined,
          -     \\"status\\": \\"pending\\",
          +     \\"status\\": \\"fulfilled\\",
              },
            }"
        `);
      });
      it('should set rejected state', () => {
        const initialState: SendMessageState = {
          ...contactInitialState,
          send: {
            status: 'pending',
            error: undefined,
          },
        };
        expect(
          snapshotDiff(
            initialState,
            reducer(
              initialState,
              actions.send.rejected(
                { name: 'name', message: 'message' },
                'requestId',
                mockedContactData
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
              \\"send\\": Object {
          -     \\"error\\": undefined,
          -     \\"status\\": \\"pending\\",
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
