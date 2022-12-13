import { AxiosResponse } from "axios";
import PromoterCardGiving from "types/apiResponses/PromoterCardGiving";
import { Currencies } from "types/enums/Currencies";
declare const promoterCardGivingsApi: {
    getPromoterCardGivings: (email: string | undefined, currency: Currencies) => Promise<AxiosResponse<PromoterCardGiving[]>>;
};
export default promoterCardGivingsApi;
