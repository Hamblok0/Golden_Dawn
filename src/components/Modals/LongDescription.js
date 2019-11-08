import React from "react";

const LongDescription = props => {
    //<div className="longModalNav"><FontAwesomeIcon icon={faWindowClose}/></div>
    const preventToggle = e => {
        e.stopPropagation();
    }
    return (
        <div className="longDescWrapper" onClick={() => props.toggleLong(null)} style={props.style[0]}>
            <div className="longDescModal" onClick={(e) => preventToggle(e)} style={props.style[1]}>
                <h1>{props.card.name}</h1>
                <div className="longDescImg">
                    <img src={props.card.url}/>
                </div>
                <div className="longDescBody">
                    <p>Element: {props.card.element}</p>
                    <p>Short Description: {props.card.shortDescription}</p>
                    <p>Detail: {props.card.longDescription}</p>
                </div>
            </div>
        </div>
    )
};

export default LongDescription;