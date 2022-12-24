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

export const setAuthUserDataAC = (data: AuthType) => {
    return {
        type: 'SET-USER-DATA',
        data
    } as const
}