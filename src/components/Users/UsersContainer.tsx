import {connect} from "react-redux";
import {AppStateType} from "../../redax/reduxStore";
import {
    follow,
    getUsers,
    unfollow,
    UsersType,
} from "../../redax/usersReducer";
import React, {FC} from "react";
import {Users} from "./Users";
import Preloader from "../optional/Preloader";
import {compose} from "redux";

// Типи для класового компонента
type UsersContainerPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
    followingIsProgress: Array<string>
    getUsers: (currentPage: number, pageSize: number) => void
    follow: (userID: string) => void
    unfollow: (userID: string) => void
}

class UsersContainer extends React.Component<UsersContainerPropsType> {
    // componentDidMount() викликається відразу після монтування компонента
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    // onPageChanged - це метод в класі UsersContainer, який оновлює сторінку юзерів
    onPageChanged = (currentPage: number) => {
        this.props.getUsers(currentPage, this.props.pageSize)
    }

    render() {
        return (
            <>
                {this.props.isLoading ? <Preloader/> : null}
                <Users users={this.props.users}
                       follow={this.props.follow}
                       unFollow={this.props.unfollow}
                       pageSize={this.props.pageSize}
                       totalUsersCount={this.props.totalUsersCount}
                       followingIsProgress={this.props.followingIsProgress}
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
    followingIsProgress: Array<string>
}

function mapStateToProps(state: AppStateType): MapStatePropsType {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        followingIsProgress: state.usersPage.followingIsProgress
    }
}

export default compose<FC>(connect(mapStateToProps, {
    // Діспатчимо санки
    getUsers,
    follow,
    unfollow
}))(UsersContainer)