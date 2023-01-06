import React, {FC} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redax/reduxStore";

type MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const WithAuthRedirect = (Component: FC) => {
    const RedirectComponent = (props: MapStateToPropsType) => {
        const {isAuth, ...restProps} = props

        // Якшо ми не залоговані, то за допомогою Redirect перенаправляє нас на вказану адресу
        if (!isAuth) {
            return <Redirect to={"/login"}/>
        }
        return <Component {...restProps}/>
    }
    return connect(mapStateToProps)(RedirectComponent)
}