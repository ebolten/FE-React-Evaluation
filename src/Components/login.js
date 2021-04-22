import React from 'react';
import Logo from '../Images/noinc-logo.png';

// component for login page and functionality
function Login(props) {
    return(
        <div>
            <br/><br/><br/><br/><br/><br/>
            <div id="login-div">
                <div id="login-logo">
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <img alt="login-logo" id="login-img" src={Logo}/>
                </div>
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
    props.updateUsername(username);
    props.history.push("/home");
}

export default Login;