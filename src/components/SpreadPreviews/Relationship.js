import React from "react";

const RelationshipPreview = (props) => {
  return (
    <div className="spreadCard">
      <div className="spreadPreviewRel">
        <div className="row1">
          <img src={props.card} />
          <div></div>
          <img src={props.card} />
        </div>
        <div className="row2">
          <img src={props.card} />
          <img src={props.card} />
          <img src={props.card} />
        </div>
        <div className="row1">
          <img src={props.card} />
          <div></div>
          <img src={props.card} />
        </div>
      </div>
      <p>Relationship Spread</p>
      <p>Difficulty: Easy</p>
      <p>
        In this spread, the querent sits on the left and the other person in
        question on the right, with the middle card being the significator of
        the relationship. From top to bottom, the cards represent the conscious
        perspective of the other, the unconscious, and the persona the person
        uses for the other.
      </p>
    </div>
  );
};

export default RelationshipPreview;
