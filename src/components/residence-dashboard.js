import React, { Component } from 'react';
import Calendar from '../containers/calendar'
import ResidenceContainer from '../containers/residence'

export default class ResidenceDashboard extends Component {
    render() {
        return (
            <div className="dashboard-container">
                <div className="dashboard-backdrop">
                    <ResidenceContainer />
                </div>
            </div>
        )
    }
}