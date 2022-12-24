import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import UsersContainer from "./components/Users/UsersContainer";


function App() {
    return (
        <div className="app">
            <div className="app__wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className={"app__wrapper-content"}>
                    <Route path="/profile/:userId" render={() => <ProfileContainer/>}/>
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
