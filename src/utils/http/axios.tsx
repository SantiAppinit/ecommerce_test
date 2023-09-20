import axios, { AxiosInstance } from "axios";
import config from "../../config";

const http = () : AxiosInstance => {

    const baseUrl: string = config.apiUrl;

    const axiosInstance = axios.create({
        baseURL: baseUrl
    });

    return axiosInstance;
}

export default http;