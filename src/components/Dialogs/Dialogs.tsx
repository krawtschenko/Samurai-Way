import style from './Dialogs.module.sass'
import React, {ChangeEvent} from "react";
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {MessagesItem} from "./MessagesItem/MessagesItem";
import {ActionsType, DialogsType, MessagesType} from "../../redax/store";
import {sendMessageAC, updateNewMessageTextAC} from "../../redax/dialogsReducer";

type DialogsPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
    dispatch: (action: ActionsType) => void

}

export const Dialogs: React.FC<DialogsPropsType> = ({
                                                        dialogs,
                                                        messages,
                                                        newMessageText,
                                                        dispatch
                                                    }) => {
    // Відрисовуємо всі діалоги
    const dialogsElements = dialogs.map(person => {
        return (
            <DialogsItem key={person.id} id={person.id} name={person.name}/>
        )
    })

    // Відрисовуємо всі повідомлення
    const messagesElements = messages.map(message => {
        return (
            <MessagesItem key={message.id} id={message.id} message={message.message}/>
        )
    })

    const onChangeInputHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        // Викликаємо метод Dispatch з параметрами. Параметри визначають,
        // яку ф-ію треба викликати далі
        dispatch(updateNewMessageTextAC(event.currentTarget.value))
    }

    const onClickButtonHandler = () => {
        dispatch(sendMessageAC())
    }

    return (
        <div className={style.dialog}>
            <div className={style.dialog__items}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <textarea value={newMessageText} onChange={(event) => onChangeInputHandler(event)}/>
                <button onClick={onClickButtonHandler}>Send a message</button>
            </div>
        </div>
    )
}