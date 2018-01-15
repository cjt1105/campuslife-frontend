import React, { Component } from 'react'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { NavLink } from 'react-router-dom';

export default class UserNoteList extends Component {

    renderList() {
        return this.props.notes.map((note) => {
            return (
                <ListItem button key={note.id}>
                    <ListItemText primary={note.name} />
                </ListItem>
            )
        })
    }

    render() {
        if(this.props.notes != null) {
            if(this.props.notes.length > 0) {
                return (
                    <div className="note-container">
                        <div className="note-header">
                            Notes
                        </div>
                        <div className="note-content">
                        <List>
                            {this.renderList()}
                        </List>
                        </div>
                    </div>
                )
            }
        }
        return null
    }
}