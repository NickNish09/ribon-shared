import { AxiosResponse } from "axios";
import Integration from "types/entities/Integration";
declare const integrationsApi: {
    getIntegration: (id: number | string) => Promise<AxiosResponse<Integration>>;
};
export default integrationsApi;
