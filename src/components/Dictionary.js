import React, {useState} from "react";
import LongDescription from "./Modals/LongDescription";
import cardData from "../data/cardData.json";

const Dictionary = props => {
  const endpoint = process.env.cloudfront || "https://ds7jrtsekfc2s.cloudfront.net/"
  // temporary hard code until React Router situation is handled
  const cardInput = ["t-0", "t-1", "t-2", "t-3", "t-4", "t-5", "t-6", "t-7", "t-8", "t-9", "t-10", "t-11", "t-12", "t-13", "t-14", "t-15", "t-16", "t-17", "t-18", "t-19", "t-20", "t-21"];
  const toggleLong = () => {
    setLongDesc({active: false, data: null});
  }
  const [cards, getCards] = useState(cardInput);
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