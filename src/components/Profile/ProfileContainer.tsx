import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redax/reduxStore";
import {ProfileType, setUserProfile} from "../../redax/profileReducer";

type ProfileComponentType = {
    setUserProfile: (profile: null | ProfileType) => void
    profile: ProfileType | null
}

class ProfileComponent extends React.Component<ProfileComponentType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

type MapStatePropsType = {
    profile: ProfileType | null
}

function mapStateToProps(state: AppStateType): MapStatePropsType {
    return {
        profile: state.profilePage.profile
    }
}

export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileComponent)

