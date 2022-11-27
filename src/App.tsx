import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {ActionsType, StoreType} from "./redax/reduxStore";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

type AppPropsType = {
    store: StoreType
}

function App(props: AppPropsType) {
    return (
        <div className="app">
            <div className="app__wrapper">
                <Header/>
                <Navbar/>
                <div className={"app__wrapper-content"}>
                    <Route path="/profile" render={() => <Profile store={props.store}/>}
                    />
                    <Route path="/dialogs"
                           render={() => <DialogsContainer store={props.store}/>}
                    />
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </div>
            </div>
        </div>
    );
}

export default App;
