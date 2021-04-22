import React from 'react';
import Logo from '../Images/noinc-logo.png';

function Navbar(props) {
    return(
        <div id="navbar">
            <img id="nav-logo" alt="logo" src={Logo} />
            <br/>
            <span className="nav-divider">|</span>
            {props.history.location.pathname === "/home" ? <span className="nav-item-active" href="/home">Home</span> : <span onClick={()=>addHistory(props.history,"/home")} className="nav-item" href="/home">Home</span>}
            <span className="nav-divider">|</span>
            {props.history.location.pathname === "/interests" ? <span className="nav-item-active" href="/interests">Interests</span> : <span onClick={()=>addHistory(props.history,"/interests")} className="nav-item" href="/interests">Interests</span>}
            <span className="nav-divider">|</span>
            {props.history.location.pathname === "/skills" ? <span className="nav-item-active" href="/skills">Skills</span> : <span onClick={()=>addHistory(props.history,"/skills")} className="nav-item" href="/skills">Skills</span>}
            <span className="nav-divider">|</span>
            <a className="nav-item" href="/">Logout</a>
            <span className="nav-divider">|</span>
            <span id="nav-welcome"><i className="fa fa-user"></i>&nbsp;Welcome, {props.store.getState().user.userName}</span>
        </div>
    )
}

function addHistory(history,route) {
    history.push(route)
}
export default Navbar;