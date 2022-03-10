import type { SerializedError } from '@reduxjs/toolkit';

type RequestStatus = 'pending' | 'fulfilled' | 'rejected';

export const initialRequestResult = {
  status: undefined as RequestStatus | undefined,
  error: undefined as SerializedError | undefined,
};
