import React from "react";
import style from "../Dialogs.module.sass";

type MessagesItemPropsType = {
    id?: string
    message: string
}

export const MessagesItem: React.FC<MessagesItemPropsType> = ({message}) => {
    return (
        <div className={style.messages__item}>{message}</div>
    )
}