import React from "react";

const GoldenDawn = props => {
  return (
    <div className="spread">
      <div className="row1">
        <div className="altPath">
          <h3>Alternate Path</h3>
          <div className="triad">
            <div className="cardWrapper">
              <img
                src={props.imgs[12]}
                onClick={() =>
                  props.toggleShort(props.deck[12], props.imgs[12])
                }
              />
              <h3>13</h3>
            </div>
            <div className="cardWrapper">
              <img
                src={props.imgs[8]}
                onClick={() => props.toggleShort(props.deck[8], props.imgs[8])}
              />
              <h3>9</h3>
            </div>
            <div className="cardWrapper">
              <img
                src={props.imgs[4]}
                onClick={() => props.toggleShort(props.deck[4], props.imgs[4])}
              />
              <h3>5</h3>
            </div>
          </div>
        </div>
        <div className="rowDivider"></div>
        <div className="currentPath">
          <h3>Current Path</h3>
          <div className="triad">
            <div className="cardWrapper">
              <img
                src={props.imgs[3]}
                onClick={() => props.toggleShort(props.deck[3], props.imgs[3])}
              />
              <h3>4</h3>
            </div>
            <div className="cardWrapper">
              <img
                src={props.imgs[7]}
                onClick={() => props.toggleShort(props.deck[7], props.imgs[7])}
              />
              <h3>8</h3>
            </div>
            <div className="cardWrapper">
              <img
                src={props.imgs[11]}
                onClick={() =>
                  props.toggleShort(props.deck[11], props.imgs[11])
                }
              />
              <h3>12</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="row2">
        <div className="querent">
          <h3>Querent</h3>
          <div className="triad">
            <div className="cardWrapper">
              <img
                src={props.imgs[1]}
                onClick={() => props.toggleShort(props.deck[1], props.imgs[1])}
              />
              <h3>2</h3>
            </div>
            <div className="cardWrapper">
              <img
                src={props.imgs[0]}
                onClick={() => props.toggleShort(props.deck[0], props.imgs[0])}
              />
              <h3>1</h3>
            </div>
            <div className="cardWrapper">
              <img
                src={props.imgs[2]}
                onClick={() => props.toggleShort(props.deck[2], props.imgs[2])}
              />
              <h3>3</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="row3">
        <div className="psychBasis">
          <h3>Psychological Basis</h3>
          <div className="triad">
            <div className="cardWrapper">
              <img
                src={props.imgs[13]}
                onClick={() =>
                  props.toggleShort(props.deck[13], props.imgs[13])
                }
              />
              <h3>14</h3>
            </div>
            <div className="cardWrapper">
              <img
                src={props.imgs[9]}
                onClick={() => props.toggleShort(props.deck[9], props.imgs[9])}
              />
              <h3>10</h3>
            </div>
            <div className="cardWrapper">
              <img
                src={props.imgs[5]}
                onClick={() => props.toggleShort(props.deck[5], props.imgs[5])}
              />
              <h3>6</h3>
            </div>
          </div>
        </div>
        <div className="rowDivider"></div>
        <div className="karma">
          <h3>Karma</h3>
          <div className="triad">
            <div className="cardWrapper">
              <img
                src={props.imgs[6]}
                onClick={() => props.toggleShort(props.deck[6], props.imgs[6])}
              />
              <h3>7</h3>
            </div>
            <div className="cardWrapper">
              <img
                src={props.imgs[10]}
                onClick={() =>
                  props.toggleShort(props.deck[10], props.imgs[10])
                }
              />
              <h3>11</h3>
            </div>
            <div className="cardWrapper">
              <img
                src={props.imgs[14]}
                onClick={() =>
                  props.toggleShort(props.deck[14], props.imgs[14])
                }
              />
              <h3>15</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoldenDawn;
