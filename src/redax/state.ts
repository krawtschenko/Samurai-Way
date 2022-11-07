import {v1} from "uuid";
import {renderTree} from "../render";

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
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export const state: StateType = {
    profilePage: {
        posts:  [
            {id: v1(), post: 'Post 1', likesCount: 'Likes 2'},
            {id: v1(), post: 'Post 2', likesCount: 'Likes 3'},
            {id: v1(), post: 'Post 3', likesCount: 'Likes 2'},
            {id: v1(), post: 'Post 4', likesCount: 'Likes 1'},
            {id: v1(), post: 'Post 5', likesCount: 'Likes 4'}
        ],
        newPostText: ''
    },
    dialogsPage: {
        dialogs: [
            {id: v1(), name: "Cho'Gall"},
            {id: v1(), name: "Varian"},
            {id: v1(), name: "Rexxar"},
            {id: v1(), name: "Thrall"},
            {id: v1(), name: "Garrosh"},
            {id: v1(), name: "Jaina"},
        ],
        messages: [
            {id: v1(), message: 'Du'},
            {id: v1(), message: 'Du hast'},
            {id: v1(), message: 'Du hast mich'}
        ]
    }
}

export const addPost = () => {
    const newPost: PostsType = {id: v1(), post: state.profilePage.newPostText, likesCount: 'Likes 0'}
    state.profilePage.posts.unshift(newPost)
    state.profilePage.newPostText = ''
    renderTree(state)
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    renderTree(state)
}