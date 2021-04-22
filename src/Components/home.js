import React from 'react';
import Card from './card.js';

function Home(props) {
    return(
        <div id='homepage'>
            <h1 id="home-welcome">Welcome, {props.store.getState().user.userName}!</h1>
            {/* show first 3 interests */}
            <br/>
            <h2 id="featured-text">Featured Interests</h2>
            <div id="card-div">
                {props.store.getState().interests.interests.map((interest)=>(
                    interest.id % 2 !== 0 ? <Card item={interest} /> : ''
                ))}
            </div>
            {/* show first 3 skills */}
            <br/>
            <h2 id="featured-text">Featured Skills</h2>
            <div id="card-div">
                {props.store.getState().skills.skills.map((skill)=>(
                    skill.id % 2 !== 0 ? <Card item={skill} /> : ''
                ))}
            </div>

        </div>
    )
}
export default Home;