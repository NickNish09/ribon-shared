import { AxiosResponse } from "axios";
import NonProfit from "types/entities/NonProfit";
declare const nonProfitsApi: {
    getNonProfits: () => Promise<AxiosResponse<NonProfit[]>>;
};
export default nonProfitsApi;
