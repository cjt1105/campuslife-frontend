import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export default class ResidentsList extends Component {

    renderResidents = (residents) => {
        return residents.map(resident => {
            return (
                <div className='student-card'>
                    <div className="student-backdrop">
                    <div className="student-image">
                    <Image size="tiny" src={resident.profilePhoto.url} avatar />
                    </div>
                    <div className="student-name">
                        <NavLink to={`users/${resident.id}`}>
                        {resident.firstName} {resident.lastName}
                        </NavLink>
                    </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        if(this.props.residents != undefined){
            return (
                <div className="lecture-notes-container">
                    <div className="container-backdrop">
                        Residents
                        <div>
                            {this.renderResidents(this.props.residents)}
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="lecture-note-list">
                    <div className="container-backdrop">
                    </div>
                </div>
            )
        }
    }
}