import Cause from "types/entities/Cause";
declare function useCauses(): {
    causes: Cause[];
    getCause: (causeId: number) => Promise<Cause>;
    isLoading: boolean;
    refetch: <TPageData>(options?: (import("react-query").RefetchOptions & import("react-query").RefetchQueryFilters<TPageData>) | undefined) => Promise<import("react-query").QueryObserverResult<Cause[], Error>>;
};
export default useCauses;
