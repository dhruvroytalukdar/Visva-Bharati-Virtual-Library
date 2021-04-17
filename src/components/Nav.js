import React from 'react'
import { NavLink } from 'react-router-dom';
import './compstyle.css';

export default function Nav() {
    return (
        <ul className="nav-body">
            <li className="nav-links">
                <NavLink to="/">
                    Home
                </NavLink>
            </li>
            <li className="nav-links">
                <NavLink to="/about">
                    About
                </NavLink>
            </li>
            <li className="nav-links">
                <NavLink to="/bhavans">
                    Bhavans
                </NavLink>
            </li>
        </ul>
    );
}
