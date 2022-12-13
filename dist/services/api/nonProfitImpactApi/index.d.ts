import { AxiosResponse } from "axios";
import NonProfit from "types/entities/NonProfit";
import { Currencies } from "types/enums/Currencies";
declare const nonProfitImpactApi: {
    postImpactByNonProfit: (nonProfitId?: number | undefined, value?: number | undefined, currency?: Currencies | undefined) => Promise<AxiosResponse<NonProfit[]>>;
};
export default nonProfitImpactApi;
