/// <reference types="jest" />
export declare type mockRequestProps = {
    payload?: any;
    status?: number;
    method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
};
export declare const mockRequest: (url: string, { payload, status, method }: mockRequestProps) => void;
export declare const changeInputValue: (element: any, value: any) => void;
declare type MockGraphqlOptions = {
    loading?: boolean;
    networkStatus?: number;
};
export declare const mockGraphqlRequest: (queryName: string, responseData: any, { loading, networkStatus }?: MockGraphqlOptions) => jest.SpyInstance<Promise<import("@apollo/client").ApolloQueryResult<unknown>>, [import("@apollo/client").QueryOptions<unknown, unknown>]>;
export declare const mockEnv: (envVars: Record<any, any>) => void;
export {};
