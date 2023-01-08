import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={"input"}/>
            </div>

            <div>
                <Field placeholder={"Password"} name={"password"} component={"input"}/>
            </div>

            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"}/>
                <span>remember me</span>
            </div>

            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

// В LoginForm передаємо пропси за замовченням, в тому числі і handleSubmit
export const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)