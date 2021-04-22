import React from 'react';

function Home(props) {
    return(
        <div id='homepage'>
            <h1 id="home-welcome">Welcome, {props.store.getState().user.userName}!</h1>
        </div>
    )
}
export default Home;