declare function useSources(): {
    createSource: (userId: number, integrationId: number) => Promise<any>;
};
export default useSources;
