declare function useUsers(): {
    createUser: (email: string) => Promise<import("../../../types").User>;
    findUser: (email: string) => Promise<import("../../../types").User>;
    findOrCreateUser: (email: string) => Promise<import("../../../types").User>;
};
export default useUsers;
