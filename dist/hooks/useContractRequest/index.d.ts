import { UseQueryOptions } from "react-query";
interface Props {
    key: string;
    fetchMethod(): Promise<any>;
    options?: UseQueryOptions<any, Error, any>;
}
export declare function useContractRequest<T>({ key, fetchMethod, options }: Props): {
    isLoading: boolean;
    error: Error | null;
    data: T | undefined;
    refetch: <TPageData>(options?: (import("react-query/types/").RefetchOptions & import("react-query/types/").RefetchQueryFilters<TPageData>) | undefined) => Promise<import("react-query/types/").QueryObserverResult<T, Error>>;
};
export {};
