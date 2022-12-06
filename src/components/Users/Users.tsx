import React from "react";
import {UsersType} from "../../redax/usersReducer";
import {v1} from "uuid";
import style from './Users.module.sass'

type UsersPropsType = {
    users: UsersType[]
    follow: (userID: string) => void
    unFollow: (userID: string) => void
    setUsers: (users: any) => void
}

export const Users: React.FC<UsersPropsType> = ({users, follow, unFollow, setUsers}) => {
    if (users.length === 0) {
        setUsers([
            {
                id: v1(),
                photo: 'https://cdn-icons-png.flaticon.com/512/3048/3048127.png',
                followed: true,
                fullName: 'Gandalf White',
                status: 'I\'m a mage',
                location: {city: 'Dusseldorf', country: 'Germany'}
            },
            {
                id: v1(),
                photo: 'https://cdn-icons-png.flaticon.com/512/3048/3048127.png',
                followed: false,
                fullName: 'Steve Rodgers',
                status: 'I\'m Capitan America',
                location: {city: 'New York', country: 'USA'}
            },
            {
                id: v1(),
                photo: 'https://cdn-icons-png.flaticon.com/512/3048/3048127.png',
                followed: true,
                fullName: 'Obi-van',
                status: 'I\'m master jedi',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
            {
                id: v1(),
                photo: 'https://cdn-icons-png.flaticon.com/512/3048/3048127.png',
                followed: false,
                fullName: 'Thrall',
                status: 'I\'m a shaman',
                location: {city: 'Gdansk', country: 'Poland'}
            }
        ])
    }

    return (
        <div>
            {users.map(user => {
                return (
                    <div key={user.id} className={style.users__wrapper}>
                        <div className={style.users__photoAndBtn}>
                            <div>
                                <img src={user.photo} alt="icon"/>
                            </div>
                            <div>
                                {user.followed
                                    ? <button className={style.users__btn_unfollow}
                                              onClick={() => unFollow(user.id)}>Unfollow</button>
                                    : <button className={style.users__btn_follow}
                                              onClick={() => follow(user.id)}>Follow</button>}
                            </div>
                        </div>

                        <div className={style.users__info}>
                            <div className={style.users__nameAndTitle}>
                                <div>{user.fullName}</div>
                                <div>{user.status}</div>
                            </div>
                            <div className={style.users__location}>
                                <div>{user.location.country}</div>
                                <div>{user.location.city}</div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}