import { AxiosResponse } from "axios";
import Integration from "types/entities/Integration";
import IntegrationImpact from "types/apiResponses/IntegrationImpact";
import { apiGet } from "..";

const integrationsApi = {
  getIntegration: (id: number | string): Promise<AxiosResponse<Integration>> =>
    apiGet(`integrations/${id}`),

  getIntegrationImpact: (
    id: number | string,
    startDate: string,
    endDate: string,
  ): Promise<AxiosResponse<IntegrationImpact>> =>
    apiGet(`integrations/${id}/impacts`, {
      params: {
        start_date: startDate,
        end_date: endDate,
      },
    }),
};

export default integrationsApi;
