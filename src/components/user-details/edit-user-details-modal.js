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
import Dropzone from 'react-dropzone';

  function Transition(props) {
    return <Slide direction="up" {...props} />;
}

export default class UserDetails extends React.Component {
    state = {
        open: false,
        facebook: null,
        twitter: null,
        snapchat: null,
        instagram: null,
        ps4: null,
        xboxLive: null,
        email: null,
        firstName: null,
        lastName: null,
        year: null
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

    handleYearSelection = (event) => {
        this.setState({
            year: event.target.value
        })
    }

    handleOpen = () => {
        this.setState({open: true});
            const user = this.state.user
            this.setState({
                facebook: user.facebook,
                twitter: user.twitter,
                snapchat: user.snapchat,
                instagram: user.instagram,
                ps4: user.ps4,
                xboxLive: user.xboxLive,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                pinterest: user.pinterest,
                year: user.year

            })

    };

    handleClose = () => {
        this.setState({open: false});
    };

    submit = () => {
        this.setState({open: false})
        const userDetails = {...this.state}
        delete userDetails.open
        delete userDetails.user
        this.props.submitProfileChanges(userDetails, this.props.user.id);
    }

    render() {
        if(this.props.user != null) {
            this.state.user = {...this.props.user}
            const actions = [
            <Button
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <Button
                label="Ok"
                primary={false}
                keyboardFocused={true}
                onClick={this.submitAssignment}
            />,
            ];
            return (
            <div>
                <Tooltip id="edit-profile-tooltip" title="Edit profile" placement="top">
                    <div className="edit-user-details-button" onClick={this.handleOpen}>
                    <Icon
                    color="contrast"
                    onClick={this.handleOpen}
                    >
                        edit
                    </Icon>
                    </div>
                </Tooltip>
                <Dialog
                native
                open={this.state.open}
                onRequestClose={this.handleClose}
                transition={Transition}
                fullWidth
                >
                    <DialogTitle>Edit</DialogTitle>
                    <DialogContent>
                    <form>
                        <div className="text-input">
                        <FormControl>
                            <TextField
                            autoFocus
                            name="firstName"
                            type="text"
                            label="First Name"
                            onChange={this.handleChange('firstName')}
                            value={this.state.firstName}
                            />
                        </FormControl>
                        </div>
                        <div className="text-input">
                        <FormControl className="text-input">
                            <TextField
                            name="lastName"
                            type="text"
                            label="Last Name"
                            onChange={this.handleChange('lastName')}
                            value={this.state.lastName}
                            />
                        </FormControl>
                        </div>
                        <div className="text-input">
                        <FormControl className="text-input">
                            <TextField
                            name="email"
                            type="text"
                            label="Email"
                            onChange={this.handleChange('email')}
                            value={this.state.email}
                            />
                        </FormControl>
                        </div>
                        <div className="text-input">
                        <FormControl className="text-input">
                            <TextField
                            name="snapchat"
                            type="text"
                            label="Snapchat"
                            onChange={this.handleChange('snapchat')}
                            value={this.state.snapchat}
                            />
                        </FormControl>
                        </div>
                        <div className="text-input">
                        <FormControl className="text-input">
                            <TextField
                            name="instagram"
                            type="text"
                            label="Instagram"
                            onChange={this.handleChange('instagram')}
                            value={this.state.instagram}
                            />
                        </FormControl>
                        </div>
                        <div className="text-input">
                        <FormControl className="text-input">
                            <TextField
                            name="facebook"
                            type="text"
                            label="Facebook"
                            onChange={this.handleChange('facebook')}
                            value={this.state.facebook}
                            />
                        </FormControl>
                        </div>
                        <div className="text-input">
                        <FormControl className="text-input">
                            <TextField
                            name="twitter"
                            type="text"
                            label="Twitter"
                            onChange={this.handleChange('twitter')}
                            value={this.state.twitter}
                            />
                        </FormControl>
                        </div>
                        <div className="text-input">
                        <FormControl className="text-input">
                            <TextField
                            name="xboxLive"
                            type="text"
                            label="Xbox Live"
                            onChange={this.handleChange('xboxLive')}
                            value={this.state.xboxLive}
                            />
                        </FormControl>
                        </div>
                        <div className="text-input">
                        <FormControl className="text-input">
                            <TextField
                            name="ps4"
                            type="text"
                            label="PS4"
                            onChange={this.handleChange('ps4')}
                            value={this.state.ps4}
                            />
                        </FormControl>
                        </div>
                        <div className="text-input">
                        <FormControl className="text-input">
                            <TextField
                            name="pinterest"
                            type="text"
                            label="Pinterest"
                            onChange={this.handleChange('pinterest')}
                            value={this.state.pinterest}
                            />
                        </FormControl>
                        </div>
                        <div className="text-input">
                        <FormControl>
                            <InputLabel>Class</InputLabel>
                            <Select
                            native
                            value={this.state.year}
                            onChange={this.handleYearSelection}
                            >
                                <option value="Freshman"> Freshman </option>
                                <option value="Sophmore">Sophmore</option>
                                <option value="Junior">Junior</option>
                                <option value="Senior">Senior</option>
                                <option value="SuperSenior">Super Senior</option>
                                <option value="GradStudent">Grad Student</option>
                            </Select>
                        </FormControl>
                        </div>
                    </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.submit} color="primary">
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
        }
        else {
            return null
        }
    }
}
