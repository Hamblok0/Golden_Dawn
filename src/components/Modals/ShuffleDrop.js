import React, { useState } from "react";

const ShuffleDrop = props => {
    const [number, updateNumber] = useState(1);
    const handleSubmit = () => {
        props.setDeck(props.shuffle(props.deck, number))
    }
    return (
        <div className="shuffleDrop">
            <div className="triangle"></div>
            <form onSubmit={() => handleSubmit()}>
                <input type="number" min="1" max="100" value={number} onChange={e => updateNumber(e.target.value)}/> 
            </form>
        </div>
    )
};

export default ShuffleDrop;