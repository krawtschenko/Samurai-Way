import React from "react";
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

export const WithAuthRedirect = (Component: any) => {
    const RedirectComponent = (props: MapStateToPropsType) => {
        let {isAuth, ...restProps} = props

        // Якшо ми не залоговані, то за допомогою Redirect перенаправляє нас на вказану адресу
        if (!isAuth) {
            return <Redirect to={"/login"}/>
        }
        return <Component {...restProps}/>
    }
    return connect(mapStateToProps)(RedirectComponent)
}