import React from "react";
import style from "./Profile.module.sass"
import {Posts} from "./MyPosts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redax/state";

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export const Profile: React.FC<ProfilePropsType> = ({profilePage, addPost, updateNewPostText}) => {
  return (
    <div className={style.profile}>
      <ProfileInfo/>
      <Posts posts={profilePage.posts}
             addPost={addPost}
             newPostText={profilePage.newPostText}
             updateNewPostText={updateNewPostText}
      />
    </div>
  )
}
