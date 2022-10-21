import React from "react";
import style from "./Navbar.module.sass"
import {NavLink} from "react-router-dom";

export const Navbar = () => {
  return (
    <div className={style.nav}>
      <div className={style.nav__item}>
        <NavLink to={"/profile"} className={style.nav__link} activeClassName={style.nav__link_active}>Profile</NavLink>
      </div>
      <div className={style.nav__item}>
        <NavLink to={"/dialogs"} className={style.nav__link} activeClassName={style.nav__link_active}>Messages</NavLink>
      </div>
      <div className={style.nav__item}>
        <NavLink to={"/news"} className={style.nav__link} activeClassName={style.nav__link_active}>News</NavLink>
      </div>
      <div className={style.nav__item}>
        <NavLink to={"/music"} className={style.nav__link} activeClassName={style.nav__link_active}>Music</NavLink>
      </div>
      <div className={style.nav__item}>
        <NavLink to={"/settings"} className={style.nav__link} activeClassName={style.nav__link_active}>Settings</NavLink>
      </div>
    </div>
  )
}
