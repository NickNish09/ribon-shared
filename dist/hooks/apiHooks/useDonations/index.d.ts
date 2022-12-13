declare function useDonations(userId: number | undefined): {
    donate: (integrationId: number, nonProfitId: number, email: string, externalId?: string | undefined) => Promise<void>;
    donationsCount: number | undefined;
};
export default useDonations;
