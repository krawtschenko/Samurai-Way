import React from "react";
import style from "./Profile.module.sass"
import {Posts} from "./MyPosts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../../redax/state";

type ProfilePropsType = {
    posts: PostsType[]
    addPost: (postMessage: string) => void
}

export const Profile: React.FC<ProfilePropsType> = ({posts, addPost}) => {
  return (
    <div className={style.profile}>
      <ProfileInfo/>
      <Posts posts={posts} addPost={addPost}/>
    </div>
  )
}
