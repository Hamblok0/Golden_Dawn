import React, { useState } from "react";

const ShuffleMain = props => {
    const [number, updateNumber] = useState(1);
    const handleSubmit = () => {
        props.setDeck(props.shuffle(props.deck, number))
    }
    return (
        <div className="shuffleMainWrapper">
            <div className="shuffleMain">
                <p>How many shuffles would you like?</p>
                <p>Don't overthink it, just choose a number between 1-100 that feels right to you</p>
                <form onSubmit={() => handleSubmit()}>
                    <input type="number" name="number" min="1" max="100" 
                    value={number} onChange={(e) => updateNumber(e.target.value)} className="numberInput"/>
                </form>
            </div>
        </div>
    )
}

export default ShuffleMain;