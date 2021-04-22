import React from 'react';

function SkillDeatil(props) {
    // detail item
    let currentItem = getItem(props.history.location.pathname.split('/')[props.history.location.pathname.split('/').length-1],props.store.getState().skills);
    return(
        <div id="skill-details">
            <h1 id="home-welcome">{currentItem.name}</h1>
        </div>
    )
}

// get skill
function getItem(id,store) {
    for (var i = 0; i < store.skills.length; i++) {
        if (store.skills[i].id === parseInt(id)) {
            return store.skills[i];
        }
    }
    return id.toString();
}
export default SkillDeatil;