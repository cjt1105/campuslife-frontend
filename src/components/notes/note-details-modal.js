import React, { Component } from 'react';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Select from 'material-ui/Select';
import { MenuItem }from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Tooltip from 'material-ui/Tooltip';
import Slide from 'material-ui/transitions/Slide';
import Icon from 'material-ui/Icon';
import questionMark from '../../images/speech-bubble.png'

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

export default class NoteDetailsModal extends Component {
    state = {
    }

    submit = () => {
        const body = {
            lecture: parseInt(this.state.lectureId),
            description: this.state.description
        }
        this.props.lectureSelection(body)
    }

    handleChange = name => event => {
            this.setState({ [name]: event.target.value });
    };

    handleChange = name => event => {
        if(this.state[name]=== " ") {
            this.state[name] = ""
            this.setState({ [name]: event.target.value });
        }
        else{
            this.setState({ [name]: event.target.value });
        }
    };

    renderLectureSelectMenu = () => {
        return this.props.user_lectures.map((lecture) => {
            return <option value={lecture.id}>{`${lecture.name}, ${lecture.professor}`}</option>
        })
    }


    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        return(
            <div>
                <div>
                    <Dialog
                    native
                    open={this.props.open}
                    onRequestClose={this.handleClose}
                    transition={Transition}
                    fullWidth
                    >
                        <DialogTitle>Note Details</DialogTitle>
                            <DialogContent>
                                <div>
                                <FormControl className="input-grey">
                                        <InputLabel>Lecture</InputLabel>
                                        <Select
                                        native
                                        value={this.state.lectureId}
                                        onChange={this.handleChange('lectureId')}
                                        >
                                            <option></option>
                                            {this.renderLectureSelectMenu()}
                                        </Select>
                                        <TextField
                                        name="description"
                                        type="text"
                                        label="Description"
                                        onChange={this.handleChange('description')}
                                        value={this.state.description}
                                        />
                                    </FormControl>
                                    <Tooltip title="What lecture should we tag these notes to?" placement="right">
                                        <div className="input-icon">
                                        <img src={questionMark} />
                                        </div>
                                    </Tooltip>
                                </div>
                            </DialogContent>
                            <DialogActions>
                        <Button onClick={this.submit} color="primary">
                            Submit
                        </Button>
                    </DialogActions>
                        </Dialog>
                </div>
            </div>
        )
    }

}