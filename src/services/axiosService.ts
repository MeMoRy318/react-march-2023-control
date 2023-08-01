import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import { baseURL } from '../configs';

const access = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjkyNjM0YTc1YmMyZTQ3OTM4MTVkZWY4MDZjY2QyNCIsInN1YiI6IjYyZTNmNWVlZjA2NDd' +
    'jMDA1YTcwYTg3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.czOJOuIjceNFLFbA_U4xlGMOFpL5zB8-UJ6bTmCcTxA';


const axiosService: AxiosInstance = axios.create({ baseURL });

export type IRes<T> = Promise<AxiosResponse<T>>
axiosService.interceptors.request.use((config): AxiosRequestConfig<unknown> => {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${access}`;
    return config;
});

export { axiosService };
