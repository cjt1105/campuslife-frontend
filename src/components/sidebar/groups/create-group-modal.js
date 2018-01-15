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
import GroupList from './group-list-all'

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

export default class CreateGroupModal extends Component {

    state = {
        open: false,
        groupsLoaded: false
    }

    componentDidMount() {
        if(this.state.groupsLoaded === false){
            this.setState({
                groupsLoaded: true
            }, () => {
                this.props.getAllGroups()
            })
        }
    }

    getInitialState = () => {
        return {
            open: false
        }
    }

    handleOpen = () => {
        this.setState({
            open: true
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

    cloneGroupListWithProps = (component) => {
        return React.cloneElement(component, {groups: this.props.groups})
    }

    submit = () => {
        const group = {
            name: this.state.name,
            description: this.state.description
        }
        const userId = this.props.user.id

        this.props.createGroup(group, userId);
        this.setState(this.getInitialState())
    }

    render() {
        return (
            <div>
            <Tooltip id="edit-profile-tooltip" title="Add a group" placement="right">
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
                native
                open={this.state.open}
                onRequestClose={this.handleClose}
                transition={Transition}
                fullWidth
                >
                    <DialogTitle>Add a group</DialogTitle>
                    <DialogContent>
                        {this.cloneGroupListWithProps(<GroupList />)}
                        <div className="text-input">
                        <FormControl>
                            <TextField
                            name="name"
                            type="text"
                            label="Name"
                            onChange={this.handleChange('name')}
                            value={this.state.name}
                            />
                        </FormControl>
                        </div>
                        <div className="text-input">
                        <FormControl>
                            <TextField
                            name="description"
                            type="text"
                            label="Description"
                            onChange={this.handleChange('description')}
                            value={this.state.description}
                            />
                        </FormControl>
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