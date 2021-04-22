import React from 'react';

function Navbar(props) {
    return(
        <div id="navbar">
            <a href="/home">Home</a>
            <a href="/">Login</a>
            Welcome, {props.username}
        </div>
    )
}
export default Navbar;