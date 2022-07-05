// fake user data
export async function getInitialState(): Promise<API.IUser> {
    return Promise.resolve({
        id: 1,
        name: "hello",
        role: {
            isAdmin: true,
            isEditor: true,
        }
    })
}