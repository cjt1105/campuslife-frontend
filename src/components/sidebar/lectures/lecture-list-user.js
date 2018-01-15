import React, { Component } from 'react';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { NavLink } from 'react-router-dom';


export default class UserLectureList extends Component {

    renderList() {
        return this.props.user_lectures.map((lecture) => {
            return (
                <ListItem button key={lecture.id}>
                    <ListItemText primary={lecture.name} />
                </ListItem>
            )
        })
    }

    render() {
        return (
            <div className="lecture-sidebar-container">
                <div className="lecture-sidebar-header">
                    Lectures
                </div>
                <div className="lecture-sidebar-content">
                <List>
                    {this.renderList()}
                </List>
                </div>
            </div>
        )
    }
}