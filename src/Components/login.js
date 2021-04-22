import React from 'react';
import Logo from '../Images/noinc-logo.png';

// variables containing whether username or password is valid
let validPassword = false;
let validUsername = false;

// component for login page and functionality
function Login(props) {
    return(
        <div>
            <br/><br/><br/><br/><br/><br/>
            <div id="login-div">
                {/* login image */}
                <div id="login-logo">
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <img alt="login-logo" id="login-img" src={Logo}/>
                </div>
                {/* username and password fields */}
                <div id="login-form">
                    <br/><br/><br/><br/>
                    <form>
                        <h2 style={{color:'white'}}>Login to Our Magic Portal</h2>
                        <input id="username" className="login-field" placeholder="Username" type="text"/>
                        <br/><br/>
                        <input id="password" className="login-field" placeholder="Password" type="password"/>
                        <br/><br/>
                        <button onClick={(event) => onSubmit(event,props)} id="login-button" type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
// when user submits login form
function onSubmit(event,props) {
    event.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    // check if username is valid
    if (username.length < 1) {
        alert("Invalid Username")
    } else {
        validUsername = true;
    }
    // check if password is valid
    if (password.length < 5) {
        alert("Password Must Contain at Least 5 Characters")
    } else {
        validPassword = true;
    }
    // if username and password are valid, redirect to homepage
    if (validPassword && validUsername) {
        props.updateUsername(username);
        // set timeout so theres time to load interests and skills before redirecting
        setTimeout(function(){props.history.push("/home");},250);
    }
}

export default Login;