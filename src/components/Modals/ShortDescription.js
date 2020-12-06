import React from "react";

const ShortDescription = (props) => {
  return (
    <div className="shortDescModal">
      <p>{props.card.name}</p>
      <p>Element: {props.card.element}</p>
      <p>{props.card.shortDescription}</p>
    </div>
  );
};

export default ShortDescription;
