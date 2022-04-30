import { SerializedError, createAsyncThunk } from '@reduxjs/toolkit';
import { AboutContent } from './AboutContent';
import * as service from './service';

export const actions = {
  read: createAsyncThunk<
    AboutContent,
    void,
    {
      rejectValue: SerializedError;
    }
  >('about/read', async (_, thunkApi) => {
    const response = await service.read();
    if (response.status !== 200) {
      return thunkApi.rejectWithValue({ message: response.statusText });
    }
    return (await response.json()) as AboutContent;
  }),
};
