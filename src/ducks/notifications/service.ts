import { mockedNotifications } from "./mockedNotifications";

export const readAll = async ():Promise<Response> => ({
  json: async () => mockedNotifications,
  status: 200,
  statusText: 'This is Dummy Notifications',
} as Response);

export const read = async (notificationId: string):Promise<Response> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  const filteredMockedNotifications = mockedNotifications.filter(v => v.id === notificationId);
  return {
    json: async () => filteredMockedNotifications.length === 0 ? {} : filteredMockedNotifications[0],
    status: 200,
    statusText: 'This is Dummy Notification(notificationId 1)',
  } as Response
}