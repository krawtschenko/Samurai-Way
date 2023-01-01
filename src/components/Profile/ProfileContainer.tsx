import React, {FC} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redax/reduxStore";
import {getUserProfile, ProfileType,} from "../../redax/profileReducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

type PathParamsType = {
    userId: string
}
type CommonPropsType = RouteComponentProps<PathParamsType> & ProfileContainerType
type ProfileContainerType = {
    getUserProfile: (userId: string) => void
    profile: ProfileType | null
    isAuth: boolean
}

class ProfileContainer extends React.Component<CommonPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getUserProfile(userId)
    }

    render() {
        if (!this.props.isAuth) {
            return <Redirect to={"/login"}/>
        }

        return (
            <Profile {...this.props}/>
        )
    }
}

type MapStatePropsType = {
    profile: ProfileType | null
    isAuth: boolean
}

function mapStateToProps(state: AppStateType): MapStatePropsType {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

export default compose<FC>(connect(mapStateToProps, {getUserProfile}), withRouter)(ProfileContainer)
