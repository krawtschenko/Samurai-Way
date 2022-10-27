import React from "react";
import {Post} from "./Post/Post";
import {PostsType} from "../../../index";

type PostsPropsType = {
    posts: Array<PostsType>
}

export const Posts: React.FC<PostsPropsType> = ({posts}) => {

    const postsElements = posts.map(post => {
        return (
            <Post post={post.post}/>
        )
    })

    return (
        <div>
            <div>
                ava + descriptions
            </div>
            <div>
                Posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <div>
                    New post
                </div>
                {postsElements}
            </div>
        </div>
    )
}
