import { NavLink } from 'react-router-dom';
import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';

export default class StudentList extends Component {

    renderLostAndFoundItems = (items) => {
        return items.map(item => {
            const user = item.foundBy
            return (
                <div className='student-card'>
                    <div className="student-backdrop">
                    <div className="student-image">
                    <Image size="small" src={item.photo.url} />
                    </div>
                    <div className="student-name">
                        {item.description}<br/>
                        Found by <br/>
                        <NavLink to={`users/${user.id}`}>
                        {user.firstName} {user.lastName}
                        </NavLink>
                    </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        if(this.props.items != undefined){
            return (
                <div>
                    Lost And Found
                    <div>
                        {this.renderLostAndFoundItems(this.props.items)}
                    </div>
                </div>
            );
    }
    return null
    }
}