import React from "react";
import style from "./Header.module.sass"
import icon from "./logoHeader.png"

export const Header= () => {
  return (
    <header className={style.header}>
      <img
        src={icon}
        alt="logo"/>
    </header>
  )
}
