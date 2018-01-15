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

    componentWillUpdate(nextProps, nextState){
        if(nextState.file != null && nextState.lecture != null) {
            this.props.postNote(nextState, this.props.user.id)
        }
    }

    fileUploadSuccess= (file) => {
        this.setState({
            open: true,
            file: file
        })
    }

    lectureSelection = (newState) => {
        this.setState({
            lecture: newState.lectureId,
            open: false
        })
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