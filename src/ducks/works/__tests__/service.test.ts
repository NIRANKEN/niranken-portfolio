import { mockedWorks } from '../mockedWorks';
import * as service from '../service';

describe('service', () => {
  it('readAll', async () => {
    const result = await service.readAll();
    expect(await result.json() as Notification[]).toEqual(mockedWorks);
  });
  it('read', async() => {
    const result = await service.read('workId1');
    expect(await result.json() as Notification).toEqual(mockedWorks[0]);
  });
});
