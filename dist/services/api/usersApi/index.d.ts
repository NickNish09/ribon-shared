import { AxiosResponse } from "axios";
import User from "types/entities/User";
import CanDonate from "types/apiResponses/CanDonate";
declare const usersApi: {
    postCreateUser: (email: string) => Promise<AxiosResponse<User>>;
    postSearchUser: (email: string) => Promise<AxiosResponse<User>>;
    postCanDonate: (integrationId: number | string) => Promise<AxiosResponse<CanDonate>>;
};
export default usersApi;
