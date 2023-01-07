import style from './ProfileInfo.module.sass'
import React, {FC} from "react";
import {ProfileType} from "../../../redax/profileReducer";
import Preloader from "../../optional/Preloader";
import userIcon from '../../../Images/userIcon.png'
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoType = {
    profile: ProfileType | null
    status: string
    updateUserStatus: (status: string) => void
}

export const ProfileInfo: FC<ProfileInfoType> = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={style.profileInfo}>
            <div>
                <img src={props.profile.photos.large !== null ? props.profile.photos.large : userIcon} alt="large"/>
            </div>
            <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
            <div>
                <div>{props.profile.contacts.facebook}</div>
                <div>{props.profile.contacts.github}</div>
                <div>{props.profile.contacts.twitter}</div>
                <div>{props.profile.contacts.instagram}</div>
            </div>
        </div>
    )
}