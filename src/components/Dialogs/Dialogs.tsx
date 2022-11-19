import style from './Dialogs.module.sass'
import React, {ChangeEvent} from "react";
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {MessagesItem} from "./MessagesItem/MessagesItem";
import {DialogsType, MessagesType} from "../../redax/state";

type DialogsPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
    sendMessage: () => void
    updateNewMessageText: (newText: string) => void
}

export const Dialogs: React.FC<DialogsPropsType> = ({
                                                        dialogs,
                                                        messages,
                                                        newMessageText,
                                                        sendMessage,
                                                        updateNewMessageText
                                                    }) => {
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

    const onChangeInputHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewMessageText(event.currentTarget.value)
    }

    return (
        <div className={style.dialog}>
            <div className={style.dialog__items}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <textarea value={newMessageText} onChange={(event) => onChangeInputHandler(event)}/>
                <button onClick={sendMessage}>Send a message</button>
            </div>
        </div>
    )
}