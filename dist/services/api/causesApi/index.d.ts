import { AxiosResponse } from "axios";
import Cause from "types/entities/Cause";
declare const causesApi: {
    getCauses: () => Promise<AxiosResponse<Cause[]>>;
    getCause: (id: number) => Promise<AxiosResponse<Cause>>;
};
export default causesApi;
