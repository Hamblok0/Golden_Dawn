import React from "react";

const PPF = (props) => {
  return (
    <div className="spreadCard">
      <div className="spreadPreviewPPF">
        <div className="row1">
          <div></div>
        </div>
        <div className="row2">
          <img src={props.card} />
          <img src={props.card} />
          <img src={props.card} />
        </div>
        <div className="row1">
          <div></div>
        </div>
      </div>
      <p>Past Present Future Spread</p>
      <p>Difficulty: Very Easy</p>
      <p>
        This spread is fairly obvious; the cards sequentially describe the
        nature of your question with the past, present, and future in mind. This
        is a really good spread if you just want a quick reading. Elemental
        dignities do not apply here, either.
      </p>
    </div>
  );
};

export default PPF;
