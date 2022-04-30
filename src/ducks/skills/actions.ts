import {
  SerializedError,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import { Skill } from './Skill';
import * as service from './service';

export const actions = {
  readAll: createAsyncThunk<
    Skill[],
    void,
    {
      rejectValue: SerializedError;
    }
  >('skills/readAll', async (_, thunkApi) => {
    const response = await service.readAll();
    if (response.status !== 200) {
      return thunkApi.rejectWithValue({ message: response.statusText });
    }
    return (await response.json()) as Skill[];
  }),
};