export type UsersType = {
    id: string
    photos: {
        "small": null | string
        "large": null | string
    }
    followed: boolean
    name: string
    status: string
    location: {
        city: string
        country: string
    }
}
export type UsersPageType = {
    users: UsersType[],
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
}

const usersPage: UsersPageType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: false
}

export const usersReducer = (state: UsersPageType = usersPage, action: ActionsType): UsersPageType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(elem => elem.id === action.userID ? {...elem, followed: true} : elem)
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(elem => elem.id === action.userID ? {...elem, followed: false} : elem)
            }
        case "SET-USERS":
            return {...state, users: action.users}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET-TOTAL-USERS-COUNT":
            return {...state, totalUsersCount: action.totalUsersCount}
        case "TOGGLE-IS-LOADING":
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
};

type ActionsType =
    ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsLoading>

export const follow = (userID: string) => {
    return {
        type: "FOLLOW",
        userID
    } as const
}
export const unFollow = (userID: string) => {
    return {
        type: "UNFOLLOW",
        userID
    } as const
}
export const setUsers = (users: UsersType[]) => {
    return {
        type: "SET-USERS",
        users
    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        currentPage
    } as const
}

export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: "SET-TOTAL-USERS-COUNT",
        totalUsersCount
    } as const
}

export const toggleIsLoading = (isLoading: boolean) => {
    return {
        type: "TOGGLE-IS-LOADING",
        isLoading
    } as const
}