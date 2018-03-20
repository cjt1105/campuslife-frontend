import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';

import AssignmentModal from './view-assignment-modal';
import CreateAssignmentModal from './create-assignment-modal'

import getUserAssignments from '../actions/calendar/get-user-assignments';
import selectAssignment from '../actions/calendar/select-assignment';
import getLectureAssignments from '../actions/calendar/get-lecture-assignments';
import openAssignmentModal from '../actions/calendar/openAssignmentModal';
import createAssignment from '../actions/calendar/add-assignment.js';
import getAssignment from '../actions/assignments/load-assignment'

BigCalendar.momentLocalizer(moment);



class Calendar extends Component {

    componentDidMount() {
        const urlArray = window.location.href.split("/");
        let assignmentSource = urlArray[3];
        let sourceId = urlArray[4];
        if(this.props)
        if(assignmentSource === "lectures") {
            this.props.getLectureAssignments(sourceId);
        }
        this.props.getUserAssignments(0)
    }

    render () {
            return React.Children.map(this.props.children, child => {
                return React.cloneElement(child, {
                    user_lectures: this.props.user_lectures,
                    createAssignment: this.props.createAssignment,
                    user_assignments: this.props.user_assignments,
                    getUserAssignments: this.props.getUserAssignments,
                    getLectureAssignments:this.props.getLectureAssignments,
                    getAssignment: this.props.getAssignment,
                    assignments: this.props.assignments
                })
            })
    }
}

function mapStateToProps(state) {
    return {
        user_assignments: state.user_assignments,
        user_lectures: state.user_lectures,
        assignments: state.assignments
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getUserAssignments: getUserAssignments,
        getLectureAssignments: getLectureAssignments,
        selectAssignment: selectAssignment,
        openAssignmentModal: openAssignmentModal,
        createAssignment: createAssignment,
        getAssignment: getAssignment
    }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Calendar);