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
import {AllActionType, StateType} from "./redax/state";

type AppPropsType = {
    state: StateType
    dispatch: (action: AllActionType) => void
}

function App(props: AppPropsType) {
    return (
        <div className="app">
            <div className="app__wrapper">
                <Header/>
                <Navbar/>
                <div className={"app__wrapper-content"}>
                    <Route path="/profile" render={() => <Profile profilePage={props.state.profilePage}
                                                                  dispatch={props.dispatch}/>}
                    />
                    <Route path="/dialogs"
                           render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs}
                                                  messages={props.state.dialogsPage.messages}
                                                  newMessageText={props.state.dialogsPage.newMessageText}
                                                  dispatch={props.dispatch}/>}
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
