import React from 'react';

function Navbar(props) {
    return(
        <div id="navbar">
            <a href="/home">Home</a>
            <a href="/">Login</a>
            Welcome, {props.store.getState().user.userName}
        </div>
    )
}
export default Navbar;