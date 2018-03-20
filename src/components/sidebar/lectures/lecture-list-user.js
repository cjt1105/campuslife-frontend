import React, { Component } from 'react';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { NavLink } from 'react-router-dom';



export default class UserLectureList extends Component {

    renderList() {
        return this.props.user_lectures.map((lecture) => {
            return (
                <ListItem button key={lecture.id}>
                    <NavLink activeClassName='active' to={`/lectures/${lecture.id}`}>
                        {lecture.name}
                    </NavLink>
                </ListItem>
            )
        })
    }

    render() {
        return (
            <div className="sidebar-container">
                <div className="sidebar-header">
                    Lectures
                </div>
                <div className="sidebar-content">
                <List>
                    {this.renderList()}
                </List>
                </div>
            </div>
        )
    }
}