import style from './Dialogs.module.sass'
import React, {KeyboardEvent} from "react";
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {MessagesItem} from "./MessagesItem/MessagesItem";
import {DialogsType, MessagesType} from "../../redax/state";

type DialogsPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}

export const Dialogs: React.FC<DialogsPropsType> = ({dialogs, messages}) => {
    const dialogsElements = dialogs.map(person => {
        return (
            <DialogsItem key={person.id} id={person.id} name={person.name}/>
        )
    })

    const messagesElements = messages.map(message => {
        return (
            <MessagesItem key={message.id} id={message.id} message={message.message}/>
        )
    })

    const newMessageElement = React.createRef<HTMLTextAreaElement>()

    const keyDownHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter') {
            sendMessage()
        }
    }

    const sendMessage = () => {
        const text = newMessageElement.current?.value
        alert(text)
    }

    return (
        <div className={style.dialog}>
            <div className={style.dialog__items}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <textarea onKeyDown={keyDownHandler} ref={newMessageElement} />
                <button onClick={sendMessage}>Send a message</button>
            </div>
        </div>
    )
}