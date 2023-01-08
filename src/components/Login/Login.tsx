import React, {FC} from 'react';
import {FormDataType, LoginReduxForm} from "./LoginForm";

type LoginPropsType = {}

export const Login: FC<LoginPropsType> = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}