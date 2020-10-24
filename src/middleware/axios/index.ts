import axios, { AxiosRequestConfig } from 'axios';

export type RequestMethod = 'get' | 'put' | 'post' | 'delete';

export interface CallAPIOptionsParams extends Record<string, any> {
  include?: string;
  limit?: number;
  offset?: number;
  order?: string;
  where?: Record<string, unknown>;
}

export interface CallAPIOptions extends AxiosRequestConfig {
  params?: CallAPIOptionsParams;
  data?: Record<string, any>;
}

export const makeApiCall = (
  fullUrl: string,
  options: CallAPIOptions = {},
  method: RequestMethod = 'get',
) => {
  const { headers, ...redactedOptions } = options;
  const headerOptions = { headers };

  const methodHandlers = {
    get: () => axios(fullUrl, options),
    put: () => axios.put(fullUrl, redactedOptions, headerOptions),
    post: () => axios.post(fullUrl, redactedOptions, headerOptions),
    delete: () => axios.delete(fullUrl, options),
  };

  return methodHandlers[method]();
};

export function makeFullUrlApiCall(
  endpoint: string,
  options?: CallAPIOptions,
  method: RequestMethod = 'get',
) {
  const baseURL = process.env.REACT_APP_API_URL ?? 'http://localhost:80';
  return makeApiCall(`${baseURL}/api/${endpoint}`, options, method);
}
