import React from "react";
import style from "./Profile.module.sass"
import {Posts} from "./MyPosts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsType, ProfilePageType} from "../../redax/store";

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsType) => void
}

export const Profile: React.FC<ProfilePropsType> = ({profilePage, dispatch}) => {
  return (
    <div className={style.profile}>
      <ProfileInfo/>
      <Posts posts={profilePage.posts}
             newPostText={profilePage.newPostText}
             dispatch={dispatch}
      />
    </div>
  )
}
