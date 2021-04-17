import React from 'react'
import picture from '../images/vb.jpg';
import logo from '../images/logo.png';

export default function Home() {
    console.log(picture);
    return (
        <div className="home-container">
            <div className="header-section">
                <img className="logo" src={logo} alt="visva bharati logo" />
                <h2 className="main-title">Visva Bharati Virtual Library</h2>
            </div>
            <img className="main-image" src={picture} alt="university pictures"/>
        </div>
    )
}
