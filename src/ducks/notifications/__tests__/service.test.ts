import { mockedNotifications } from '../mockedNotifications';
import * as service from '../service';

describe('service', () => {
  it('readAll', async () => {
    const result = await service.readAll();
    expect(await result.json() as Notification[]).toEqual(mockedNotifications);
  });
  it('read', async() => {
    const result = await service.read('notificationId1');
    expect(await result.json() as Notification).toEqual(mockedNotifications[0]);
  });
});
