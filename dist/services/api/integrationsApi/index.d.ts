import { AxiosResponse } from 'axios';
import Integration from 'types/entities/Integration';
import IntegrationImpact from 'types/apiResponses/IntegrationImpact';
declare const integrationsApi: {
    getIntegration: (id: number | string) => Promise<AxiosResponse<Integration>>;
    getIntegrationImpact: (id: number | string) => Promise<AxiosResponse<IntegrationImpact>>;
};
export default integrationsApi;
