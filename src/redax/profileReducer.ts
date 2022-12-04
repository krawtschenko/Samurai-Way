import {v1} from "uuid";

export type PostsType = {
    id: string
    post: string
    likesCount: string
}
export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}

const profilePage = {
    posts: [
        {id: v1(), post: 'Post 1', likesCount: 'Likes 2'},
        {id: v1(), post: 'Post 2', likesCount: 'Likes 3'},
        {id: v1(), post: 'Post 3', likesCount: 'Likes 2'},
        {id: v1(), post: 'Post 4', likesCount: 'Likes 1'},
        {id: v1(), post: 'Post 5', likesCount: 'Likes 4'}
    ],
    newPostText: ''
}

const ProfileReducer = (state: ProfilePageType = profilePage, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost: PostsType = {id: v1(), post: state.newPostText, likesCount: 'Likes 0'}
            return {...state, posts: [newPost, ...state.posts], newPostText: ''}
        }
        case 'UPDATE-NEW-POST-TEXT': {
            return {...state, newPostText: action.newText}
        }
        default:
            return state
    }
};

type ActionsType = ReturnType<typeof updateNewPostTextAC> | ReturnType<typeof addPostAC>

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

export default ProfileReducer;