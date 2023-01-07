import React from 'react';

type ProfileStatusType = {
    status: string
    updateUserStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        // Щоб була перерисовка this.setState
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        // Щоб була перерисовка this.setState
        this.setState({
            editMode: false
        })
        // Відправляємо на сервер і оновлюємо статус
        this.props.updateUserStatus(this.state.status)
    }

    onStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: event.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <input onChange={this.onStatusChange} onBlur={this.deactivateEditMode.bind(this)} autoFocus
                             value={this.state.status}/>
                    : <span onDoubleClick={this.activateEditMode}><b>{this.props.status || 'No status'}</b></span>}
            </div>
        );
    }
}