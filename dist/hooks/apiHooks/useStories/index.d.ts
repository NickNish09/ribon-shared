declare function useStories(): {
    fetchNonProfitStories: (NonProfitId: number) => Promise<import("../../../types").Story[]>;
};
export default useStories;
