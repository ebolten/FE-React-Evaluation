import React from 'react';

function InterestDeatil(props) {
    // detail item
    let currentItem = getItem(props.history.location.pathname.split('/')[props.history.location.pathname.split('/').length-1],props.store.getState().interests);

    return(
        <div id="interest-details">
            <h1 id="home-welcome">{currentItem.name}</h1>
        </div>
    )
}

// get interest
function getItem(id,store) {
    for (var i = 0; i < store.interests.length; i++) {
        if (store.interests[i].id === parseInt(id)) {
            return store.interests[i];
        }
    }
    return id.toString();
}
export default InterestDeatil;