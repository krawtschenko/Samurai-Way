import React from 'react';

type ProfileStatusType = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {
        editMode: false
    }

    toggleEditMode() {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <input onBlur={this.toggleEditMode.bind(this)} autoFocus value={this.props.status}/>
                    : <span onDoubleClick={this.toggleEditMode.bind(this)}><b>{this.props.status}</b></span>}
            </div>
        );
    }
}