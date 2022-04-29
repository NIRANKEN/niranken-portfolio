import { mockedWorks } from '../mockedWorks';
import * as service from '../service';
import type { FetchMock } from 'jest-fetch-mock';

describe('service', () => {
  const mockedFetch = fetch as FetchMock;
  beforeEach(() => {
    mockedFetch.resetMocks();
  });

  it('readAll', async () => {
    mockedFetch.mockResponseOnce(JSON.stringify(mockedWorks));
    const result = await service.readAll();
    expect((await result.json()) as Notification[]).toEqual(mockedWorks);
    expect(mockedFetch).toHaveBeenCalledWith('http://localhost:3000/dev/works');
  });

  it('read', async () => {
    const result = await service.read('workId1');
    expect((await result.json()) as Notification).toEqual(mockedWorks[0]);
  });
});
