import {Posts} from "./Posts";
import {addPostAC, updateNewPostTextAC} from "../../../redax/profileReducer";
import {connect} from "react-redux";
import {AppStateType, PostsType} from "../../../redax/reduxStore";
import {Dispatch} from "redux";

// Презентаційний компонент (для того, щоб в компонент Posts не передавати дані, а передавати тільки callback)
type MapStatePropsType = {
    posts: PostsType[]
    newPostText: string
}

type MapDispatchPropsType = {
    onPostChange: (text: string) => void
    addPost: () => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        onPostChange: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)