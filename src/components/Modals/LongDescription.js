import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

const LongDescription = props => {
    //<div className="longModalNav"><FontAwesomeIcon icon={faWindowClose}/></div>
    const preventToggle = e => {
        e.stopPropagation();
    }
    return (
        <div className="longDescWrapper" onClick={() => props.toggleLong(null)}>
            <div className="longDescModal" onClick={(e) => preventToggle(e)}>
                <h1>{props.card.name}</h1>
                <div className="longDescImg">
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