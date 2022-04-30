import { mockedAboutContent } from '../mockedAboutContent';
import * as service from '../service';
import type { FetchMock } from 'jest-fetch-mock';

describe('service', () => {
  const mockedFetch = fetch as FetchMock;
  beforeEach(() => {
    mockedFetch.resetMocks();
  });

  it('read', async () => {
    mockedFetch.mockResponseOnce(JSON.stringify(mockedAboutContent));
    const result = await service.read();
    expect((await result.json()) as Notification[]).toEqual(mockedAboutContent);
    expect(mockedFetch).toHaveBeenCalledWith('http://localhost:3000/dev/about', {"credentials": "include", "mode": "cors"});
  });
});
