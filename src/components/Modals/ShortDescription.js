import React from "react";

const ShortDescription = props => {
    const key = props.card.name.charAt(0);
    const suite = switch (key) {
        case "t":
            return "Major Arcana";
            break;
        case "c": 
            return "Minor Arcana - Cups";
            break;
        case "w":
            return "Minor Arcana - Wands";
            break;
        case "d":
            return "Minor Arcana - Disks";
            break;
        case "s": 
            return "Minor Arcana - Swords";
            break;
        default:
            alert("Error, invalid card key");
    }
    return (
        <div className="shortDescBody">
            <p>{props.card.name}</p>
            <p>Suite: {suite}</p>
            <p>Element: {props.card.element}</p>
            <p>{props.card.shortDescription}</p>
            <a>Click here for more information about this card</a>
        </div>
    )
};

export default ShortDescription