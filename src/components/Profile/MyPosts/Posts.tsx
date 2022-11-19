import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import {PostsType} from "../../../redax/state";

type PostsPropsType = {
    posts: Array<PostsType>
    newPostText: string
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export const Posts: React.FC<PostsPropsType> = ({posts, newPostText, addPost, updateNewPostText}) => {
    // Відрисовуємо всі пости
    const postsElements = posts.map(post => {
        return (
            <Post key={post.id} post={post.post} likesCount={post.likesCount}/>
        )
    })

    const onChangeInputHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewPostText(event.currentTarget.value)
    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={newPostText}
                              onChange={(event) => {
                                  onChangeInputHandler(event)
                              }}/>
                    <button onClick={addPost}>Add post</button>
                </div>
                <div>
                    {postsElements}
                </div>
            </div>
        </div>
    )
}
