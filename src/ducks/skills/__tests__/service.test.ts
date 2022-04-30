import { mockedSkills } from '../mockedSkills';
import * as service from '../service';
import type { FetchMock } from 'jest-fetch-mock';

describe('service', () => {
  const mockedFetch = fetch as FetchMock;
  beforeEach(() => {
    mockedFetch.resetMocks();
  });

  it('readAll', async () => {
    mockedFetch.mockResponseOnce(JSON.stringify(mockedSkills));
    const result = await service.readAll();
    expect((await result.json()) as Notification[]).toEqual(mockedSkills);
    expect(mockedFetch).toHaveBeenCalledWith('http://localhost:3000/dev/skills', {"credentials": "include", "mode": "cors"});
  });
});
