import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import postNote from '../actions/notes/post-note';
import getUserNotes from '../actions/user/load-user-notes';



class NotesContainer extends Component {
    state = {
        open: false,
        file: null,
        lecture: null
    }

    componentDidMount() {
        this.props.getUserNotes(0)
    }

    fileUploadSuccess= (file) => {
        this.setState({
            open: true,
            file: file
        })
    }

    lectureSelection = (newState) => {
        const noteObject = {
            file: this.state.file,
            lecture: newState.lecture,
            description: newState.description
        }
        this.setState({open: false})
        this.props.postNote(noteObject, this.props.user.id)
    }

    render() {
        return React.Children.map(this.props.children, child => {
                return React.cloneElement(child, {...this.props, ...this.state, fileUploadSuccess: this.fileUploadSuccess, lectureSelection: this.lectureSelection})
            })
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        notes: state.notes,
        user_lectures: state.user_lectures
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    postNote: postNote,
    getUserNotes: getUserNotes
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesContainer);