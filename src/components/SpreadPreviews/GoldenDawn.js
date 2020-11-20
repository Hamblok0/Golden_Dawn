import React from "react";

const GoldenDawnPreview = (props) => {
  return (
    <div className="spreadCard">
      <div className="spreadPreviewGD">
        <div className="row1">
          <img src={props.card} />
          <img src={props.card} />
          <img src={props.card} />
          <div></div>
          <img src={props.card} />
          <img src={props.card} />
          <img src={props.card} />
        </div>
        <div className="row2">
          <img src={props.card} />
          <img src={props.card} />
          <img src={props.card} />
        </div>
        <div className="row1">
          <img src={props.card} />
          <img src={props.card} />
          <img src={props.card} />
          <div></div>
          <img src={props.card} />
          <img src={props.card} />
          <img src={props.card} />
        </div>
      </div>

      <p>Golden Dawn Spread</p>
      <p>Difficulty: Very Hard</p>
      <p>
        The Golden Dawn spread is a simpler version of the original spread the
        Hermetic Order intended to use with the Thoth deck, but is nonetheless
        still a difficult spread to interpret. This spread requires knowledge of
        elemental dignities to determine the light or dark quality of a given
        card.
      </p>
    </div>
  );
};

export default GoldenDawnPreview;
