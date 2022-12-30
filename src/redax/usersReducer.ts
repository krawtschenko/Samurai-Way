import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

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
    followingIsProgress: Array<string>
}

const usersPage: UsersPageType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: false,
    followingIsProgress: []
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
        case "TOGGLE-IS-FOLLOWING":
            return {
                ...state,
                followingIsProgress: action.isLoading
                    ? [...state.followingIsProgress, action.userId]
                    : state.followingIsProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
};

type ActionsType =
    ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsLoading>
    | ReturnType<typeof toggleIsFollowing>

export const followSuccess = (userID: string) => {
    return {
        type: "FOLLOW",
        userID
    } as const
}
export const unfollowSuccess = (userID: string) => {
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
export const toggleIsFollowing = (userId: string, isLoading: boolean) => {
    return {
        type: "TOGGLE-IS-FOLLOWING",
        isLoading,
        userId
    } as const
}

// Функції, які приймають аргументи і повертають thunk
export const getUsers = (currentPage: number, pageSize: number) => {
    // Функція thunk
    return (dispatch: Dispatch) => {
        // Вмикаємо анімацію завантаження
        dispatch(toggleIsLoading(true))
        // Відправляємо запрос на сервер
        // І після того як на запрос прийде відповідь, проводимо операції з response
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            // Вимикаємо анімацію завантаження
            dispatch(toggleIsLoading(false))
            // Записуємо юзерів, які прийшли в респонді, в наш стейт
            dispatch(setUsers(data.items))
            // Записуємо скільки всього юзерів
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}

export const follow = (userID: string) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFollowing(userID, true))
        usersAPI.follow(userID)
            // Після того як на запрос прийшла відповідь response, міняємо деякі дані
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userID))
                }
                dispatch(toggleIsFollowing(userID, false))
            })
    }
}

export const unfollow = (userID: string) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFollowing(userID, true))
        usersAPI.unfollow(userID)
            // Після того як на запрос прийшла відповідь response, міняємо деякі дані
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userID))
                }
                dispatch(toggleIsFollowing(userID, false))
            })
    }
}