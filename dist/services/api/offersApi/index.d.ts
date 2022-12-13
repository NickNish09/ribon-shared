import { AxiosResponse } from "axios";
import Offer from "types/entities/Offer";
import { Currencies } from "types/enums/Currencies";
declare const offersApi: {
    getOffers: (currency: Currencies, subscription: boolean) => Promise<AxiosResponse<Offer[]>>;
    getOffer: (id: number) => Promise<AxiosResponse<Offer>>;
};
export default offersApi;
