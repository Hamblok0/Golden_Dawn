import React from "react";
import card from "../img/card.jpg";

const DictMenu = () => {
  return (
    <div className="dictMenuWrapper">

      <div className="dictSwords">
        <img src={card} alt="card"/>
        <h3>Suite of Swords</h3>
      </div>

      <div className="dictWands">
        <img src={card} alt="card"/>
        <h3>Suite of Wands</h3>
      </div>

      <div className="dictArcana">
        <img src={card} alt="card"/>
        <h3>Major Arcana</h3>
      </div>

      <div className="dictCups">
        <img src={card} alt="card"/>
        <h3>Suite of Cups</h3>
      </div>
      
      <div className="dictDisks">
        <img src={card} alt="card"/>
        <h3>Suit of Disks</h3>
      </div>

    </div>
  )
}

export default DictMenu;