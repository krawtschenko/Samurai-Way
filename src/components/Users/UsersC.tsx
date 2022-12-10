import React from "react";
import {UsersType} from "../../redax/usersReducer";
import style from './Users.module.sass'
import axios from "axios";
import userIcon from '../../Images/userIcon.png'

type UsersPropsType = {
    users: UsersType[]
    follow: (userID: string) => void
    unFollow: (userID: string) => void
    setUsers: (users: any) => void
}

export class UsersC extends React.Component<UsersPropsType> {
    // componentDidMount() викликається відразу після монтування компонента
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <div>
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