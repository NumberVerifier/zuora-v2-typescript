// custom-instance.ts

import Axios, { AxiosRequestConfig } from 'axios';
import {ZuoraClient} from "./ZuoraClient";

export const AXIOS_INSTANCE = Axios.create(); // use your own URL here or environment variable

// add a second `options` argument here if you want to pass extra options to each generated query
export const customInstance = async <T>(
    config: AxiosRequestConfig,
    options?: {
        client?: ZuoraClient,
        override?: AxiosRequestConfig
    },
): Promise<T> => {
    let axopts:AxiosRequestConfig = {
        ...config
    }
    if (options?.client) {
        await options.client.addAuth(axopts)
    }
    if (options?.override) {
        const {headers,...rest} = options.override
        axopts = {
            ...axopts,
            headers: {
                ...axopts.headers,
                ...headers
            },
            ...rest
        }
    }
    const source = Axios.CancelToken.source();
    const promise = AXIOS_INSTANCE({
        ...axopts,
        cancelToken: source.token,
    }).then(({ data }) => data);

    // @ts-ignore
    promise.cancel = () => {
        source.cancel('Query was cancelled');
    };

    return promise;
};
