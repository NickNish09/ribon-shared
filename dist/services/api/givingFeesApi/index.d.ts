import { AxiosResponse } from "axios";
import CardFees from "types/apiResponses/CardFees";
import { Currencies } from "types/enums/Currencies";
declare const givingFeesApi: {
    postCardFees: (value: number, currency: Currencies) => Promise<AxiosResponse<CardFees>>;
};
export default givingFeesApi;
