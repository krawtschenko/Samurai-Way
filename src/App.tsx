import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsItemType, MessagesItemType, PostsType} from "./index";

type AppPropsType = {
    posts: Array<PostsType>
    dialogs: Array<DialogsItemType>
    messages: Array<MessagesItemType>
}

function App (props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app">
                <div className="app__wrapper">
                    <Header/>
                    <Navbar/>
                    <div className={"app__wrapper-content"}>
                        <Route path="/profile" render={() => <Profile posts={props.posts}/>}/>
                        <Route path="/dialogs" render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                        <Route path="/news" render={() => <News/>}/>
                        <Route path="/music" render={() => <Music/>}/>
                        <Route path="/settings" render={() => <Settings/>}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
