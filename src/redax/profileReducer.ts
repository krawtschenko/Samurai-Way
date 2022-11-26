import {v1} from "uuid";
import {ActionsType, PostsType, ProfilePageType} from "./state";

const ProfileReducer = (state: ProfilePageType, action: ActionsType) => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost: PostsType = {id: v1(), post: state.newPostText, likesCount: 'Likes 0'}
            state.posts.unshift(newPost)
            state.newPostText = ''
            return state
        }
        case 'UPDATE-NEW-POST-TEXT': {
            state.newPostText = action.newText
            return state
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