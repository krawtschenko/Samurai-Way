import React from "react";
import style from "./Navbar.module.sass"
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <div className={style.nav}>
            <div className={style.nav__item}>
                <NavLink to={"/profile"} activeClassName={style.active}>Profile</NavLink>
            </div>
            <div className={style.nav__item}>
                <NavLink to={"/dialogs"} activeClassName={style.active}>Messages</NavLink>
            </div>
            <div className={style.nav__item}>
                <NavLink to={"/users"} activeClassName={style.active}>Users</NavLink>
            </div>
            <div className={style.nav__item}>
                <NavLink to={"/news"} activeClassName={style.active}>News</NavLink>
            </div>
            <div className={style.nav__item}>
                <NavLink to={"/settings"} activeClassName={style.active}>Settings</NavLink>
            </div>
        </div>
    )
}
