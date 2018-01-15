import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import Icon from 'material-ui/Icon';
import Tooltip from 'material-ui/Tooltip';


class UserDeatailsCard extends Component {
    state = {}

    onDrop = (acceptedFiles, rejectedFiles) => {
        this.props.uploadPhoto(acceptedFiles[0], this.props.user.id)
    }

    render() {
        if(this.props.user != null) {
            this.state.user = {...this.props.user}
            return (
                <div className="user-details-card-container">
                    <div>
                        <Dropzone className="upload-photo" onDrop={this.onDrop}>
                            <Tooltip id="upload-note-tooltip" title="Upload a photo" placement="right">
                                <Icon
                                color="contrast"
                                onClick={this.handleOpen}
                                >
                                    add_a_photo
                                </Icon>
                            </Tooltip>
                        </Dropzone>
                    </div>
                <div className="user-details-element">
                    {this.state.user.firstName}
                </div>
                <div className="user-details-element">
                    {this.state.user.lastName}
                </div>
                <div className="user-details-element">
                    {this.state.user.facebook}
                </div>
                <div className="user-details-element">
                    {this.state.user.twitter}
                </div>
                <div className="user-details-element">
                    {this.state.user.snapchat}
                </div>
                <div className="user-details-element">
                    {this.state.user.instagram}
                </div>
                <div className="user-details-element">
                    {this.state.user.ps4}
                </div>
                <div className="user-details-element">
                    {this.state.user.xboxlive}
                </div>
                </div>
            )
        }

    }
}

export default UserDeatailsCard