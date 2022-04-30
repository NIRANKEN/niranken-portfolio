import {
  SerializedError,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import { AppealContent } from './AppealContent';
import * as service from './service';

export const actions = {
  readAll: createAsyncThunk<
    AppealContent[],
    void,
    {
      rejectValue: SerializedError;
    }
  >('appeals/readAll', async (_, thunkApi) => {
    const response = await service.readAll();
    if (response.status !== 200) {
      return thunkApi.rejectWithValue({ message: response.statusText });
    }
    return (await response.json()) as AppealContent[];
  }),
};