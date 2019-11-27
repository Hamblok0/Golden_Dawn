import React, { useState } from "react";

const ShuffleDrop = props => {
    const [number, updateNumber] = useState(1);
    const handleSubmit = e => {
        props.setDeck(props.shuffle(props.deck, number))
        e.preventDefault();
    }
    return (
        <div className="shuffleDrop">
            <div className="triangle"></div>
            <form onSubmit={e => handleSubmit(e)}>
                <input type="number" min="1" max="100" value={number} onChange={e => updateNumber(e.target.value)}/> 
            </form>
        </div>
    )
};

export default ShuffleDrop;