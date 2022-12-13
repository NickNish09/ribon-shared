import PromoterCardGiving from "types/apiResponses/PromoterCardGiving";
import { Currencies } from "types/enums/Currencies";
declare function usePromoterCardGivings(email: string | undefined, currency: Currencies): {
    promoterCardGivings: PromoterCardGiving[] | undefined;
    isLoading: boolean;
    refetch: <TPageData>(options?: (import("react-query").RefetchOptions & import("react-query").RefetchQueryFilters<TPageData>) | undefined) => Promise<import("react-query").QueryObserverResult<PromoterCardGiving[], Error>>;
};
export default usePromoterCardGivings;
