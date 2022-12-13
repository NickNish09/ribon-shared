import Integration from "types/entities/Integration";
declare function useIntegration(integrationId: number | string | null | undefined): {
    integration: Integration;
    isLoading: boolean;
    refetch: () => void;
    error?: undefined;
} | {
    integration: Integration | undefined;
    isLoading: boolean;
    refetch: <TPageData>(options?: (import("react-query").RefetchOptions & import("react-query").RefetchQueryFilters<TPageData>) | undefined) => Promise<import("react-query").QueryObserverResult<Integration, Error>>;
    error: Error | null;
};
export default useIntegration;
