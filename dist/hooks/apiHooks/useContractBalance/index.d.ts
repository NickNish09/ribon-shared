import { Contract } from "@ethersproject/contracts";
declare function useContractBalance(contract: Contract | null, address: string): {
    contractBalance: number;
    isLoading: boolean;
    refetch: <TPageData>(options?: (import("react-query").RefetchOptions & import("react-query").RefetchQueryFilters<TPageData>) | undefined) => Promise<import("react-query").QueryObserverResult<number, Error>>;
};
export default useContractBalance;
