import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import Icon from 'material-ui/Icon';
import Tooltip from 'material-ui/Tooltip';

export default class UploadNoteButton extends Component {

    onDrop = (acceptedFiles, rejectedFiles) => {
        this.props.fileUploadSuccess(acceptedFiles[0])
    }

    render() {
        return (
            <div>
            <div>
            <Dropzone className="file-upload-button" onDrop={this.onDrop}>
                <Tooltip id="upload-note-tooltip" title="Drag files here to upload notes" placement="top">
                    <Icon
                    color="contrast"
                    onClick={this.handleOpen}
                    >
                        cloud_upload
                    </Icon>
                </Tooltip>
            </Dropzone>
            </div>
            {/*<div>
                {this.renderChildren}
            </div>*/}
            </div>
        )
    }
}