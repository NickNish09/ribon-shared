import { Currencies } from "types/enums/Currencies";
import NonProfitImpact from "types/apiResponses/NonProfitImpact";
declare function useNonProfitImpact(nonProfitId?: number, value?: number, currency?: Currencies): {
    nonProfitImpact: NonProfitImpact | undefined;
    isLoading: boolean;
    refetch: <TPageData>(options?: (import("react-query").RefetchOptions & import("react-query").RefetchQueryFilters<TPageData>) | undefined) => Promise<import("react-query").QueryObserverResult<NonProfitImpact, Error>>;
};
export default useNonProfitImpact;
