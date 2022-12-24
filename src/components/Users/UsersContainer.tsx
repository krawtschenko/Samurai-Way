import {connect} from "react-redux";
import {AppStateType} from "../../redax/reduxStore";
import {
    follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsLoading, unFollow,
    UsersType,
} from "../../redax/usersReducer";
import React, {FC} from "react";
import axios from "axios";
import {Users} from "./Users";
import Preloader from "../optional/Preloader";
import {compose} from "redux";

type UsersContainerPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
    follow: (userID: string) => void
    unFollow: (userID: string) => void
    setUsers: (users: any) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsLoading: (isLoading: boolean) => void
}

class UsersContainer extends React.Component<UsersContainerPropsType> {
    // componentDidMount() викликається відразу після монтування компонента
    componentDidMount() {
        this.props.toggleIsLoading(true)
        // Відправляємо запрос на сервер
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            // Після того як на запрос прийшла відповідь response, міняємо деякі дані
            .then(response => {
                this.props.toggleIsLoading(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (currentPage: number) => {
        // При клікі міняємо в сторі нинішню сторінку
        this.props.setCurrentPage(currentPage)
        this.props.toggleIsLoading(true)
        // І робимо новий запрос, щоб оновити дані
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsLoading(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <>
                {this.props.isLoading ? <Preloader/> : null}
                <Users users={this.props.users}
                       follow={this.props.follow}
                       unFollow={this.props.unFollow}
                       setUsers={this.props.setUsers}
                       pageSize={this.props.pageSize}
                       totalUsersCount={this.props.totalUsersCount}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                />

            </>
        )
    }
}

type MapStatePropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
}

function mapStateToProps(state: AppStateType): MapStatePropsType {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading
    }
}

export default compose<FC>(connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsLoading
}))(UsersContainer)