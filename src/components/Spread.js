import React, { useState, useEffect } from "react";
import cardData from "../data/cardData.json";
import defaultDeck from "../data/newDeck.json";
import defaultCard from "../img/card.jpg";
import ShortDescription from "./Modals/ShortDescription";
import LongDescription from "./Modals/LongDescription";
import ShuffleMain from "./Modals/ShuffleMain";
import ShuffleDrop from "./Modals/ShuffleDrop";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArchive, faRedoAlt, faQuestion, faRandom } from '@fortawesome/free-solid-svg-icons'

const Spread = () => {
  const endpoint = process.env.cloudfront || "https://ds7jrtsekfc2s.cloudfront.net/";

  const getCards = shuffledDeck => {
    if (!shuffledDeck) {
      return new Array(15).fill(defaultCard);
    } else {
      return shuffledDeck.slice(0, 15).map(card => {
        return endpoint + card + ".png";
      });
    }
  };

  const shuffle = (deck, shuffles) => {
    let newDeck = [...deck];
    for (let s = 0; s < shuffles; s++) {
      for (let i = newDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
      }
    }
    return newDeck;
  };

  const toggleShort = (card, url) => {
    if (modals.data && modals.data.id === card) {
      setModals({ ...modals, shortDesc: false, data: {} });
    } else {
      const data = { ...cardData[card], id: card, url: url };
      setModals({ ...modals, shortDesc: true, data: data });
    }
  };

  const toggleLong = card => {
    if (card) {
      setModals({ ...modals, shortDesc: false, longDesc: true });
    } else {
      setModals({ ...modals, longDesc: false, data: {} });
    }
  };

  let modalInit = {
    data: {},
    shortDesc: false,
    longDesc: false,
    shuffleDrop: false
  };

  const [deck, setDeck] = useState(null);
  const [imgs, setImgs] = useState(getCards(null));
  const [modals, setModals] = useState(modalInit);

  useEffect(() => {
    if (deck) {
      setImgs(getCards(deck));
      setModals(modalInit);
    }
  }, [deck]);

  const style = [{ justifyContent: "flex-end" }, { width: "400px" }];

  return (
    <div className="spreadWrapper">
      {modals.shortDesc && <ShortDescription card={modals.data} toggleLong={toggleLong} />}
      {modals.longDesc && <LongDescription card={modals.data} toggleLong={toggleLong} style={style} />}
      {!deck && <ShuffleMain setDeck={setDeck} shuffle={shuffle} deck={defaultDeck} />}
      <div className="utilBar">
        {modals.shuffleDrop && <ShuffleDrop setDeck={setDeck} shuffle={shuffle} deck={deck} />}
        <FontAwesomeIcon icon={faRedoAlt} onClick={() => setModals({...modals, shuffleDrop: !modals.shuffleDrop})} />
        <FontAwesomeIcon icon={faRandom} onClick={() => setDeck(shuffle(deck, Math.floor((Math.random() * 100) + 1)))} />
        <FontAwesomeIcon icon={faArchive} />
        <FontAwesomeIcon icon={faQuestion}/>
      </div>
      <div className="spread">
        <div className="row1">
          <div className="altPath">
            <h3>Alternate Path</h3>
            <div className="triad">
              <div className="cardWrapper">
                <img src={imgs[12]} onClick={() => toggleShort(deck[12], imgs[12])}/>
                <h3>13</h3>
              </div>
              <div className="cardWrapper">
                <img src={imgs[8]} onClick={() => toggleShort(deck[8], imgs[8])}/>
                <h3>9</h3>
              </div>
              <div className="cardWrapper">
                <img src={imgs[4]} onClick={() => toggleShort(deck[4], imgs[4])}/>
                <h3>5</h3>
              </div>
            </div>
          </div>
          <div className="rowDivider"></div>
          <div className="currentPath">
            <h3>Current Path</h3>
            <div className="triad">
              <div className="cardWrapper">
                <img src={imgs[3]} onClick={() => toggleShort(deck[3], imgs[3])}/>
                <h3>4</h3>
              </div>
              <div className="cardWrapper">
                <img src={imgs[7]} onClick={() => toggleShort(deck[7], imgs[7])}/>
                <h3>8</h3>
              </div>
              <div className="cardWrapper">
                <img src={imgs[11]} onClick={() => toggleShort(deck[11], imgs[11])}/>
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
                <img src={imgs[1]} onClick={() => toggleShort(deck[1], imgs[1])}/>
                <h3>2</h3>
              </div>
              <div className="cardWrapper">
                <img src={imgs[0]} onClick={() => toggleShort(deck[0], imgs[0])}/>
                <h3>1</h3>
              </div>
              <div className="cardWrapper">
                <img src={imgs[2]} onClick={() => toggleShort(deck[2], imgs[2])}/>
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
                <img src={imgs[13]} onClick={() => toggleShort(deck[13], imgs[13])}/>
                <h3>14</h3>
              </div>
              <div className="cardWrapper">
                <img src={imgs[9]} onClick={() => toggleShort(deck[9], imgs[9])}/>
                <h3>10</h3>
              </div>
              <div className="cardWrapper">
                <img src={imgs[5]} onClick={() => toggleShort(deck[5], imgs[5])}/>
                <h3>6</h3>
              </div>
            </div>
          </div>
          <div className="rowDivider"></div>
          <div className="karma">
            <h3>Karma</h3>
            <div className="triad">
              <div className="cardWrapper">
                <img src={imgs[6]} onClick={() => toggleShort(deck[6], imgs[6])}/>
                <h3>7</h3>
              </div>
              <div className="cardWrapper">
                <img src={imgs[10]} onClick={() => toggleShort(deck[10], imgs[10])}/>
                <h3>11</h3>
              </div>
              <div className="cardWrapper">
                <img src={imgs[14]} onClick={() => toggleShort(deck[14], imgs[14])}/>
                <h3>15</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spread;