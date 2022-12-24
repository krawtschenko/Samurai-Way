import React from "react";
import {UsersType} from "../../redax/usersReducer";
import style from './Users.module.sass'
import userIcon from '../../Images/userIcon.png'
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersPropsType = {
    users: UsersType[]
    follow: (userID: string) => void
    unFollow: (userID: string) => void
    setUsers: (users: any) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (currentPage: number) => void
}

export const Users: React.FC<UsersPropsType> = (props) => {
    // Вичісляємо кількість сторінок
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map((elem, index) => {
                    const classForSpan = `${style.users__countPages} ${elem === props.currentPage && style.users__selected}`

                    return (
                        <span key={index} onClick={() => props.onPageChanged(elem)}
                              className={classForSpan}>{elem}</span>)
                })}
            </div>
            {props.users.map(user => {
                return (
                    <div key={user.id} className={style.users__wrapper}>
                        <div className={style.users__photoAndBtn}>
                            <div>
                                {/*При клікі на фото переходимо в Profile з обраним юзером*/}
                                <NavLink to={`/profile/${user.id}`}>
                                    <img src={user.photos.small !== null ? user.photos.small : userIcon} alt="icon"/>
                                </NavLink>
                            </div>
                            <div>
                                {user.followed
                                    ? <button className={style.users__btn_unfollow}
                                              onClick={() => {
                                                  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                                      {
                                                          withCredentials: true,
                                                          headers: {"API-KEY": "0b7e980d-17e5-4474-a2a9-e62305174d89"}
                                                      })
                                                      // Після того як на запрос прийшла відповідь response, міняємо деякі дані
                                                      .then(response => {
                                                          if (response.data.resultCode === 0) {
                                                              props.unFollow(user.id)
                                                          }
                                                      })
                                              }}>Unfollow</button>
                                    : <button className={style.users__btn_follow}
                                              onClick={() => {
                                                  axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                                      {}, {
                                                          withCredentials: true,
                                                          headers: {"API-KEY": "0b7e980d-17e5-4474-a2a9-e62305174d89"}
                                                      })
                                                      // Після того як на запрос прийшла відповідь response, міняємо деякі дані
                                                      .then(response => {
                                                          if (response.data.resultCode === 0) {
                                                              props.follow(user.id)
                                                          }
                                                      })
                                              }}>Follow</button>}
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