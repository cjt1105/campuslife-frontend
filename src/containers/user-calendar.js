import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';

import AssignmentModal from './view-assignment-modal';
import CreateAssignmentModal from './create-assignment-modal'

import getUserAssignments from '../actions/calendar/getUserAssignments';
import selectAssignment from '../actions/calendar/selectAssignment';
import getLectureAssignments from '../actions/calendar/getLectureAssignments';
import openAssignmentModal from '../actions/calendar/openAssignmentModal';
import createAssignment from '../actions/calendar/add-assignment.js'

BigCalendar.momentLocalizer(moment);



class Calendar extends Component {

    onSelectEvent(event) {
        this.props.selectAssignment(event)
        this.props.openAssignmentModal()
    }

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
                    selectAssignment: this.props.selectAssignment,
                    openAssignmentModal: this.props.openAssignmentModal,

                })
            })
    }
}

function mapStateToProps(state) {
    return {
        user_assignments: state.user_assignments,
        user_lectures: state.user_lectures
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getUserAssignments: getUserAssignments,
        getLectureAssignments: getLectureAssignments,
        selectAssignment: selectAssignment,
        openAssignmentModal: openAssignmentModal,
        createAssignment: createAssignment
    }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Calendar);