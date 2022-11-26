import {v1} from "uuid";
import {ActionsType, DialogsPageType, MessagesType} from "./store";

const initialState = {
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

const DialogsReducer = (state: DialogsPageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SEND-MESSAGE': {
            const newMessage: MessagesType = {id: v1(), message: state.newMessageText}
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        }
        case 'UPDATE-NEW-MESSAGE-TEXT': {
            state.newMessageText = action.newText
            return state
        }
        default:
            return state
    }
};

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

export default DialogsReducer;