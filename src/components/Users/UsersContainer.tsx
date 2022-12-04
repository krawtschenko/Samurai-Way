import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redax/reduxStore";
import {followAC, setUsersAC, unFollowAC, UsersType,} from "../../redax/usersReducer";
import {Dispatch} from "redux";

type MapStatePropsType = {
    users: UsersType[]
}
type MapDispatchPropsType = {
    follow: (userID: string) => void
    unFollow: (userID: string) => void
    setUsers: (users: any) => void
}

function mapStateToProps(state: AppStateType): MapStatePropsType {
    return {
        users: state.usersPage.users
    }
}

function mapDispatchToProps(dispatch: Dispatch): MapDispatchPropsType {
    return {
        follow: (userID: string) => {
            dispatch(followAC(userID))
        },
        unFollow: (userID: string) => {
            dispatch(unFollowAC(userID))
        },
        setUsers: (users: UsersType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)