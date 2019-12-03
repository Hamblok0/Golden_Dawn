import React, { useState, useEffect } from "react";
import LongDescription from "./Modals/LongDescription";
import cardData from "../data/cardData.json";

const Dictionary = props => {
  const endpoint = process.env.cloudfront || "https://ds7jrtsekfc2s.cloudfront.net/"
  
  const toggleLong = () => {
    setLongDesc({active: false, data: null});
  }

  const setSuite = suite => {
    let cards = []
    for (let card in cardData) {  
      if (card.split("")[0] === suite) {
        cards.push(card);
      }
    }
    return cards;
  }

  const [cards, getCards] = useState(setSuite(props.match.params.id));
  const [imgs, getImgs] = useState(() => {
    return cards.map(card => {
      return endpoint + card + '.png';
    });
  })

  const [longDesc, setLongDesc] = useState({active: false, data: null})
  const style = [{"justifyContent": "center"}, {"width": "600px"}]

  return (
    <div className="dictWrapper">
      {longDesc.active && <LongDescription card={longDesc.data} toggleLong={toggleLong} style={style}/>}
      <h1>Major Arcana</h1>
      <div className="dictCardsWrapper"> 
        {cards.map((card, i) => {
          const data = {...cardData[card], url: imgs[i]}
          return (
            <div className="dictCard" key={i} onClick={() => setLongDesc({active: true, data: data})}> 
              <h3>{cardData[card].name}</h3>
              <img src={imgs[i]} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Dictionary;