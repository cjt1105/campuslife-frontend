import React, { Component } from 'react'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

export default class Calendar extends Component {
    onSelectEvent(event) {
        this.props.selectAssignment(event)
        this.props.openAssignmentModal()
    }

    render() {
        const currentDate = Date.now()
        if(this.props.user_assignments.length > 0) {
            return (
                <BigCalendar
                        {...this.props}
                        events={this.props.user_assignments}
                        defaultDate={new Date(currentDate)}
                        startAccessor='startDate'
                        endAccessor='endDate'
                        onSelectEvent={event=>this.onSelectEvent(event)} >
                </BigCalendar>
            )
        }
        else {
            return(
                <BigCalendar
                        {...this.props}
                        events={[]}
                        defaultDate={new Date(currentDate)}
                        startAccessor='startDate'
                        endAccessor='endDate'
                        onSelectEvent={event=>this.onSelectEvent(event)} >
                </BigCalendar>
            )
        }
    }
}