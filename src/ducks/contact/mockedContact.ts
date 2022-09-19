import { ContactData, SendContactMessageResult } from '.';

export const mockedContactData: ContactData = {
  name: 'テストメッセージタイトル',
  email: 'niranira@nira.example.com',
  message: 'テストメッセージ本文',
};

export const mockedContactMessageResult: SendContactMessageResult = {
  id: '1',
  name: 'テストメッセージタイトル',
  email: 'niranira@nira.example.com',
  message: 'テストメッセージ本文',
};
