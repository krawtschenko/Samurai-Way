import React from "react";
import style from "./Navbar.module.sass"

export const Navbar = () => {
  return (
    <div className={style.nav}>
      <div>
        <a href="/profile">Profile</a>
      </div>
      <div>
        <a href="/Dialogs">Messages</a>
      </div>
      <div>
        <a href="src/components/Navbar/Navbar#">News</a>
      </div>
      <div>
        <a href="src/components/Navbar/Navbar#">Music</a>
      </div>
      <div>
        <a href="src/components/Navbar/Navbar#">Settings</a>
      </div>
    </div>
  )
}
