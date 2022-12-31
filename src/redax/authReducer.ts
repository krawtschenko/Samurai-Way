import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

export type AuthType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

const initialState: AuthType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: AuthType = initialState, action: ActionType): AuthType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {...state, ...action.data, isAuth: true}
        default:
            return state
    }
}

type ActionType = ReturnType<typeof setAuthUserDataAC>

const setAuthUserDataAC = (data: AuthType) => {
    return {
        type: 'SET-USER-DATA',
        data
    } as const
}

export const getAuthUserData = () => {
    return (dispatch: Dispatch) => {
        // Відправляємо запрос на сервер
        usersAPI.me()
            // Після того як на запрос прийшла відповідь response, міняємо деякі дані
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserDataAC(response.data.data))
                }
            })
    }
}