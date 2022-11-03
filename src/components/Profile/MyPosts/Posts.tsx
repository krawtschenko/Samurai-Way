import React from "react";
import {Post} from "./Post/Post";
import {PostsType} from "../../../redax/state";

type PostsPropsType = {
    posts: Array<PostsType>
}

export const Posts: React.FC<PostsPropsType> = ({posts}) => {

    const postsElements = posts.map(post => {
        return (
            <Post key={post.id} post={post.post}/>
        )
    })

    let newPostElement = React.createRef<HTMLTextAreaElement>() // Створюємо посилання та привʼязуємо до textarea

    const addPost = () => {
        const text = newPostElement.current?.value //Якшо current існує, то іде далі (value). Якшо ні, то null
        alert(text)
    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea> {/*Привʼязали посилання*/}
                    <button onClick={addPost}>Add post
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
