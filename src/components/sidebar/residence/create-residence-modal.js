import React, { Component } from 'react';
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
import { MenuItem }from 'material-ui/Menu';
import Tooltip from 'material-ui/Tooltip';
import { FormControl } from 'material-ui/Form';
import Icon from 'material-ui/Icon';
import Slide from 'material-ui/transitions/Slide';
import GoogleMap from '../../residence/google-map';
import ResidenceModal from '../../sidebar/residence/residence-modal';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

export default class CreateLectureModal extends Component {

    state = {
        open: false
    }

    handleOpen = () => {
        this.setState({
            open: true,
            selectedResidence: null,
            residenceModalOpen: false
        }, () => {
            console.log(this.state)
        })
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

    cloneGoogleMapWithProps = (component) => {
        return React.cloneElement(component, {
            createResidence: this.props.createResidence,
            user: this.props.user,
            getAllResidences: this.props.getAllResidences,
            residences: this.props.residences,
            selectResidence: this.selectResidence
        })
    }

    selectResidence = (residence) => {
        this.setState({selectedResidence: residence, residenceModalOpen: true})
    }

    closeResidenceModal = () => {
        this.setState({residenceModalOpen: false})
    }

    cloneResidenceModalWithProps = (component) => {
        return React.cloneElement(component, {
            createResidence: this.props.createResidence,
            user: this.props.user,
            residences: this.props.residences,
            residence: this.props.residence,
            selectedResidence: this.state.selectedResidence,
            residenceModalOpen: this.state.residenceModalOpen,
            closeResidenceModal: this.closeResidenceModal,
            getSingleResidence: this.props.getSingleResidence
        })
    }

    render() {
        return (
            <div>
            <Tooltip id="edit-profile-tooltip" title="Add a residence" placement="right">
                    <div className="sidebar-button" onClick={this.handleOpen}>
                    <Icon
                    color="contrast"
                    onClick={this.handleOpen}
                    >
                        add_circle_outline
                    </Icon>
                    </div>
                </Tooltip>
                <Dialog
                fullScreen
                open={this.state.open}
                onRequestClose={this.handleClose}
                transition={Transition}
                fullWidth
                >
                    <DialogTitle>Add a residence</DialogTitle>
                    <DialogContent classes={{root: 'google-map-modal'}}>
                        <div>
                        {this.cloneGoogleMapWithProps(<GoogleMap />)}
                        </div>
                        <div>
                        {this.cloneResidenceModalWithProps(<ResidenceModal />)}
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}