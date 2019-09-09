import React from "react"
const profile = require('../images/profile-pic.jpg')

const Header = () => {
    return (
        <div>
            <header>
                <h1>CHARLES BEACH</h1>
            </header>
            <img src={profile} alt="profile-pic" />
        </div>
    )
}

export default Header