import React from "react";
import style from "./Post.module.sass"

type PostType = {
  post: string
}

export const Post = (props: PostType) => {
  return (
    <div className={style.post}>
      <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-contact-outline-512.png" alt="contact"/>
      <div>{props.post}</div>
    </div>

  )
}
