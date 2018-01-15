import React, { Component } from 'react';
import Calendar from '../containers/user-calendar'
import LectureRoster from '../containers/lecture_roster'

export default class LectureDashboard extends Component {
    render() {
        return (
            <div>
                <div>
                    <Calendar />
                </div>
                <div>
                    <LectureRoster />
                </div>
            </div>
        )
    }
}