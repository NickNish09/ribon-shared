import Offer from "types/entities/Offer";
import { Currencies } from "types/enums/Currencies";
declare function useOffers(currency: Currencies, subscription?: boolean): {
    offers: Offer[];
    getOffer: (offerId: number) => Promise<Offer>;
    isLoading: boolean;
    refetch: <TPageData>(options?: (import("react-query").RefetchOptions & import("react-query").RefetchQueryFilters<TPageData>) | undefined) => Promise<import("react-query").QueryObserverResult<Offer[], Error>>;
};
export default useOffers;
