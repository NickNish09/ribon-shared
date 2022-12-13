import { AxiosResponse } from "axios";
declare const donationImpactsApi: {
    getDonationImpact: () => Promise<AxiosResponse<any>>;
};
export default donationImpactsApi;
