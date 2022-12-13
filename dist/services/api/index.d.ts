import { AxiosRequestConfig, AxiosResponse } from "axios";
export declare const baseURL: string;
export declare const API_SCOPE = "/api/v1";
declare const api: import("axios").AxiosInstance;
export declare function apiGet(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<any, any>>;
export declare function apiPost(url: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse<any, any>>;
export declare function apiPut(url: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse<any, any>>;
export declare function apiDelete(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<any, any>>;
export declare function emptyRequest(): Promise<AxiosResponse<any, any>>;
export default api;
