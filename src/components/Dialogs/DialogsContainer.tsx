import React from 'react';
import {Dialogs} from "./Dialogs";
import {StoreType} from "../../redax/reduxStore";
import {sendMessageAC, updateNewMessageTextAC} from "../../redax/dialogsReducer";

// Презентаційний компонент (для того, щоб в компонент Posts не передавати дані, а передавати тільки callback
type DialogsContainerPropsType = {
    store: StoreType
}

const DialogsContainer: React.FC<DialogsContainerPropsType> = ({store}) => {
    const state = store.getState()

    const onMessageChange = (text: string) => {
        // Викликаємо метод Dispatch з параметрами. Параметри визначають,
        // яку ф-ію треба викликати далі
        store.dispatch(updateNewMessageTextAC(text))
    }

    const sendMessage = () => {
        store.dispatch(sendMessageAC())
    }

    return (
        <Dialogs dialogs={state.dialogsPage.dialogs}
                 messages={state.dialogsPage.messages}
                 newMessageText={state.dialogsPage.newMessageText}
                 onMessageChange={onMessageChange}
                 sendMessage={sendMessage}
        />
    );
};

export default DialogsContainer;