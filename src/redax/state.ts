import {v1} from "uuid";

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
export type StoreType = {
    _state: StateType
    getState: () => StateType
    _onChange: () => void
    subscribe: (callback: () => void) => void
    dispatch: (action: ActionsType) => void
}
// Типізація для actions
// Встановлює тип, який повертає обрана ф-ія
export type ActionsType =
    ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewMessageTextAC>
    | ReturnType<typeof sendMessageAC>

// Ф-ії які повертають тип для action creator
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
export const updateNewMessageTextAC = (newText: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        newText: newText
    } as const
}
export const sendMessageAC = () => {
    return {
        type: "SEND-MESSAGE"
    } as const
}

// Обʼєкт, в якому знаходяться всі дані
export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
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
                {id: v1(), name: "Neo"},
                {id: v1(), name: "Thor"},
                {id: v1(), name: "Hulk"},
                {id: v1(), name: "Thrall"},
                {id: v1(), name: "Iron Man"},
                {id: v1(), name: "Capitan America"},
            ],
            messages: [
                {id: v1(), message: 'Du'},
                {id: v1(), message: 'Du hast'},
                {id: v1(), message: 'Du hast mich'}
            ],
            newMessageText: ''
        }
    },
    getState() {
        return this._state
    },
    // Оновлення сторінки
    _onChange() {
        console.log('State is ready')
    },
    //Функція subscribe, яка отримує в параметр функцію (renderTree) із index
    subscribe(callback: () => void) {
        //Перезаписуємо функцію onChange і тепер вона буде виконувати те саме що і renderTree
        this._onChange = callback
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost: PostsType = {id: v1(), post: this._state.profilePage.newPostText, likesCount: 'Likes 0'}
            this._state.profilePage.posts.unshift(newPost)
            this._state.profilePage.newPostText = ''
            this._onChange()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._onChange()
        } else if (action.type === 'SEND-MESSAGE') {
            const newMessage: MessagesType = {id: v1(), message: this._state.dialogsPage.newMessageText}
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._onChange()
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newText
            this._onChange()
        }
    },
}