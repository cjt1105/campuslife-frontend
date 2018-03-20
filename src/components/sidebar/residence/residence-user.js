import React, { Component } from 'react'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { NavLink } from 'react-router-dom';
import Menu, { MenuItem } from 'material-ui/Menu';

export default class UserResidence extends Component {

    // componentDidUpdate(prevprops, prevstate){
    //     if(this.props.user_residence.length === 0 && this.props.user != null){
    //         const userId = this.props.user.id
    //         this.props.getUserResidence(userId)
    //     }
    // }

    render() {
        if(this.props.user_residence != null) {
            const name = this.props.user_residence.name.split(',')[0];
            return (
                <div className="sidebar-residence">
                    <NavLink activeClassName='active' to={`/residences/${this.props.user_residence.id}`}>
                        {name}
                    </NavLink>>
                </div>
            )
        }
        else {
            return (
                <div className="sidebar-residence"></div>
            )
        }
    }
}