import axios, { AxiosInstance } from 'axios';
import { AXIOS_CONFIG } from '../config/axios-config';

export class AxiosService {
  public readonly axios: AxiosInstance = axios.create(AXIOS_CONFIG);
}
