import React from "react";
import {Post} from "./Post/Post";
import {PostsType} from "../../../redax/state";

type PostsPropsType = {
    posts: Array<PostsType>
    addPost: (postMessage: string) => void
}

export const Posts: React.FC<PostsPropsType> = ({posts, addPost}) => {

    const postsElements = posts.map(post => {
        return (
            <Post key={post.id} post={post.post} likesCount={post.likesCount}/>
        )
    })

    let newPostElement = React.createRef<HTMLTextAreaElement>() // Створюємо посилання та привʼязуємо до textarea

    const addPostHandler = () => {
        const text = newPostElement.current?.value //Якшо current існує, то іде далі (value). Якшо ні, то undefined
        if (text) {
            addPost(text)
            // if (newPostElement.current) {
            //     newPostElement.current.value = ''
            // }
            newPostElement.current && (newPostElement.current.value = '') // Якшо newPostElement.current існує, то присваюємо value пустий рядок
        }
    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea> {/*Привʼязали посилання*/}
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
