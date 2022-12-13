import { AxiosResponse } from "axios";
import Impact from "types/entities/Impact";
import DonationsCount from "types/apiResponses/DonationsCount";
declare const impactApi: {
    getImpact: (id: number | null) => Promise<AxiosResponse<Impact[]>>;
    getDonationsCount: (id: number | null) => Promise<AxiosResponse<DonationsCount>>;
};
export default impactApi;
