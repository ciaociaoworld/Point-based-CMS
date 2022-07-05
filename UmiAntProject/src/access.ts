import initialState from "@/.umi/plugin-initial-state/models/initialState";

export default (initialState: API.IUser) => {
    return {
        isAdmin: initialState.role?.isAdmin,
        isEditor: initialState.role?.isEditor,
        isRoot: () => true,
        canAccess: (route: any) => {
            return route.path === '/userInfo'
        }
    }
}

// 