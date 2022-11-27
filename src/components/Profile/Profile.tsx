import React from "react";
import style from "./Profile.module.sass"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../redax/reduxStore";
import PostsContainer from "./MyPosts/PostsContainer";

type ProfilePropsType = {
    store: StoreType
}

export const Profile: React.FC<ProfilePropsType> = ({store}) => {
    return (
        <div className={style.profile}>
            <ProfileInfo/>
            <PostsContainer store={store}
            />
        </div>
    )
}
