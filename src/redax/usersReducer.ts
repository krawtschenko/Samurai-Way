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
    users: UsersType[]
}

const usersPage: UsersPageType = {
    users: []
}

export const UsersReducer = (state: UsersPageType = usersPage, action: ActionsType): UsersPageType => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state,
                users: state.users.map(elem => elem.id === action.userID ? {...elem, followed: true} : elem)
            }
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: state.users.map(elem => elem.id === action.userID ? {...elem, followed: false} : elem)
            }
        }
        case "SET-USERS": {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
};

type ActionsType = ReturnType<typeof followAC> | ReturnType<typeof unFollowAC> | ReturnType<typeof setUsersAC>

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