import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import config from "../../config";
import { useAppStore } from "../../logic/store";

const onRequest = (config: InternalAxiosRequestConfig) => {
    useAppStore.getState().setLoading(true);
    return config;
}

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
    useAppStore.getState().setLoading(false);
    return Promise.reject(error);
}

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
    useAppStore.getState().setLoading(false);
    return Promise.reject(error);
}

const onResponse = (response: AxiosResponse): AxiosResponse => {
    useAppStore.getState().setLoading(false);
    console.log(useAppStore.getState().loading);
    return response;
}

const http = () : AxiosInstance => {

    const baseUrl: string = config.apiUrl;

    const axiosInstance = axios.create({
        baseURL: baseUrl
    });

    axiosInstance.interceptors.request.use(onRequest, onRequestError);
    axiosInstance.interceptors.response.use(onResponse, onResponseError);

    return axiosInstance;
}

export default http;