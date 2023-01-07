import React, {FC} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redax/reduxStore";
import {getUserProfile, getUserStatus, ProfileType, updateUserStatus,} from "../../redax/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";

type PathParamsType = {
    userId: string
}
type CommonPropsType = RouteComponentProps<PathParamsType> & ProfileContainerType
type ProfileContainerType = {
    getUserProfile: (userId: string) => void
    getUserStatus: (userId: string) => void
    updateUserStatus: (status: string) => void
    profile: ProfileType | null
    status: string
}

// Контейнерний компонент
class ProfileContainer extends React.Component<CommonPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

type MapStatePropsType = {
    profile: ProfileType | null
    status: string
}

function mapStateToProps(state: AppStateType): MapStatePropsType {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose<FC>(
    connect(mapStateToProps, {
        getUserProfile,
        getUserStatus,
        updateUserStatus
    }),
    withRouter,
    WithAuthRedirect,
)(ProfileContainer)
