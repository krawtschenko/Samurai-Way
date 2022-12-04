import React from "react";
import {UsersType} from "../../redax/usersReducer";
import {v1} from "uuid";

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
                    <div key={user.id}>
                        <span>
                            <div>
                                <img src={user.photo} alt="icon"/>
                            </div>
                            <div>
                                {user.followed
                                    ? <button onClick={() => unFollow(user.id)}>Unfollow</button>
                                    : <button onClick={() => follow(user.id)}>Follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{user.fullName}</div>
                                <div>{user.status}</div>
                            </span>
                        </span>
                        <span>
                            <span>
                                <div>{user.location.country}</div>
                                <div>{user.location.city}</div>
                            </span>
                        </span>
                    </div>
                )
            })}
        </div>
    )
}