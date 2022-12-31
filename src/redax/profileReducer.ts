import {v1} from "uuid";
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

export type PostsType = {
    id: string
    post: string
    likesCount: string
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}

export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
    profile: ProfileType | null
}

const profilePage: ProfilePageType = {
    posts: [
        {id: v1(), post: 'Post 1', likesCount: 'Likes 2'},
        {id: v1(), post: 'Post 2', likesCount: 'Likes 3'},
        {id: v1(), post: 'Post 3', likesCount: 'Likes 2'},
        {id: v1(), post: 'Post 4', likesCount: 'Likes 1'},
        {id: v1(), post: 'Post 5', likesCount: 'Likes 4'}
    ],
    newPostText: '',
    profile: null
}

const profileReducer = (state: ProfilePageType = profilePage, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost: PostsType = {id: v1(), post: state.newPostText, likesCount: 'Likes 0'}
            return {...state, posts: [newPost, ...state.posts], newPostText: ''}
        }
        case 'UPDATE-NEW-POST-TEXT': {
            return {...state, newPostText: action.newText}
        }
        case 'SET-USER-PROFILE':
            return {...state, profile: action.profile}
        default:
            return state
    }
};

type ActionsType =
    ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfile>

export const updateNewPostTextAC = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    } as const
}
export const addPostAC = () => {
    return {
        type: "ADD-POST"
    } as const
}
const setUserProfile = (profile: ProfileType | null) => {
    return {
        type: "SET-USER-PROFILE",
        profile
    } as const
}

export const getUserProfile = (userId: string) => {
    return (dispatch: Dispatch) => {
        usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }
}

export default profileReducer;