import * as service from '../service';
import type { FetchMock } from 'jest-fetch-mock';
import {
  mockedContactData,
  mockedContactMessageResult,
} from '../mockedContact';

describe('service', () => {
  const mockedFetch = fetch as FetchMock;
  beforeEach(() => {
    mockedFetch.resetMocks();
  });

  it('send', async () => {
    mockedFetch.mockResponseOnce(JSON.stringify(mockedContactMessageResult));
    const result = await service.send(mockedContactData);
    expect((await result.json()) as Notification[]).toEqual(
      mockedContactMessageResult
    );
    expect(mockedFetch).toHaveBeenCalledWith(
      'http://localhost:3000/dev/contact/send',
      {
        credentials: 'include',
        mode: 'cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: '{"name":"テストメッセージタイトル","email":"niranira@nira.example.com","message":"テストメッセージ本文"}',
      }
    );
  });
});
