import IntegrationImpact from 'types/apiResponses/IntegrationImpact';
declare function useIntegrationImpact(integrationId: number | string | null | undefined, startDate: string, endDate: string): {
    integrationImpact: IntegrationImpact;
    isLoading: boolean;
    refetch: () => void;
    error?: undefined;
} | {
    integrationImpact: IntegrationImpact | undefined;
    isLoading: boolean;
    refetch: <TPageData>(options?: (import("react-query").RefetchOptions & import("react-query").RefetchQueryFilters<TPageData>) | undefined) => Promise<import("react-query").QueryObserverResult<IntegrationImpact, Error>>;
    error: Error | null;
};
export default useIntegrationImpact;
