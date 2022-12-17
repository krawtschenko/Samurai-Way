import {connect} from "react-redux";
import {AppStateType} from "../../redax/reduxStore";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UsersType,
} from "../../redax/usersReducer";
import {Dispatch} from "redux";
import React from "react";
import axios from "axios";
import {Users} from "./Users";

type UsersPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userID: string) => void
    unFollow: (userID: string) => void
    setUsers: (users: any) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}

class UsersComponent extends React.Component<UsersPropsType> {
    // componentDidMount() викликається відразу після монтування компонента
    componentDidMount() {
        // Відправляємо запрос на сервер
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            // Після того як на запрос прийшла відповідь response, міняємо деякі дані
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (currentPage: number) => {
        // При клікі міняємо в сторі нинішню сторінку
        this.props.setCurrentPage(currentPage)
        // І робимо новий запрос, щоб оновити дані
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <Users users={this.props.users}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   setUsers={this.props.setUsers}
                   pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
            />
        )
    }
}

type MapStatePropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
type MapDispatchPropsType = {
    follow: (userID: string) => void
    unFollow: (userID: string) => void
    setUsers: (users: any) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}

function mapStateToProps(state: AppStateType): MapStatePropsType {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersComponent)