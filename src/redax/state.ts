import {v1} from "uuid";

export type PostsType = {
    id: string
    post: string
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
            {id: v1(), post: 'Post 1'},
            {id: v1(), post: 'Post 2'},
            {id: v1(), post: 'Post 3'},
            {id: v1(), post: 'Post 4'},
            {id: v1(), post: 'Post 5'}
        ]
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