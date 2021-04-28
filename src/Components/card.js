import React from 'react';

function Card(props) {
    return(
        <div>
            <div className="hidden-xs" id="card" onClick={()=>redirectCard(props.item.id,props.history,props.type)}>
                {/* show skills or interest card */}
                <h2 id="card-name">{props.item.name}</h2>
                <div id="card-details">
                    <span>Type: <span id={props.item.type}>{props.item.type}</span></span>
                    <br/><br/>
                    {props.item.DateLearned ? <span>Date Learned: {props.item.DateLearned.toString().substring(0,4)}</span> : <span>Current: {props.item.current.toString()}</span> }
                </div>
            </div>
            <div className="visible-xs" id="card-sm" onClick={()=>redirectCard(props.item.id,props.history,props.type)}>
                {/* show skills or interest card */}
                <h2 id="card-name">{props.item.name}</h2>
                <div id="card-details">
                    <span>Type: <span id={props.item.type}>{props.item.type}</span></span>
                    <br/><br/>
                    {props.item.DateLearned ? <span>Date Learned: {props.item.DateLearned.toString().substring(0,4)}</span> : <span>Current: {props.item.current.toString()}</span> }
                </div>
            </div>
        </div>
    )
}

// redirect user to specific card detail page
function redirectCard(path,history,type) {
    history.push(`${type}/${path.toString()}`);
}

export default Card;