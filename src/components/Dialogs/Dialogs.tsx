import style from './Dialogs.module.sass'
import React, {ChangeEvent} from "react";
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {MessagesItem} from "./MessagesItem/MessagesItem";
import {DialogsType, MessagesType} from "../../redax/dialogsReducer";
import {Redirect} from "react-router-dom";

type DialogsPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
    isAuth: boolean
    onMessageChange: (text: string) => void
    sendMessage: () => void
}

export const Dialogs: React.FC<DialogsPropsType> = (
    {
        dialogs,
        messages,
        newMessageText,
        isAuth,
        onMessageChange,
        sendMessage
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
        onMessageChange(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        sendMessage()
    }

    // Якшо ми не залоговані, то за допомогою Redirect перенаправляє нас на вказану адресу
    if (!isAuth) {
        return <Redirect to={"/login"}/>
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