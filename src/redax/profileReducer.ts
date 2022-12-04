import {v1} from "uuid";
import {ActionsType, PostsType, ProfilePageType} from "./reduxStore";

const initialState = {
    posts: [
        {id: v1(), post: 'Post 1', likesCount: 'Likes 2'},
        {id: v1(), post: 'Post 2', likesCount: 'Likes 3'},
        {id: v1(), post: 'Post 3', likesCount: 'Likes 2'},
        {id: v1(), post: 'Post 4', likesCount: 'Likes 1'},
        {id: v1(), post: 'Post 5', likesCount: 'Likes 4'}
    ],
    newPostText: ''
}

const ProfileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {
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