import React, {FC} from "react";
import {Header} from "./Header";
import {AppStateType} from "../../redax/reduxStore";
import {getAuthUserData} from "../../redax/authReducer";
import {connect} from "react-redux";
import {compose} from "redux";

type HeaderContainerPropsType = {
    login: string | null
    isAuth: boolean
    getAuthUserData: () => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    // componentDidMount() викликається відразу після монтування компонента
    componentDidMount() {
        // Відправляємо запрос на сервер
        this.props.getAuthUserData()
    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

type MapStatePropsType = {
    login: string | null
    isAuth: boolean
}

function mapStateToProps(state: AppStateType): MapStatePropsType {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

export default compose<FC>(connect(mapStateToProps, {getAuthUserData}))(HeaderContainer)
