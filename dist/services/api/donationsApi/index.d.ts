import { AxiosResponse } from "axios";
import Donation from "types/entities/Donation";
declare const donationsApi: {
    postDonation: (integrationId: number, nonProfitId: number, email: string) => Promise<AxiosResponse<Donation>>;
    postVoucherDonation: (integrationId: number, nonProfitId: number, email: string, externalId: string) => Promise<AxiosResponse<Donation>>;
};
export default donationsApi;
