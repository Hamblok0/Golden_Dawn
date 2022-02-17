import React, { useState } from "react";

const Card = (props) => {
  const [info, toggleInfo] = useState(false);
  const name = props.card.name;
  const desc = props.card.shortDescription;
  const img = props.img;
  return (
    <div className="cardWrapper">
      {info ? (
        <div className="cardInfo" onClick={() => toggleInfo(false)}>
          <p>{name}</p>
          <p>{desc}</p>
          <button>More Info</button>
        </div>
      ) : (
        <img
          src={img}
          onClick={() => {
            toggleInfo(true);
          }}
        />
      )}
    </div>
  );
};

export default Card;
