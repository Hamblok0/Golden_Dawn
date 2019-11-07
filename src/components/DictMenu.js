import React from "react";

const DictMenu = () => {
  const endpoint = process.env.cloudfront || "https://ds7jrtsekfc2s.cloudfront.net/"
  return (
    <div className="dictMenuWrapper">

      <div className="dictSwords">
        <img src={`${endpoint}s-1.png`} alt="card"/>
        <h3>Suite of Swords</h3>
      </div>

      <div className="dictWands">
        <img src={`${endpoint}w-1.png`} alt="card"/>
        <h3>Suite of Wands</h3>
      </div>

      <div className="dictArcana">
        <img src={`${endpoint}t-0.png`} alt="card"/>
        <h3>Major Arcana</h3>
      </div>

      <div className="dictCups">
        <img src={`${endpoint}c-1.png`} alt="card"/>
        <h3>Suite of Cups</h3>
      </div>
      
      <div className="dictDisks">
        <img src={`${endpoint}d-1.png`} alt="card"/>
        <h3>Suit of Disks</h3>
      </div>

    </div>
  )
}

export default DictMenu;