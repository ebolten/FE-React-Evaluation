import React from 'react';

function Home(props) {
    return(
        <div>
            Welcome, {props.store.getState().user.userName}
        </div>
    )
}
export default Home;