import {v1} from "uuid";

export type DialogsType = {
    id: string
    name: string
}
export type MessagesType = {
    id: string
    message: string
}
export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
}

const dialogsPage = {
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

const dialogsReducer = (state: DialogsPageType = dialogsPage, action: ActionsType): DialogsPageType => {
    switch (action.type) {
        case 'SEND-MESSAGE': {
            const newMessage: MessagesType = {id: v1(), message: state.newMessageText}
            return {...state, messages: [...state.messages, newMessage], newMessageText: ''}
        }
        case 'UPDATE-NEW-MESSAGE-TEXT': {
            return {...state, newMessageText: action.newText}
        }
        default:
            return state
    }
};

type ActionsType = | ReturnType<typeof updateNewMessageTextAC> | ReturnType<typeof sendMessageAC>

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

export default dialogsReducer;