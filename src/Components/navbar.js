import React from 'react';
import Logo from '../Images/noinc-logo.png';

function Navbar(props) {
    console.log(props.history.location.pathname)
    return(
        <div id="navbar">
            <img id="nav-logo" alt="logo" src={Logo} />
            <br/>
            <span className="nav-divider">|</span>
            {props.history.location.pathname === "/home" ? <a className="nav-item-active" href="/home">Home</a> : <a className="nav-item" href="/home">Home</a>}
            <span className="nav-divider">|</span>
            {props.history.location.pathname === "/interests" ? <a className="nav-item-active" href="/interests">Interests</a> : <a className="nav-item" href="/interests">Interests</a>}
            <span className="nav-divider">|</span>
            {props.history.location.pathname === "/skills" ? <a className="nav-item-active" href="/skills">Skills</a> : <a className="nav-item" href="/skills">Skills</a>}
            <span className="nav-divider">|</span>
            <a className="nav-item" href="/">Logout</a>
            <span className="nav-divider">|</span>
            <span id="nav-welcome"><i className="fa fa-user"></i>&nbsp;Welcome, {props.store.getState().user.userName}</span>
        </div>
    )
}
export default Navbar;