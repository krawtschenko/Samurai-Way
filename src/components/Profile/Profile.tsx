import React from "react";
import style from "./Profile.module.sass"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsContainer} from "./MyPosts/PostsContainer";
import {ProfileType} from "../../redax/profileReducer";

type ProfilePropsType = {
    profile: ProfileType | null
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={style.profile}>
            <ProfileInfo profile={props.profile}/>
            <PostsContainer/>
        </div>
    )
}
