import { useApi } from 'hooks/useApi';
import integrationsApi from 'services/api/integrationsApi';
import IntegrationImpact from 'types/apiResponses/IntegrationImpact';

function useIntegrationImpact(
  integrationId: number | string | null | undefined,
  startDate: string,
  endDate: string,
) {
  if (!integrationId) {
    return {
      integrationImpact: {} as IntegrationImpact,
      isLoading: true,
      refetch: () => {},
    };
  }

  const {
    data: integrationImpact,
    isLoading,
    refetch,
    error,
  } = useApi<IntegrationImpact>({
    key: 'integrationImpact',
    fetchMethod: () =>
      integrationsApi.getIntegrationImpact(integrationId, startDate, endDate),
    options: {
      enabled: !!integrationId,
    },
  });

  return { integrationImpact, isLoading, refetch, error };
}

export default useIntegrationImpact;
