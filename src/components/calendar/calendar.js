import React, { Component } from 'react'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import ViewAssignmentModal from './view-assignment-modal'

export default class Calendar extends Component {

    state = {
        open: false
    }

    onSelectEvent(event) {
        this.props.getAssignment(event.id)
        this.setState({open: true})
    }

    handleClose = () => {
        console.log('fire')
        this.setState({open:false})
    }

    componentDidUpdate() {
        console.log(this.props)
    }

    render() {
        const currentDate = Date.now()
        if(this.props.user_assignments.length > 0) {
            return (
                <div>
                    <div>
                        <BigCalendar
                            {...this.props}
                            events={this.props.user_assignments}
                            defaultDate={new Date(currentDate)}
                            views={['month', 'week']}
                            startAccessor='startDate'
                            endAccessor='endDate'
                            onSelectEvent={event=>this.onSelectEvent(event)} >
                        </BigCalendar>
                    </div>
                    <div>
                        {React.cloneElement(<ViewAssignmentModal />, {
                            assignments: this.props.assignments,
                            open: this.state.open,
                            handleClose: this.handleClose
                        })}
                    </div>
                </div>

            )
        }
        else {
            return(
                <div>
                    <div>
                        <BigCalendar
                                {...this.props}
                                events={[]}
                                defaultDate={new Date(currentDate)}
                                views={['month', 'week']}
                                startAccessor='startDate'
                                endAccessor='endDate'
                                onSelectEvent={event=>this.onSelectEvent(event)} >
                        </BigCalendar>
                    </div>
                </div>
            )
        }
    }
}