import {
  SerializedError,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import { Work } from './Work';
import * as service from './service';

export const actions = {
  readAll: createAsyncThunk<
    Work[],
    void,
    {
      rejectValue: SerializedError;
    }
  >('works/readAll', async (_, thunkApi) => {
    const response = await service.readAll();
    if (response.status !== 200) {
      return thunkApi.rejectWithValue({ message: response.statusText });
    }
    return (await response.json()) as Work[];
  }),
  read: createAsyncThunk<
    Work,
    string,
    {
      rejectValue: SerializedError;
    }
  >(
    'works/read',
    async (workId, thunkApi) => {
      const response = await service.read(workId);
      if (response.status !== 200) {
        return thunkApi.rejectWithValue({ message: response.statusText });
      }
      return (await response.json()) as Work;
    }
  ),
};