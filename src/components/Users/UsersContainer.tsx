import {connect} from "react-redux";
import {AppStateType} from "../../redax/reduxStore";
import {
    follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFollowing, toggleIsLoading, unFollow,
    UsersType,
} from "../../redax/usersReducer";
import React, {FC} from "react";
import {Users} from "./Users";
import Preloader from "../optional/Preloader";
import {compose} from "redux";
import {usersAPI} from "../../api/api";

// Типи для класового компонента
type UsersContainerPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
    followingIsProgress: Array<string>
    follow: (userID: string) => void
    unFollow: (userID: string) => void
    setUsers: (users: any) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsLoading: (isLoading: boolean) => void
    toggleIsFollowing: (userId: string, isLoading: boolean) => void
}

class UsersContainer extends React.Component<UsersContainerPropsType> {
    // componentDidMount() викликається відразу після монтування компонента
    componentDidMount() {
        // Вмикаємо анімацію завантаження
        this.props.toggleIsLoading(true)
        // Відправляємо запрос на сервер
        // І після того як на запрос прийде відповідь, проводимо операції з response
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            // Вимикаємо анімацію завантаження
            this.props.toggleIsLoading(false)
            // Записуємо юзерів, які прийшли в респонді, в наш стейт
            this.props.setUsers(data.items)
            // Записуємо скільки всього юзерів
            this.props.setTotalUsersCount(data.totalCount)
        })
    }

    // onPageChanged - це метод в класі UsersContainer, який оновлює сторінку юзерів
    onPageChanged = (currentPage: number) => {
        // При клікі міняємо в Сторі нинішню сторінку
        this.props.setCurrentPage(currentPage)
        // Вмикаємо анімацію завантаження
        this.props.toggleIsLoading(true)
        // І робимо новий запрос, щоб оновити дані
        usersAPI.getUsers(currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsLoading(false)
                this.props.setUsers(data.items)
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
                       followingIsProgress={this.props.followingIsProgress}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       toggleIsFollowing={this.props.toggleIsFollowing}
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
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsLoading,
    toggleIsFollowing
}))(UsersContainer)