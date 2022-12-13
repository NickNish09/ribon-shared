declare function useUsers(): {
    createUser: (email: string) => Promise<import("../../../types/entities").User>;
    findUser: (email: string) => Promise<import("../../../types/entities").User>;
    findOrCreateUser: (email: string) => Promise<import("../../../types/entities").User>;
};
export default useUsers;
