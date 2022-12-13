import { Currencies } from "types/enums/Currencies";
import CardFees from "types/apiResponses/CardFees";
declare function useCardGivingFees(value: number, currency: Currencies): {
    cardGivingFees: CardFees | undefined;
    isLoading: boolean;
    refetch: <TPageData>(options?: (import("react-query").RefetchOptions & import("react-query").RefetchQueryFilters<TPageData>) | undefined) => Promise<import("react-query").QueryObserverResult<CardFees, Error>>;
};
export default useCardGivingFees;
