import React from "react";
import style from "./Header.module.sass"
import icon from "../../Images/logoHeader.png"
import {NavLink} from "react-router-dom";

type HeaderType = {
    login: string | null
    isAuth: boolean
}

export const Header = (props: HeaderType) => {
    return (
        <header className={style.header}>
            <img src={icon} alt="logo"/>

            <div className={style.header__loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}
