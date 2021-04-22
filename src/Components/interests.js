import React from 'react';
import Card from './card.js';

function Interests(props) {
    return(
        <div id="interests-div">
            <h1 id="home-welcome">Interests</h1>
            <div id="card-div">
                {props.store.getState().interests.interests.map((interest)=>(
                    <Card key={interest.id} item={interest} history={props.history} type={"interests"}/>
                ))}
            </div>
        </div>
    )
}
export default Interests;