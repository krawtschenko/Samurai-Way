import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


function App() {
    return (
        <div className="app">
            <div className="app__wrapper">
                <Header/>
                <Navbar/>
                <div className={"app__wrapper-content"}>
                    <Route path="/profile" render={() => <Profile/>}/>
                    <Route path="/dialogs"
                           render={() => <DialogsContainer/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </div>
            </div>
        </div>
    );
}

export default App;
