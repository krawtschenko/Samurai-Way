import {Dialogs} from "./Dialogs";
import {DialogsType, MessagesType, sendMessageAC, updateNewMessageTextAC} from "../../redax/dialogsReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redax/reduxStore";
import {Dispatch} from "redux";

// Презентаційний компонент (для того, щоб в компонент Dialog не передавати всі дані

type MapStatePropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
    isAuth: boolean
}
type MapDispatchPropsType = {
    onMessageChange: (text: string) => void
    sendMessage: () => void
}

// Приймає весь state, а повертає state з даними для Dialogs, який передаємо компоненті Dialogs
function mapStateToProps(state: AppStateType): MapStatePropsType {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
        isAuth: state.auth.isAuth
    }
}

// Повертає функції які викликають dispatch і далі передаємо в Dialogs
function mapDispatchToProps(dispatch: Dispatch): MapDispatchPropsType {
    return {
        onMessageChange: (text: string) => {
            dispatch(updateNewMessageTextAC(text))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}

// Викликаємо фунцкію connect і потім викликаємо функцію яку визвала connect
// В параметри передаємо те, шо повинно прийти в Dialogs в пропси
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)