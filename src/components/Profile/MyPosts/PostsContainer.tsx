import React from 'react';
import {StoreType} from "../../../redax/reduxStore";
import {Posts} from "./Posts";
import {addPostAC, updateNewPostTextAC} from "../../../redax/profileReducer";

// Презентаційний компонент (для того, щоб в компонент Posts не передавати дані, а передавати тільки callback
type PostsContainerPropsType = {
    store: StoreType
}

const PostsContainer: React.FC<PostsContainerPropsType> = ({store}) => {
    const state = store.getState()

    const onPostChange = (text: string) => {
        store.dispatch(updateNewPostTextAC(text))
    }

    const addPost = () => {
        store.dispatch(addPostAC())
    }

    return (
        <Posts posts={state.profilePage.posts}
               newPostText={state.profilePage.newPostText}
               onPostChange={onPostChange}
               addPost={addPost}/>
    );
};

export default PostsContainer;