import React from "react";

const LongDescription = props => {
    return (
        <div className="longDescWrapper">
            <div className="longDescModal">
                <button onClick={() => props.toggleLong(null)}>Exit</button>
                <div className="longDescTitle">
                    <h1>{props.card.name}</h1>
                </div>
                <div>
                    <img src={props.card.url}/>
                </div>
                <div className="longDescBody">
                    <p>Short Description: {props.card.shortDescription}</p>
                    <p>Detail: {props.card.longDescription}</p>
                </div>
            </div>
        </div>
    )
};

export default LongDescription;