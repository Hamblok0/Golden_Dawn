import React from "react";

const GoldenDawn = props => {
  const imgs = props.getImgs(props.deck, 15);
  return (
    <div className="spreadGD">
      <div className="row1">
        <h3>Alternate Path</h3>
        <div className="triad">
          <div className="cardWrapper">
            <img
              src={imgs[12]}
              onClick={() =>
                props.toggleShort(deck[12], imgs[12])
              }
            />
            <h3>13</h3>
          </div>
          <div className="cardWrapper">
            <img
              src={imgs[8]}
              onClick={() => props.toggleShort(props.deck[8], imgs[8])}
            />
            <h3>9</h3>
          </div>
          <div className="cardWrapper">
            <img
              src={imgs[4]}
              onClick={() => props.toggleShort(props.deck[4], imgs[4])}
            />
            <h3>5</h3>
          </div>
        </div>
        <div className="rowDivider"></div>
        <div className="currentPath">
          <h3>Current Path</h3>
          <div className="triad">
            <div className="cardWrapper">
              <img
                src={imgs[3]}
                onClick={() => props.toggleShort(props.deck[3], imgs[3])}
              />
              <h3>4</h3>
            </div>
            <div className="cardWrapper">
              <img
                src={imgs[7]}
                onClick={() => props.toggleShort(props.deck[7], imgs[7])}
              />
              <h3>8</h3>
            </div>
            <div className="cardWrapper">
              <img
                src={imgs[11]}
                onClick={() =>
                  props.toggleShort(props.deck[11], imgs[11])
                }
              />
              <h3>12</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="row2">
        <h3>Querent</h3>
        <div className="triad">
          <div className="cardWrapper">
            <img
              src={imgs[1]}
              onClick={() => props.toggleShort(props.deck[1], imgs[1])}
            />
            <h3>2</h3>
          </div>
          <div className="cardWrapper">
            <img
              src={imgs[0]}
              onClick={() => props.toggleShort(props.deck[0], imgs[0])}
            />
            <h3>1</h3>
          </div>
          <div className="cardWrapper">
            <img
              src={imgs[2]}
              onClick={() => props.toggleShort(props.deck[2], imgs[2])}
            />
            <h3>3</h3>
          </div>
        </div>
      </div>
      <div className="row3">
        <h3>Psychological Basis</h3>
        <div className="triad">
          <div className="cardWrapper">
            <img
              src={imgs[13]}
              onClick={() =>
                props.toggleShort(props.deck[13], imgs[13])
              }
            />
            <h3>14</h3>
          </div>
          <div className="cardWrapper">
            <img
              src={imgs[9]}
              onClick={() => props.toggleShort(props.deck[9], imgs[9])}
            />
            <h3>10</h3>
          </div>
          <div className="cardWrapper">
            <img
              src={imgs[5]}
              onClick={() => props.toggleShort(props.deck[5], imgs[5])}
            />
            <h3>6</h3>
          </div>
        </div>
        <div className="rowDivider"></div>
        <h3>Karma</h3>
        <div className="triad">
          <div className="cardWrapper">
            <img
              src={imgs[6]}
              onClick={() => props.toggleShort(props.deck[6], imgs[6])}
            />
            <h3>7</h3>
          </div>
          <div className="cardWrapper">
            <img
              src={imgs[10]}
              onClick={() =>
                props.toggleShort(props.deck[10], imgs[10])
              }
            />
            <h3>11</h3>
          </div>
          <div className="cardWrapper">
            <img
              src={imgs[14]}
              onClick={() =>
                props.toggleShort(props.deck[14], imgs[14])
              }
            />
            <h3>15</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoldenDawn;
