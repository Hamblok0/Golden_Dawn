import React from "react";

const ShortDescription = props => {
    return (
        <div className="shortDescModal">
            <p>{props.card.name}</p>
            <p>Element: {props.card.element}</p>
            <p>{props.card.shortDescription}</p>
            <a onClick={() => props.toggleLong(props.card)}>Click here for more information about this card</a>
        </div>
    )
};

export default ShortDescription