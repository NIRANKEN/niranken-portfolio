import { FetchInterceptor } from 'fetch-intercept';

export const fetchInterceptor = (): FetchInterceptor => ({
  request: async (url, config) => {
    if (!config) {
      config = {};
    }
    if (!config.headers) {
      config.headers = {};
    }
    try {
      config.headers = {
        ...config.headers,
        Authorization: 'Bearer Allow niranken-portfolio',
        'Cache-Control': 'no-cache, no-store',
        Pragma: 'no-cache',
        Expires: '14d',
      };
      return [url, config];
    } catch (e) {
      throw e;
    }
  },
});
