import React from "react";
import style from "./Header.module.sass"

export const Header = () => {
  return (
    <header className={style.header}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/235/235361.png"
        alt="logo"/>
    </header>
  )
}
