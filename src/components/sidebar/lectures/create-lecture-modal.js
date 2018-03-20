import React, { Component } from 'react';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';
import Input, { InputLabel } from 'material-ui/Input';
// import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Select from 'material-ui/Select';
import { MenuItem }from 'material-ui/Menu';
import Tooltip from 'material-ui/Tooltip';
import { FormControl } from 'material-ui/Form';
import Slide from 'material-ui/transitions/Slide';
import LectureList from './lecture-list-all'

import { Icon, Image, Button, Header, Grid } from 'semantic-ui-react'

console
function Transition(props) {
    return <Slide direction="up" {...props} />;
}

const days = [
    'MON',
    'TUES',
    'WED',
    'THU',
    'FRI',
];

export default class CreateLectureModal extends Component {

    state = {
        open: false,
        lectureDays: [],
        lecturesLoaded: false
    }

    componentDidUpdate() {
        if(this.state.lecturesLoaded === false){
            this.setState({
                lecturesLoaded: true
            }, () => {
                this.props.getAllLectures()
            })
        }
    }

    getIntialState = () => {
        return {
            open: false,
            lectureDays: []
        }
    }

    handleOpen = () => {
        this.setState({
            open: true
        })
    }

    submit = () => {
        let userId = this.props.user.id
        let _state = {...this.state}
        delete _state.open
        let lectureDaysString = this.state.lectureDays.join('-')
        let lecture = {
            name: _state.name,
            professor: _state.professor,
            section: _state.section,
            time: _state.lectureTime,
            days: lectureDaysString
        }
        this.props.createLecture(lecture, userId);
        const intialState = this.getIntialState()
        this.setState(intialState)
    }

    handleClose = () => {
        this.setState({open: false})
    }

    handleChange = name => event => {
        if(this.state[name]=== " ") {
            this.state[name] = ""
            this.setState({ [name]: event.target.value });
        }
        else{
            this.setState({ [name]: event.target.value });
        }
    };

    cloneLectureListWithProps = (component) => {
        return React.cloneElement(component, {lectures: this.props.lectures})
    }

    render() {
        return (
            <div>
            <Tooltip id="add-lecture-button" title="Add a lecture" placement="right">
                    <div className="sidebar-button" onClick={this.handleOpen}>
                    <Icon name='plus' />
                    </div>
                </Tooltip>
                <Dialog
                native
                open={this.state.open}
                onRequestClose={this.handleClose}
                transition={Transition}
                fullScreen
                >
                    <DialogTitle>Add a lecture</DialogTitle>
                    <DialogContent>
                        {this.cloneLectureListWithProps(<LectureList />)}
                        <div className="lecture-form">
                        <div className="text-input">
                        <FormControl>
                            <TextField
                            name="name"
                            type="text"
                            label="Name"
                            placeholder="Chemistry 100"
                            onChange={this.handleChange('name')}
                            value={this.state.name}
                            />
                        </FormControl>
                        </div>
                        <div className="text-input">
                        <FormControl>
                            <TextField
                            name="professor"
                            type="text"
                            label="Professor"
                            onChange={this.handleChange('professor')}
                            value={this.state.professor}
                            />
                        </FormControl>
                        </div>
                        <div className="text-input">
                        <FormControl>
                            <TextField
                            name="section"
                            type="text"
                            label="Section"
                            onChange={this.handleChange('section')}
                            value={this.state.section}
                            />
                        </FormControl>
                        </div>
                        <div className="text-input">
                            <FormControl>
                                <TextField
                                    id="lectureTime"
                                    label="Time"
                                    type="time"
                                    onChange={this.handleChange('lectureTime')}
                                    defaultValue="07:30"
                                    inputProps={{
                                    step: 300, // 5 min
                                    }}
                                />
                            </FormControl>
                        </div>
                        <div className="text-input">
                            <FormControl>
                                <InputLabel htmlFor="days">Days</InputLabel>
                                <Select
                                    multiple
                                    value={this.state.lectureDays}
                                    onChange={this.handleChange('lectureDays')}
                                    input={<Input name="days" id="days" />}
                                >
                                    {
                                        days.map(day => (
                                            <MenuItem
                                                key={day}
                                                value={day}
                                            >
                                                {day}
                                            </MenuItem>
                                        ))
                                    }
                                </Select>
                            </FormControl>
                        </div>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.submit} color="primary">
                            Submit
                        </Button>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}