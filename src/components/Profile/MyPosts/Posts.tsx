import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import {AllActionType, PostsType} from "../../../redax/state";

type PostsPropsType = {
    posts: Array<PostsType>
    newPostText: string
    dispatch: (action: AllActionType) => void
}

export const Posts: React.FC<PostsPropsType> = ({posts, newPostText, dispatch}) => {
    // Відрисовуємо всі пости
    const postsElements = posts.map(post => {
        return (
            <Post key={post.id} post={post.post} likesCount={post.likesCount}/>
        )
    })

    const onChangeInputHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch({type: "UPDATE-NEW-POST-TEXT", newText: event.currentTarget.value})
    }

    const onClickButtonHandler = () => {
        dispatch({type: "ADD-POST"})
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
