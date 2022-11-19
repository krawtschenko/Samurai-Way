import {v1} from "uuid";

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
    onChange: () => void
    subscribe: (callback: () => void) => void
    updateNewPostText: (newText: string) => void
    addPost: () => void
    updateNewMessageText: (newText: string) => void
    sendMessage: () => void
}

export const store: StoreType = {
    _state: {
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
            ],
            newMessageText: ''
        }
    },
    getState() {
        return this._state
    },
    // Оновлення сторінки
    onChange() {
        console.log('State is ready')
    },
    //Функція subscribe, яка отримує в параметр функцію (renderTree)
    subscribe(callback: () => void) {
    //Перезаписуємо функцію onChange і тепер вона буде виконувати те саме що і renderTree
    this.onChange = callback
},
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this.onChange()
    },
    addPost() {
        const newPost: PostsType = {id: v1(), post: this._state.profilePage.newPostText, likesCount: 'Likes 0'}
        this._state.profilePage.posts.unshift(newPost)
        this._state.profilePage.newPostText = ''
        this.onChange()
    },
    updateNewMessageText(newText: string) {
        this._state.dialogsPage.newMessageText = newText
        this.onChange()
    },
    sendMessage() {
        const newMessage: MessagesType = {id: v1(), message: this._state.dialogsPage.newMessageText}
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this.onChange()
    }
}