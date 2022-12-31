import React, {FC} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redax/reduxStore";
import {getUserProfile, ProfileType,} from "../../redax/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

type PathParamsType = {
    userId: string
}
type CommonPropsType = RouteComponentProps<PathParamsType> & ProfileContainerType
type ProfileContainerType = {
    getUserProfile: (userId: string) => void
    profile: ProfileType | null
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

export default compose<FC>(connect(mapStateToProps, {getUserProfile}), withRouter)(ProfileContainer)
