import {v1} from "uuid";
import {ActionsType, DialogsPageType, MessagesType} from "./state";

const DialogsReducer = (state: DialogsPageType, action: ActionsType) => {
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
        default: return state
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