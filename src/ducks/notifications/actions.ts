import {
  SerializedError,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import { Notification } from './Notification';
import * as service from './service';

export const actions = {
  readAll: createAsyncThunk<
    Notification[],
    void,
    {
      rejectValue: SerializedError;
    }
  >('notifications/readAll', async (_, thunkApi) => {
    const response = await service.readAll();
    if (response.status !== 200) {
      return thunkApi.rejectWithValue({ message: response.statusText });
    }
    return (await response.json()) as Notification[];
  }),
  read: createAsyncThunk<
    Notification,
    string,
    {
      rejectValue: SerializedError;
    }
  >(
    'notifications/read',
    async (notificationId, thunkApi) => {
      const response = await service.read(notificationId);
      if (response.status !== 200) {
        return thunkApi.rejectWithValue({ message: response.statusText });
      }
      return (await response.json()) as Notification;
    }
  ),
};