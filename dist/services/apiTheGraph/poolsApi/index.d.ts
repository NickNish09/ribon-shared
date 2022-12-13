import { ApolloQueryResult } from "@apollo/client";
export declare const poolsApi: {
    fetchAllPools: () => Promise<ApolloQueryResult<any>>;
    fetchPool: (pool: string) => Promise<ApolloQueryResult<any>>;
};
export default poolsApi;
