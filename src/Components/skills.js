import React from 'react';
import Card from './card.js';

function Skills(props) {
    return(
        <div id="skills-div">
            <h1 id="home-welcome">Skills</h1>
            <div id="card-div">
                {props.store.getState().skills.skills.map((skill)=>(
                    <Card key={skill.id} item={skill} history={props.history} type={"skills"}/>
                ))}
            </div>
        </div>
    )
}
export default Skills;