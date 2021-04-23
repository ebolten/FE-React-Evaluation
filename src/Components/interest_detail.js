import React from 'react';

function InterestDeatil(props) {
    // detail item
    let currentItem = getItem(props.history.location.pathname.split('/')[props.history.location.pathname.split('/').length-1],props.store.getState().interests);

    return(
        <div id="interest-details">
            <h1 id="detail-welcome">{currentItem.name}</h1>
            <div id="item-details">
                <h3><span id={currentItem.type}>{currentItem.type}</span></h3>
                <br/><br/>
                <h3 style={{fontWeight:'200'}}>{currentItem.detail}</h3>
            </div>
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