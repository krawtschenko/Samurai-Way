import React from "react";
import style from "./Profile.module.sass"
import {Posts} from "./MyPosts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../../index";

type ProfilePropsType = {
    posts: Array<PostsType>
}

export const Profile: React.FC<ProfilePropsType> = ({posts}) => {
  return (
    <div className={style.profile}>
      <ProfileInfo/>
      <Posts posts={posts}/>
    </div>
  )
}
