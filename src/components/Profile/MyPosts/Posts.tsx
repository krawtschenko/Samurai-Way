import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import {ActionsType, PostsType} from "../../../redax/store";
import {addPostAC, updateNewPostTextAC} from "../../../redax/profileReducer";

type PostsPropsType = {
    posts: Array<PostsType>
    newPostText: string
    dispatch: (action: ActionsType) => void
}

export const Posts: React.FC<PostsPropsType> = ({posts, newPostText, dispatch}) => {
    // Відрисовуємо всі пости
    const postsElements = posts.map(post => {
        return (
            <Post key={post.id} post={post.post} likesCount={post.likesCount}/>
        )
    })

    const onChangeInputHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewPostTextAC(event.currentTarget.value))
    }

    const onClickButtonHandler = () => {
        dispatch(addPostAC())
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
