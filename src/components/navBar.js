import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <div className="nav-links-container">
        <ul>
            < NavLink activeClassName='active' to="/"> Home </NavLink>
            <NavLink activeClassName='active' to="/dashboard"> Dashboard </NavLink>
        </ul>
        </div>
    )
}

export default NavBar