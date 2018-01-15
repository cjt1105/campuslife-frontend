import React from 'react';
import Dialog from 'material-ui/Dialog';
import Button from 'material-ui/Button';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import selectAssignment from '../actions/calendar/selectAssignment';
import openAssignmentModal from '../actions/calendar/openAssignmentModal';
import closeAssignmentModal from '../actions/calendar/closeAssignmentModal';

class ViewAssignmentModal extends React.Component {

    handleClose = () => {
        this.props.closeAssignmentModal()
    };

    render() {
        const actions = [
            <Button
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />
        ];
        if( this.props.view_assignment_modal.open === undefined ){
            return null
        }

        return (
            <div>
                <Dialog
                native
                title={this.props.selected_assignment.title}
                actions={actions}
                modal={true}
                fullWidth
                open={this.state.open}
                onRequestClose={this.handleClose}>
                    {this.props.selected_assignment.description}
                </Dialog>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        selected_assignment: state.selected_assignment,
        view_assignment_modal: state.view_assignment_modal
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        openAssignmentModal: openAssignmentModal,
        closeAssignmentModal: closeAssignmentModal
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewAssignmentModal);