import './index.css';
import {store} from "./redax/reduxStore";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import {Provider} from "react-redux";

// const renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            {/*За допомогою Provider, всі дочирні елементи App можуть брати store без пропсів*/}
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
// }

// //Викликаємо renderTree
// renderTree()
// //Викликаємо subscribe і передаємо в параметри функцію renderTree
// store.subscribe(renderTree)
