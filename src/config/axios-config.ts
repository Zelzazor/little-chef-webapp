import { AxiosRequestConfig } from 'axios';

export const AXIOS_CONFIG: AxiosRequestConfig = {
  baseURL: `${import.meta.env.VITE_API_URL}`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};
