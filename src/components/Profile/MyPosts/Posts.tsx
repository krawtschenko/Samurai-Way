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

    const postsElements = posts.map(post => {
        return (
            <Post key={post.id} post={post.post} likesCount={post.likesCount}/>
        )
    })

    // let newPostElement = React.createRef<HTMLTextAreaElement>() // Створюємо посилання та привʼязуємо до textarea

    const addPostHandler = () => {
            addPost()
    }

    const onChangeInputHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        // const text = newPostElement.current?.value
        // if (text) {
        //     updateNewPostText(text)
        // }
        updateNewPostText(event.currentTarget.value)
    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    {/*<textarea ref={newPostElement} value={newPostText} onChange={onChangeInputHandler}/> /!*Привʼязали посилання ref*!/*/}
                    <textarea value={newPostText} onChange={(event) => {onChangeInputHandler(event)}}/>
                    <button onClick={addPostHandler}>Add post
                    </button>
                </div>
                <div>
                    New post
                </div>
                {postsElements}
            </div>
        </div>
    )
}
