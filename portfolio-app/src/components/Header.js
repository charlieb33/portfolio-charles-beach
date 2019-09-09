import React from "react"
import "../styles/Header.css"

const profile = require('../images/profile-pic.jpg')

const Header = () => {
    return (
        <div className="header-container">
            <header>
                <h1>CHARLES BEACH</h1>
            </header>
            <img src={profile} alt="profile-pic" />
        </div>
    )
}

export default Header