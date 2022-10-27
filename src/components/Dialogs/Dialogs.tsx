import style from './Dialogs.module.sass'
import React from "react";
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {MessagesItem} from "./MessagesItem/MessagesItem";
import {DialogsItemType, MessagesItemType} from "../../index";

type DialogsPropsType = {
    dialogs: Array<DialogsItemType>
    messages: Array<MessagesItemType>
}

export const Dialogs: React.FC<DialogsPropsType> = ({dialogs, messages}) => {
    const dialogsElements = dialogs.map(person => {
        return (
            <DialogsItem id={person.id} name={person.name}/>
        )
    })

    const messagesElements = messages.map(message => {
        return (
            <MessagesItem id={message.id} message={message.message}/>
        )
    })

    return (
        <div className={style.dialog}>
            <div className={style.dialog__items}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
        </div>
    )
}