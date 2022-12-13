declare function useStories(): {
    fetchNonProfitStories: (NonProfitId: number) => Promise<import("../../../types/entities").Story[]>;
};
export default useStories;
