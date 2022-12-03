import React from "react";
import style from "./Profile.module.sass"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsContainer} from "./MyPosts/PostsContainer";

type ProfilePropsType = {
}

export const Profile: React.FC<ProfilePropsType> = () => {
    return (
        <div className={style.profile}>
            <ProfileInfo/>
            <PostsContainer/>
        </div>
    )
}
