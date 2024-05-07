import { AxiosRequestConfig } from 'axios';
import { ZuoraClient } from './ZuoraClient';
export declare const AXIOS_INSTANCE: import("axios").AxiosInstance;
export declare const customInstance: <T>(config: AxiosRequestConfig, options?: {
    client?: ZuoraClient;
    override?: AxiosRequestConfig;
}) => Promise<T>;
