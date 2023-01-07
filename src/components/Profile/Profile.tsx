import React from "react";
import style from "./Profile.module.sass"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsContainer} from "./MyPosts/PostsContainer";
import {ProfileType} from "../../redax/profileReducer";

type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    updateUserStatus: (status: string) => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={style.profile}>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateUserStatus={props.updateUserStatus}
            />
            <PostsContainer/>
        </div>
    )
}
