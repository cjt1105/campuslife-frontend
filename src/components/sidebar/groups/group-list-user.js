import React, { Component } from 'react'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { NavLink } from 'react-router-dom';

export default class UserGroupList extends Component {

    renderList() {
        return this.props.user_groups.map((group) => {
            return (
                <ListItem button key={group.id}>
                    <ListItemText primary={group.name} />
                </ListItem>
            )
        })
    }

    render() {
        return (
            <div className="sidebar-container">
                <div className="sidebar-header">
                    Groups
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