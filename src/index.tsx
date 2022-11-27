import './index.css';
import {store} from "./redax/reduxStore";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import StoreContext from './StoreContext';

const renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            {/*За допомогою StoreContext, всі дочирні елементи App можуть брати store без пропсів*/}
            <StoreContext.Provider value={store}>
                <App/>
            </StoreContext.Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

//Викликаємо renderTree
renderTree()
//Викликаємо subscribe і передаємо в параметри функцію renderTree
store.subscribe(renderTree)
