import { mockedAppealContents } from '../mockedAppealContents';
import * as service from '../service';
import type { FetchMock } from 'jest-fetch-mock';

describe('service', () => {
  const mockedFetch = fetch as FetchMock;
  beforeEach(() => {
    mockedFetch.resetMocks();
  });

  it('readAll', async () => {
    mockedFetch.mockResponseOnce(JSON.stringify(mockedAppealContents));
    const result = await service.readAll();
    expect((await result.json()) as Notification[]).toEqual(mockedAppealContents);
    expect(mockedFetch).toHaveBeenCalledWith('http://localhost:3000/dev/appeals', {"credentials": "include", "mode": "cors"});
  });
});
