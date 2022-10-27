import React from "react";
import style from "../Dialogs.module.sass";
import {NavLink} from "react-router-dom";

type DialogsItemPropsType = {
    id: string
    name: string
}

export const DialogsItem: React.FC<DialogsItemPropsType> = (props) => {
    return (
        <div className={style.dialog__item}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}