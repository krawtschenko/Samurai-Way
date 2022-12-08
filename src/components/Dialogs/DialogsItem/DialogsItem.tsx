import React from "react";
import style from "./DialogsItem.module.sass";
import {NavLink} from "react-router-dom";

type DialogsItemPropsType = {
    id: string
    name: string
}

export const DialogsItem: React.FC<DialogsItemPropsType> = (props) => {
    return (
        <div className={style.dialogs}>
            <NavLink to={'/dialogs/' + props.id}
                     className={style.dialog__item} activeClassName={style.active}>{props.name}</NavLink>
        </div>
    )
}