import React, { useState, useEffect } from "react";
import card from "../img/card.jpg";
import cardData from "../data/cardData.json";
import ShortDescription from "./Modals/ShortDescription";
import LongDescription from "./Modals/LongDescription";

const Spread = () => {
  const endpoint = process.env.cloudfront || "https://ds7jrtsekfc2s.cloudfront.net/"
  const cards = ['t-0', 't-1', 't-2', 't-3', 't-4', 't-5', 't-6', 't-7', 't-8', 't-9', 't-10', 't-11', 't-12', 't-13', 't-14', 't-15',
                't-16', 't-17', 't-18', 't-19', 't-20', 't-21', 'w-1', 'w-2', 'w-3', 'w-4', 'w-5', 'w-6', 'w-7', 'w-8', 'w-9', 'w-10',
                'w-k', 'w-q', 'w-p1', 'w-p2', 's-1', 's-2', 's-3', 's-4', 's-5', 's-6', 's-7', 's-8', 's-9', 's-10', 's-k', 's-q', 's-p1',
                's-p2', 'c-1', 'c-2', 'c-3', 'c-4', 'c-5', 'c-6', 'c-7', 'c-8', 'c-9', 'c-10', 'c-k', 'c-q', 'c-p1', 'c-p2', 'd-1', 'd-2',
                'd-3', 'd-4', 'd-5', 'd-6', 'd-7', 'd-8', 'd-9', 'd-10', 'd-k', 'd-q', 'd-p1', 'd-p2'];

  const getCards = shuffledDeck => {
    const urls = shuffledDeck.slice(0, 15).map(card => {
      return endpoint + card + '.png';
    });
    return urls;
  }

  const shuffle = (deck, shuffles) => {
    for (let s = 0; s < shuffles; s++) {
      for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
      }
    }
    return deck
  }

  const toggleShort = (card) => {
    if (shortDesc.data && shortDesc.data.name === card.name) {
      setShortDesc({active: false, data: null});
    } else {
      setShortDesc({active: true, data: card})
    }
  }
  
  const [deck, setDeck] = useState(shuffle(cards, 3));
  const [imgs, getImgs] = useState(getCards(deck));
  const [shortDesc, setShortDesc] = useState({active: false, data: null});
  const [longDesc, setLongDesc] = useState({active: false, data: null});


  return (
    <div className="spreadWrapper">
      {shortDesc.active && <ShortDescription card={shortDesc.data}/>}
      {longDesc.active && <LongDescription />}
      <div className="row1">
        <div className="altPath">
          <h3>Alternate Path</h3>
          <div className="triad">
            <div className="cardWrapper">
              <img src={imgs[12]} onClick={() => toggleShort(cardData[deck[12]])}/>
              <h3>13</h3>
            </div>
            <div className="cardWrapper">
              <img src={imgs[8]} onClick={() => toggleShort(cardData[deck[8]])}/>
              <h3>9</h3>
            </div>
            <div className="cardWrapper">
              <img src={imgs[4]} onClick={() => toggleShort(cardData[deck[4]])}/>
              <h3>5</h3>
            </div>
          </div>
        </div>
        <div className="rowDivider"></div>
        <div className="currentPath">
          <h3>Current Path</h3>
          <div className="triad">
            <div className="cardWrapper">
              <img src={imgs[3]} onClick={() => toggleShort(cardData[deck[3]])}/>
              <h3>4</h3>
            </div>
            <div className="cardWrapper">
              <img src={imgs[7]} onClick={() => toggleShort(cardData[deck[7]])}/>
              <h3>8</h3>
            </div>
            <div className="cardWrapper">
              <img src={imgs[11]} onClick={() => toggleShort(cardData[deck[11]])}/>
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
              <img src={imgs[1]} onClick={() => toggleShort(cardData[deck[1]])}/>
              <h3>2</h3>
            </div>
            <div className="cardWrapper">
              <img src={imgs[0]} onClick={() => toggleShort(cardData[deck[0]])}/>
              <h3>1</h3>
            </div>
            <div className="cardWrapper">
              <img src={imgs[2]} onClick={() => toggleShort(cardData[deck[2]])}/>
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
              <img src={imgs[13]} onClick={() => toggleShort(cardData[deck[13]])}/>
              <h3>14</h3>
            </div>
            <div className="cardWrapper">
              <img src={imgs[9]} onClick={() => toggleShort(cardData[deck[9]])}/>
              <h3>10</h3>
            </div>
            <div className="cardWrapper">
              <img src={imgs[5]} onClick={() => toggleShort(cardData[deck[5]])}/>
              <h3>6</h3>
            </div>
          </div>
        </div>
        <div className="rowDivider"></div>
        <div className="karma">
          <h3>Karma</h3>
          <div className="triad">
            <div className="cardWrapper">
              <img src={imgs[6]} onClick={() => toggleShort(cardData[deck[6]])}/>
              <h3>7</h3>
            </div>
            <div className="cardWrapper">
              <img src={imgs[10]} onClick={() => toggleShort(cardData[deck[10]])}/>
              <h3>11</h3>
            </div>
            <div className="cardWrapper">
              <img src={imgs[14]} onClick={() => toggleShort(cardData[deck[14]])}/>
              <h3>15</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spread;