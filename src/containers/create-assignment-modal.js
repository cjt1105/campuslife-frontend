import React from 'react';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';
import Input, { InputLabel } from 'material-ui/Input';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import Avatar from 'material-ui/Avatar';
import Icon from 'material-ui/Icon';
import Tooltip from 'material-ui/Tooltip';
import { FormControl } from 'material-ui/Form';
import { blue300, white } from 'material-ui/colors'
import Slide from 'material-ui/transitions/Slide';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import openCreateAssignmentModal from '../actions/calendar/open-create-assignment-modal.js';
import closeAssignmentModal from '../actions/calendar/closeAssignmentModal';
import createAssignment from '../actions/calendar/add-assignment.js'

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

function trimWhitespace(arr) {
    let newObj = {}
    arr.map(el => {
            let key = el[0]
            el[1] = el[1].trim()
            newObj[key] = el[1]
    })
    return newObj
}

function formatAssignment(assignment) {
    delete assignment.open
    delete assignment.lectureId
    return assignment
}

class CreateAssignmentModal extends React.Component {
    state = {
        open: false,
        dueDate: " ",
        type: " ",
        description: " ",
        lectureId: " "
    };

    renderLectureSelectMenu = () => {
        return this.props.user_lectures.map((lecture) => {
            return <option value={lecture.id}>{`${lecture.name}, ${lecture.professor}`}</option>
        })
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleChange = name => event => {
            this.setState({ [name]: event.target.value });
    };

    handleRequestClose = () => {
        this.setState({ open: false });
    };

    submitAssignment = () => {
        this.setState({open: false});
        const lectureId = parseInt(this.state.lectureId)
        const assignment = formatAssignment({...this.state});
        const trimmedAssignment = trimWhitespace(Object.entries(assignment))
        this.props.createAssignment(trimmedAssignment, lectureId)
    };

    render() {
        return null
        // return (
        //     <div>
        //         <Tooltip id="add-assignment-tooltip" title="Add an assignment" placement="top">
        //             <Icon
        //             color="contrast"
        //             onClick={this.handleOpen}
        //             >
        //                 event
        //             </Icon>
        //         </Tooltip>
        //         <Dialog
        //         open={this.state.open}
        //         onRequestClose={this.handleRequestClose}
        //         transition={Transition}
        //         keepMounted
        //         fullWidth
        //         >
        //         <DialogTitle>Assignment Details</DialogTitle>
        //             <DialogContent>
        //                 <form>
        //                     <div>
        //                         <FormControl className="input-grey">
        //                             <InputLabel className="lecture-type-select">Type</InputLabel>
        //                             <Select
        //                             native
        //                             value={this.state.type}
        //                             onChange={this.handleChange('type')}
        //                             >
        //                                 <option></option>
        //                                 <option value="Quiz"> Quiz </option>
        //                                 <option value="Exam"> Exam </option>
        //                                 <option value="Homework"> Homework </option>
        //                                 <option value="Paper"> Paper </option>
        //                                 <option value="Study Group"> Study Group </option>
        //                             </Select>
        //                         </FormControl>
        //                     </div>
        //                     <br />
        //                     <div>
        //                         <FormControl className="input-grey">
        //                             <TextField
        //                             label="Due date"
        //                             margin="dense"
        //                             id="dueDate"
        //                             type="date"
        //                             value={this.state.dueDate}
        //                             onChange={this.handleChange('dueDate')}
        //                             />
        //                         </FormControl>
        //                     </div>
        //                     <br />
        //                     <div>
        //                         <FormControl className="input-grey">
        //                             <InputLabel>Lecture</InputLabel>
        //                             <Select
        //                             native
        //                             value={this.state.lectureId}
        //                             onChange={this.handleChange('lectureId')}
        //                             input={<Input id="lectureId" />}
        //                             >
        //                                 <option></option>
        //                                 {this.renderLectureSelectMenu()}
        //                             </Select>
        //                         </FormControl>
        //                     </div>
        //                     <br />
        //                     <div>
        //                         <FormControl className="input-grey">
        //                             <TextField
        //                             name="description"
        //                             type="text"
        //                             label="Description"
        //                             onChange={this.handleChange('description')}
        //                             value={this.state.description}
        //                             />
        //                         </FormControl>
        //                     </div>
        //                 </form>
        //             </DialogContent>
        //             <DialogActions>
        //                 <Button onClick={this.handleRequestClose} color="primary">
        //                     Cancel
        //                 </Button>
        //                 <Button onClick={this.submitAssignment} color="primary">
        //                     Submit
        //                 </Button>
        //             </DialogActions>
        //         </Dialog>
        //     </div>
        // );
    }
}

function mapStateToProps(state) {
    return {
        create_assignment_modal: state.create_assignment_modal,
        user_lectures: state.user_lectures
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        createAssignment: createAssignment
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAssignmentModal);