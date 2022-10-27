import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {v1} from "uuid";

export type PostsType = {
    id: string
    post: string
}

export type DialogsItemType = {
    id: string
    name: string
}

export type MessagesItemType = {
    id: string
    message: string
}

const posts: Array<PostsType> = [
    {id: v1(), post: 'Post 1'},
    {id: v1(), post: 'Post 2'},
    {id: v1(), post: 'Post 3'},
    {id: v1(), post: 'Post 4'},
    {id: v1(), post: 'Post 5'}
]

const dialogs: Array<DialogsItemType> = [
    {id: v1(), name: "Cho'Gall"},
    {id: v1(), name: "Varian"},
    {id: v1(), name: "Rexxar"},
    {id: v1(), name: "Thrall"},
    {id: v1(), name: "Garrosh"},
    {id: v1(), name: "Jaina"},
]

const messages: Array<MessagesItemType> = [
    {id: v1(), message: 'Du'},
    {id: v1(), message: 'Du hast'},
    {id: v1(), message: 'Du hast mich'}
]

ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages}/>,
  document.getElementById('root')
);