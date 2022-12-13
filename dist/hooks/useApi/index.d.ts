import { UseQueryOptions } from "react-query";
import { AxiosResponse } from "axios";
interface Props {
    key: string;
    fetchMethod(): Promise<AxiosResponse>;
    options?: UseQueryOptions<any, Error, any>;
}
export declare function useApi<T>({ key, fetchMethod, options }: Props): {
    isLoading: boolean;
    error: Error | null;
    data: T | undefined;
    refetch: <TPageData>(options?: (import("react-query/types/").RefetchOptions & import("react-query/types/").RefetchQueryFilters<TPageData>) | undefined) => Promise<import("react-query/types/").QueryObserverResult<T, Error>>;
};
export {};
