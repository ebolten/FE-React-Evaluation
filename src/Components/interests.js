import React from 'react';
import Card from './card.js';

function Interests(props) {
    return(
        <div id="interests-div">
            <h1 id="home-welcome">Interests</h1>
            <div id="card-div">
                {props.store.getState().interests.interests.map((interest)=>(
                    <Card item={interest} />
                ))}
            </div>
        </div>
    )
}
export default Interests;