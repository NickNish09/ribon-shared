import { AxiosResponse } from "axios";
import Story from "types/entities/Story";
declare const storiesApi: {
    getNonProfitStories: (id: number | string) => Promise<AxiosResponse<Story[]>>;
};
export default storiesApi;
