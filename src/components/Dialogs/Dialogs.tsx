import style from './Dialogs.module.sass'
import {NavLink} from "react-router-dom";
import React from "react";

type DialogsItemType = {
    id: number
    name: string
}

type MessagesItemType = {
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

export const Dialogs = () => {
    return (
        <div className={style.dialog}>
            <div className={style.dialog__items}>
                <DialogsItem name={"Cho'Gall"} id={1}/>
                <DialogsItem name={'Varian'} id={2}/>
                <DialogsItem name={'Rexxar'} id={3}/>
                <DialogsItem name={'Thrall'} id={4}/>
                <DialogsItem name={'Garrosh'} id={5}/>
                <DialogsItem name={'Jaina'} id={6}/>
            </div>
            <div className={style.messages}>
                <MessagesItem message={'Hello'}/>
                <MessagesItem message={'Wie geht es dir?'}/>
                <MessagesItem message={'How are u?'}/>
            </div>
        </div>
    )
}