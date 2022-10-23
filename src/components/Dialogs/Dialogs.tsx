import style from './Dialogs.module.sass'
import {NavLink} from "react-router-dom";
import React from "react";
import {v1} from "uuid";

type DialogsItemType = {
    id: string
    name: string
}

type MessagesItemType = {
    id: string
    message: string
}

const DialogsItem: React.FC<DialogsItemType> = (props) => {
    return (
        <div className={style.dialog__item}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

const MessagesItem: React.FC<MessagesItemType> = (props) => {
    return (
        <div className={style.messages__item}>{props.message}</div>
    )
}

const dialogs: Array<DialogsItemType> = [
    {id: v1(), name: "Cho'Gall"},
    {id: v1(), name: "Varian"},
    {id: v1(), name: "Rexxar"},
    {id: v1(), name: "Thrall"},
    {id: v1(), name: "Garrosh"},
    {id: v1(), name: "Jaina"},
]

const messages: Array<MessagesItemType> = [
    {id: v1(), message: 'Du'},
    {id: v1(), message: 'Du hast'},
    {id: v1(), message: 'Du hast mich'}
]

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

export const Dialogs = () => {
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