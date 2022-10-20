import React from "react";
import style from "./Profile.module.sass"
import {Posts} from "./MyPosts/Posts";

export const Profile = () => {
  return (
    <div className={style.profile}>
      <div>
        <img
          src="https://funart.pro/uploads/posts/2021-04/1618238917_52-p-savanni-i-redkolesya-zhivotnie-zhivotnie-k-57.jpg"
          alt="background"/>
      </div>
      <Posts/>
    </div>
  )
}
