import React, { Component } from 'react';
import LectureContainer from '../containers/lecture';
import { Grid } from 'semantic-ui-react'
import CalendarContainer from '../containers/calendar';
import Calendar from './calendar/calendar';
import AddAssignmentModal from './calendar/create-assignment-modal';

export default class LectureDashboard extends Component {
    render() {
        return (
            <div className="dashboard-container">
                <div className="dashboard-backdrop">
                    <LectureContainer/>
                </div>
            </div>
        )
    }
}