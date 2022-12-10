import React from "react";
import style from "./Post.module.sass"
import userIcon from '../../../../Images/userIcon.png'

type PostType = {
    post: string
    likesCount: string
}

export const Post = (props: PostType) => {
    return (
        <div className={style.post}>
            <img src={userIcon}
                 alt="contact"/>
            <div>{`${props.post} ${props.likesCount}`}</div>
        </div>

    )
}
