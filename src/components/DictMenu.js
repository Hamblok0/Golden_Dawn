import React from "react";
import { Link } from "react-router-dom";

const DictMenu = () => {
  const endpoint = process.env.CARDS
  return (
    <div className="dictMenuWrapper">
      <div className="dictSwords">
        <Link to="/dictionary/s">
          <img src={`${endpoint}s-1.png`} alt="card"/>
          <h3>Suite of Swords</h3>
        </Link>
      </div>
      <div className="dictWands">
        <Link to="/dictionary/w">
          <img src={`${endpoint}w-1.png`} alt="card"/>
          <h3>Suite of Wands</h3>
        </Link>
      </div>
      <div className="dictArcana">
        <Link to="/dictionary/t">
          <img src={`${endpoint}t-0.png`} alt="card"/>
          <h3>Major Arcana</h3>
        </Link>
      </div>
      <div className="dictCups">
        <Link to="/dictionary/c">
          <img src={`${endpoint}c-1.png`} alt="card"/>
          <h3>Suite of Cups</h3>
        </Link>
      </div>
      <div className="dictDisks">
        <Link to="/dictionary/d">
          <img src={`${endpoint}d-1.png`} alt="card"/>
          <h3>Suite of Disks</h3>
        </Link>
      </div>
    </div>
  )
}

export default DictMenu;