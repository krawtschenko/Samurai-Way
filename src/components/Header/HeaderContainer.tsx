import React, {FC} from "react";
import {Header} from "./Header";
import axios from "axios";
import {AppStateType} from "../../redax/reduxStore";
import {AuthType, setAuthUserDataAC} from "../../redax/authReducer";
import {connect} from "react-redux";
import {compose} from "redux";

type HeaderContainerPropsType = {
    login: string | null
    isAuth: boolean
    setAuthUserDataAC: (data: AuthType) => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    // componentDidMount() викликається відразу після монтування компонента
    componentDidMount() {
        // Відправляємо запрос на сервер
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            // Якшо ми залоговані, то передає наш логін у відповідь
            withCredentials: true
        })
            // Після того як на запрос прийшла відповідь response, міняємо деякі дані
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthUserDataAC(response.data.data)
                }
            })
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

export default compose<FC>(connect(mapStateToProps, {setAuthUserDataAC}))(HeaderContainer)
