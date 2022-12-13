import NonProfit from "types/entities/NonProfit";
declare function useNonProfits(): {
    nonProfits: NonProfit[] | undefined;
    isLoading: boolean;
    refetch: <TPageData>(options?: (import("react-query").RefetchOptions & import("react-query").RefetchQueryFilters<TPageData>) | undefined) => Promise<import("react-query").QueryObserverResult<NonProfit[], Error>>;
};
export default useNonProfits;
