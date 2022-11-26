import './index.css';
import {store} from "./redax/reduxStore";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";

const renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()}
                // Метод bind() створює нову функцію, яка при виклику встановлює,
                // як контекст виконання this, надане значення (store)
                 dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

//Викликаємо renderTree
renderTree()
//Викликаємо subscribe і передаємо в параметри функцію renderTree
store.subscribe(renderTree)
