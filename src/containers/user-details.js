import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import submitProfileChanges from '../actions/user/edit-user-details';
import uploadPhoto from '../actions/user/upload-photo';
import loadUser from '../actions/user/load-user';

function formatAssignment(assignment) {
    delete assignment.open
    delete assignment.lectureId
    return assignment
}

class EditUserModal extends React.Component {

    componentDidMount() {
        this.props.loadUser(0);
    }

    render() {
        if(this.props.user != null) {
            return React.Children.map(this.props.children, child => {
                return React.cloneElement(child, {
                    user: this.props.user,
                    submitProfileChanges: this.props.submitProfileChanges,
                    uploadPhoto: this.props.uploadPhoto
                })
            })
        }
        else {
            return null
        }
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        submitProfileChanges: submitProfileChanges,
        uploadPhoto: uploadPhoto,
        loadUser: loadUser
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUserModal);