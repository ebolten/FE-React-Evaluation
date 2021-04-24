import React from 'react';
import Logo from '../Images/noinc-logo.png';

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
                    <form onSubmit={event => props.submitLogin(event,props.history)}>
                        <h2 style={{color:'white'}}>Login to Our Magic Portal</h2>
                        <input name="username" className="login-field" placeholder="Username" type="text"/>
                        <br/><br/>
                        <input name="password" className="login-field" placeholder="Password" type="password"/>
                        <br/><br/>
                        <button id="login-button" type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login;