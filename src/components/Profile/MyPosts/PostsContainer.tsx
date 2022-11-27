import React from 'react';
import {Posts} from "./Posts";
import {addPostAC, updateNewPostTextAC} from "../../../redax/profileReducer";
import StoreContext from '../../../StoreContext';

// Презентаційний компонент (для того, щоб в компонент Posts не передавати дані, а передавати тільки callback)
type PostsContainerPropsType = {
}

const PostsContainer: React.FC<PostsContainerPropsType> = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                const onPostChange = (text: string) => {
                    store.dispatch(updateNewPostTextAC(text))
                }

                const addPost = () => {
                    store.dispatch(addPostAC())
                }

                return (
                    <Posts posts={store.getState().profilePage.posts}
                           newPostText={store.getState().profilePage.newPostText}
                           onPostChange={onPostChange}
                           addPost={addPost}/>)
            }}
        </StoreContext.Consumer>
    );
};

export default PostsContainer;