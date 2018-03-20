import React, { Component } from 'react';
import { connect } from 'react-redux';

import getLecture from '../../actions/lecture/load-single-lecture';
import getStudents from '../../actions/lecture/load-students.js'
import getNotes from '../../actions/lecture/load-notes';

import LectureDetails from '../../components/lecture/lecture-details'
import StudentList from '../../components/lecture/students-list'
import CalendarContainer from '../user-calendar';
import AddAssignmentModal from '../../components/calendar/create-assignment-modal';
import Calendar from '../../components/calendar/calendar';
import NoteList from '../../components/lecture/lecture-notes'

import { bindActionCreators } from 'redux';

class LectureContainer extends Component {

    state = {
        lectureLoaded: false,
        studentsLoaded: false,
        notesLoaded: false
    }

    componentDidMount() {
        const urlArray = window.location.href.split("/");
        let lectureId = urlArray[urlArray.length - 1];
        if(this.state.lectureLoaded === false){
            this.setState({
                lectureLoaded: true
            }, () => {
                this.props.getLecture(lectureId)
            })
        }
        if(this.state.studentsLoaded === false){
            this.setState({
                notesLoaded: true
            }, () => {
                this.props.getNotes(lectureId)
            })
        }
    }

    componentDidUpdate() {
        if(this.props.selected_lecture != null && this.props.selected_lecture.students === undefined){
            const lectureId = this.props.selected_lecture.lecture.id
            this.props.getStudents(lectureId);
        }
    }

    cloneLectureDetailsWithProps = (component) => {
        return React.cloneElement(component, {lecture: this.props.selected_lecture.lecture})
    }

    cloneStudentsListWithProps = (component) => {
        return React.cloneElement(component, {students: this.props.selected_lecture.students})
    }

    cloneNoteListWithProps = (component) => {
        return React.cloneElement(component, {notes: this.props.lecture_notes})
    }

    render() {
        if(this.props.selected_lecture != null && this.props.selected_lecture.students != undefined){
            return (
                <div>
                <div>{this.cloneLectureDetailsWithProps(<LectureDetails/>)}</div>
                <div className="calendar-container">
                    <div className="container-backdrop">
                        <CalendarContainer>
                            <AddAssignmentModal />
                            <Calendar />
                        </CalendarContainer>
                    </div>
                </div>
                    <div className="lecture-notes-container">
                        <div className="container-backdrop">
                            {this.cloneNoteListWithProps(<NoteList />)}
                        </div>
                    </div>
                    <div className="lecture-post-container">
                        <div className="container-backdrop">
                        </div>
                    </div>
                    <div className="students-container">
                        <div className="container-backdrop">
                            {this.cloneStudentsListWithProps(<StudentList/>)}
                        </div>
                    </div>
                </div>
            )
        }
        return null
    }
}

function mapStateToProps(state) {
    return {
        selected_lecture: state.selected_lecture,
        lecture_notes: state.lecture_notes
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getLecture: getLecture,
    getStudents: getStudents,
    getNotes: getNotes
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LectureContainer);