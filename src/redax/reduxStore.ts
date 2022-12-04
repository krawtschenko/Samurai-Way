import {combineReducers, createStore} from "redux";
import ProfileReducer from "./profileReducer";
import DialogsReducer from "./dialogsReducer";
import {UsersReducer} from "./usersReducer";

// Типізація для Redux
export type AppStateType = ReturnType<typeof reducers>

const reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    usersPage: UsersReducer
})

export const store = createStore(reducers)

