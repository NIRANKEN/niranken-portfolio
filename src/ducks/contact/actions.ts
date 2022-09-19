import { SerializedError, createAsyncThunk } from '@reduxjs/toolkit';
import { ContactData, SendContactMessageResult } from './ContactData';
import * as service from './service';

export const actions = {
  send: createAsyncThunk<
    SendContactMessageResult,
    ContactData,
    {
      rejectValue: SerializedError;
    }
  >('contact/send', async (contactData, thunkApi) => {
    const response = await service.send(contactData);
    if (response.status !== 200) {
      return thunkApi.rejectWithValue({ message: response.statusText });
    }
    return (await response.json()) as SendContactMessageResult;
  }),
};
