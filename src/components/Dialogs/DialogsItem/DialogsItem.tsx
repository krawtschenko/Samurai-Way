import React from "react";
import style from "../Dialogs.module.sass";
import {NavLink} from "react-router-dom";
import {DialogsItemType} from "../Dialogs";

export const DialogsItem: React.FC<DialogsItemType> = (props) => {
    return (
        <div className={style.dialog__item}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}