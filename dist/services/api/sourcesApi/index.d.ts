import { AxiosResponse } from "axios";
declare const sourcesApi: {
    postCreateSource: (userId: number, integrationId: number) => Promise<AxiosResponse<any>>;
};
export default sourcesApi;
