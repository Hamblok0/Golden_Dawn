import React from "react";
import card from "../img/card.jpg";

const Spread = () => {
  return (
    <div className="spreadWrapper">
      <div className="querent">
        <h3>Querent</h3>
        <div className="triad">
          <div className="cardWrapper">
            <img src={card} />
          </div>
          <div className="cardWrapper">
            <img src={card} />
          </div>
          <div className="cardWrapper">
            <img src={card} />
          </div>
        </div>
        <div className="order">
          <div className="orderWrapper">
            <h3>2</h3>
          </div>
          <div className="orderWrapper">
            <h3>1</h3>
          </div>
          <div className="orderWrapper">  
            <h3>3</h3>
          </div>
        </div>
      </div>

      <div className="psychBasis">
        <h3>Psychological Basis</h3>
        <div className="triad">
          <div className="cardWrapper">
            <img src={card} />
          </div>
          <div className="cardWrapper">
            <img src={card} />
          </div>
          <div className="cardWrapper">
            <img src={card} />
          </div>
        </div>
        <div className="order">
          <div className="orderWrapper">
            <h3>14</h3>
          </div>
          <div className="orderWrapper">
            <h3>10</h3>
          </div>
          <div className="orderWrapper">
            <h3>6</h3>
          </div>
        </div>
      </div>

      <div className="currentPath">
        <h3>Current Path</h3>
        <div className="triad">
          <div className="cardWrapper">
            <img src={card} />
          </div>
          <div className="cardWrapper">
            <img src={card} />
          </div>
          <div className="cardWrapper">
            <img src={card} />
          </div>
        </div>
        <div className="order">
          <div className="orderWrapper">
            <h3>4</h3>
          </div>
          <div className="orderWrapper">
            <h3>8</h3>
          </div>
          <div className="orderWrapper">
            <h3>12</h3>
          </div>
        </div>
      </div>

      <div className="altPath">
        <h3>Alternate Path</h3>
        <div className="triad">
          <div className="cardWrapper">
            <img src={card} />
          </div>
          <div className="cardWrapper">
            <img src={card} />
          </div>
          <div className="cardWrapper">
            <img src={card} />
          </div>
        </div>
        <div className="order">
          <div className="orderWrapper">
            <h3>13</h3>
          </div>
          <div className="orderWrapper">
            <h3>9</h3>
          </div>
          <div className="orderWrapper">
            <h3>5</h3>
          </div>         
        </div>
      </div>

      <div className="karma">
        <h3>Karma</h3>
        <div className="triad">
          <div className="cardWrapper">
            <img src={card} />
          </div>
          <div className="cardWrapper">
            <img src={card} />
          </div>
          <div className="cardWrapper">
            <img src={card} />
          </div>
        </div>
        <div className="order">
          <div className="orderWrapper">
            <h3>7</h3>
          </div>
          <div className="orderWrapper">
            <h3>11</h3>
          </div>
          <div className="orderWrapper">
            <h3>15</h3>
          </div>    
        </div>
      </div>
    </div>
  );
};

export default Spread;
