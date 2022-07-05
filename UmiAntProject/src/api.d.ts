declare namespace API {
    interface IRole {
        isAdmin: boolean,
        isEditor: boolean
    }

    interface IUser {
        id: number,
        name: string,
        password?: string,
        role?: IRole
    }
}