import style from './ProfileInfo.module.sass'
import React from "react";
import background from "./savana.jpg"

export const ProfileInfo = () => {
    return (
        <div className={style.profileInfo}>
            <img
                src={background}
                alt="background"/>
        </div>
    )
}