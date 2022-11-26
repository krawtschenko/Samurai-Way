import {combineReducers, createStore} from "redux";
import ProfileReducer, {addPostAC, updateNewPostTextAC} from "./profileReducer";
import DialogsReducer, {sendMessageAC, updateNewMessageTextAC} from "./dialogsReducer";

// Типізація
export type PostsType = {
    id: string
    post: string
    likesCount: string
}
export type DialogsType = {
    id: string
    name: string
}
export type MessagesType = {
    id: string
    message: string
}
export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}
export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
// Типізація для actions
// ReturnType встановлює тип, який повертає обрана ф-ія
export type ActionsType =
    ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewMessageTextAC>
    | ReturnType<typeof sendMessageAC>

const reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer
})

export const store = createStore(reducers)

