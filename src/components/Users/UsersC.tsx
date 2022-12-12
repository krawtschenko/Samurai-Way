import React from "react";
import {UsersType} from "../../redax/usersReducer";
import style from './Users.module.sass'
import axios from "axios";
import userIcon from '../../Images/userIcon.png'

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

export class UsersC extends React.Component<UsersPropsType> {
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
        // Вичісляємо кількість сторінок
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        const pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {pages.map(elem => {
                        const classForSpan = `${style.users__countPages} ${elem === this.props.currentPage && style.users__selected}`

                        return (
                            <span onClick={() => this.onPageChanged(elem)}
                                  className={classForSpan}>{elem}</span>)
                    })}
                </div>
                {this.props.users.map(user => {
                    return (
                        <div key={user.id} className={style.users__wrapper}>
                            <div className={style.users__photoAndBtn}>
                                <div>
                                    <img src={user.photos.small !== null ? user.photos.small : userIcon} alt="icon"/>
                                </div>
                                <div>
                                    {user.followed
                                        ? <button className={style.users__btn_unfollow}
                                                  onClick={() => this.props.unFollow(user.id)}>Unfollow</button>
                                        : <button className={style.users__btn_follow}
                                                  onClick={() => this.props.follow(user.id)}>Follow</button>}
                                </div>
                            </div>

                            <div className={style.users__info}>
                                <div className={style.users__nameAndTitle}>
                                    <div>{user.name}</div>
                                    <div>{user.status}</div>
                                </div>
                                <div className={style.users__location}>
                                    <div>{'user.location.country'}</div>
                                    <div>{'user.location.city'}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}