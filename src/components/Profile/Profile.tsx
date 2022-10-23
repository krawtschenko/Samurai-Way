import React from "react";
import style from "./Profile.module.sass"
import {Posts} from "./MyPosts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const Profile = () => {
  return (
    <div className={style.profile}>
      <ProfileInfo/>
      <Posts/>
    </div>
  )
}
