import './index.css';
import {addPost, state, subscribe, updateNewPostText} from "./redax/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";

const renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

//Викликаємо renderTree
renderTree()
//Викликаємо subscribe і передаємо в параметри функцію renderTree
subscribe(renderTree)
