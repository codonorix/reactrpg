import React from "react";

import './navbar.css'
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div id={'navBar'}>
            <ul>
                <Link to={'/'}><ol>Home</ol></Link>
                <Link to={'/info'}><ol>Info</ol></Link>
                <Link to={'/membership'}><ol>Membership</ol></Link>
                <Link to={'/profile'}><ol>Profile</ol></Link>
            </ul>
        </div>
    )
}

export default Navbar