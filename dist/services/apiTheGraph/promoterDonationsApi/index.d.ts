import { ApolloQueryResult } from "@apollo/client";
export declare const promoterDonationsApi: {
    fetchPromoterDonations: (promoter: string, first: number) => Promise<ApolloQueryResult<any>>;
    fetchAllPromotersDonations: (first: number) => Promise<ApolloQueryResult<any>>;
};
export default promoterDonationsApi;
