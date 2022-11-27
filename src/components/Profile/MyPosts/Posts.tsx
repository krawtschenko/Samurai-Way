import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import {PostsType} from "../../../redax/reduxStore";

type PostsPropsType = {
    posts: Array<PostsType>
    newPostText: string
    onPostChange: (text: string) => void
    addPost: () => void
}

export const Posts: React.FC<PostsPropsType> = ({posts, newPostText, onPostChange, addPost}) => {
    // Відрисовуємо всі пости
    const postsElements = posts.map(post => {
        return (
            <Post key={post.id} post={post.post} likesCount={post.likesCount}/>
        )
    })

    const onChangeInputHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        onPostChange(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        addPost()
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
                    <button onClick={onClickButtonHandler}>Add post</button>
                </div>
                <div>
                    {postsElements}
                </div>
            </div>
        </div>
    )
}
