import React from 'react';
import {Dialogs} from "./Dialogs";
import {sendMessageAC, updateNewMessageTextAC} from "../../redax/dialogsReducer";
import StoreContext from '../../StoreContext';

// Презентаційний компонент (для того, щоб в компонент Posts не передавати дані, а передавати тільки callback
type DialogsContainerPropsType = {
    // store: StoreType
}

const DialogsContainer: React.FC<DialogsContainerPropsType> = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                const onMessageChange = (text: string) => {
                    // Викликаємо метод Dispatch з параметрами. Параметри визначають,
                    // яку ф-ію треба викликати далі
                    store.dispatch(updateNewMessageTextAC(text))
                }

                const sendMessage = () => {
                    store.dispatch(sendMessageAC())
                }

                return (
                    <Dialogs dialogs={store.getState().dialogsPage.dialogs}
                             messages={store.getState().dialogsPage.messages}
                             newMessageText={store.getState().dialogsPage.newMessageText}
                             onMessageChange={onMessageChange}
                             sendMessage={sendMessage}/>
                )
            }}
        </StoreContext.Consumer>
    );
};

export default DialogsContainer;