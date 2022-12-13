import CanDonate from 'types/apiResponses/CanDonate';
declare function useCanDonate(integrationId: number | string | null): {
    canDonate: boolean;
    isLoading: boolean;
    refetch: <TPageData>(options?: (import("react-query").RefetchOptions & import("react-query").RefetchQueryFilters<TPageData>) | undefined) => Promise<import("react-query").QueryObserverResult<CanDonate, Error>>;
};
export default useCanDonate;
