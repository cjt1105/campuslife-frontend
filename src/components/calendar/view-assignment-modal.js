import React, { Component } from 'react'
import { Button, Modal, Icon } from 'semantic-ui-react'
import AssignmentCommentsList from './assignment/assignment-comment-list'

export default class ViewAssignmentModal extends Component {
    state = {
        open: false,
        assignmentLoaded: false
    };

    componentDidUpdate() {
        if(this.props.assignments != null && this.state.assignmentLoaded === false) {
            this.setState({open: true, assignmentLoaded: true})
        }
    }

    handleClose = () => {
        this.props.handleClose()
    }

    render() {
        if(this.props.assignments === null ) {
            return (
                null
            )
        }
        return (
            <div>
                <div>
                    <Modal
                    open={this.props.open}
                    onClose={this.handleClose}
                    >
                        <Modal.Header>
                            {this.props.assignments.details.type}
                        </Modal.Header>
                        <Modal.Content>
                            {this.props.assignments.details.description}
                        </Modal.Content>
                        <Modal.Content>
                            {React.cloneElement(<AssignmentCommentsList />, {
                            comments: this.props.assignments.comments
                            })}
                        </Modal.Content>
                        <Modal.Actions>
                            <Button color='green' onClick={this.handleClose} inverted>
                                <Icon name='window close' /> Close
                            </Button>
                        </Modal.Actions>
                    </Modal>
                </div>
            </div>
        )
    }
}