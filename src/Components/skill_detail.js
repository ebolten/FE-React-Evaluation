import React from 'react';

function SkillDeatil(props) {
    // detail item
    let currentItem = getItem(props.history.location.pathname.split('/')[props.history.location.pathname.split('/').length-1],props.store.getState().skills);
    return(
        <div id="skill-details">
            <h1 id="detail-welcome">{currentItem.name}</h1>
            <div id="item-details">
                <h3><span id={currentItem.type}>{currentItem.type}</span></h3>
                <br/><br/>
                <h3 style={{fontWeight:'200'}}>{currentItem.detail}</h3>
            </div>
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