import React, { Component } from 'react';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';
import Button from 'material-ui/Button';

export default class ResidenceModal extends Component {

    state = {

    }

    componentDidUpdate = () => {
        console.log("heyheyhey", this.props)
    }


    render() {
        if(this.props.selectedResidence != null){
            console.log(this.props)
            return (
                <Dialog
                fullScreen
                open={this.props.residenceModalOpen}
                onRequestClose={this.handleClose}
                fullWidth
                >
                    <DialogTitle>{this.props.selectedResidence.name}</DialogTitle>
                    <DialogContent>
                        {this.props.selectedResidence.name}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick = {this.props.closeResidenceModal}>
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
            )
        }
        return <div>hi</div>;
    }
}