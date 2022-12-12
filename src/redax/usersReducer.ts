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
}

const usersPage: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}

export const UsersReducer = (state: UsersPageType = usersPage, action: ActionsType): UsersPageType => {
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
        case "SET-Current-Page":
            return {...state, currentPage: action.currentPage}
        case "SET-TOTAL-USERS-COUNT":
            return {...state, totalUsersCount: action.totalUsersCount}
        default:
            return state
    }
};

type ActionsType =
    ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>

export const followAC = (userID: string) => {
    return {
        type: "FOLLOW",
        userID
    } as const
}
export const unFollowAC = (userID: string) => {
    return {
        type: "UNFOLLOW",
        userID
    } as const
}
export const setUsersAC = (users: UsersType[]) => {
    return {
        type: "SET-USERS",
        users
    } as const
}

export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: "SET-Current-Page",
        currentPage
    } as const
}

export const setTotalUsersCountAC = (totalUsersCount: number) => {
    return {
        type: "SET-TOTAL-USERS-COUNT",
        totalUsersCount
    } as const
}