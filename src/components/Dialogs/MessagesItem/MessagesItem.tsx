import React from "react";
import style from "../Dialogs.module.sass";
import {MessagesItemType} from "../Dialogs";

export const MessagesItem: React.FC<MessagesItemType> = (props) => {
    return (
        <div className={style.messages__item}>{props.message}</div>
    )
}