import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";


function App() {
    return (
        <div className="app">
            <div className="app__wrapper">
                <Header/>
                <Navbar/>
                <div className={"app__wrapper-content"}>
                    <Route path="/profile" render={() => <ProfileContainer/>}/>
                    <Route path="/dialogs"
                           render={() => <DialogsContainer/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </div>
            </div>
        </div>
    );
}

export default App;
