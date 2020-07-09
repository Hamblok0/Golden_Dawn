import React, { useState, useEffect } from "react";
import decode from "jwt-decode";
import cardData from "../data/cardData.json";
import defaultDeck from "../data/newDeck.json";
import defaultCard from "../img/card.jpg";
import ShortDescription from "./Modals/ShortDescription";
import LongDescription from "./Modals/LongDescription";
import ShuffleMain from "./Modals/ShuffleMain";
import ShuffleDrop from "./Modals/ShuffleDrop";
import GoldenDawn from "./SpreadTemplates/GoldenDawn";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArchive, faRedoAlt, faQuestion, faRandom } from '@fortawesome/free-solid-svg-icons';


const Spread = props => {
  const endpoint = process.env.CARDS;
  const fromPrevious = props.location.state;

  const getDeck = () => {
    if (fromPrevious && fromPrevious.deck) {
      return JSON.parse(fromPrevious.deck);
    } else {
      return null;
    }
  }

  const setSpread = () => {
    return <GoldenDawn toggleShort={toggleShort} deck={deck} imgs={imgs} />;
    // switch (fromPrevious.type) {
    //   case "Golden_Dawn":
    //     return <GoldenDawn toggleShort={toggleShort} deck={deck} imgs={imgs} />;
    //   default:
    //     return "An error occurred"
    // }
  }

  const getCards = () => {
    if (!deck) {
      return new Array(15).fill(defaultCard);
    } else {
      return deck.slice(0, 15).map(card => {
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

  let modalInit ={
    data: {},
    shortDesc: false,
    longDesc: false,
    shuffleDrop: false
  }

  const [user, setUser] = useState(() => {
    if (props.user) {
      try {
        return decode(props.user);
      } catch(err) {
        console.log(err);
        return undefined;
      }
    } else {
      return undefined; 
    }
  });

  const [deck, setDeck] = useState(getDeck());
  const [imgs, setImgs] = useState(getCards());
  const [modals, setModals] = useState(modalInit);

  useEffect(() => {
    if (deck) {
      setImgs(getCards());
      setModals(modalInit);
    }
  }, [deck]);

  return (
    <div className="spreadWrapper">
      {modals.shortDesc && <ShortDescription card={modals.data} toggleLong={toggleLong} />}
      {modals.longDesc && <LongDescription card={modals.data} toggleLong={toggleLong} />}
      {!deck && <ShuffleMain setDeck={setDeck} shuffle={shuffle} deck={defaultDeck} />}
      <div className="utilBar">
        {modals.shuffleDrop && <ShuffleDrop setDeck={setDeck} shuffle={shuffle} deck={deck} />}
        <FontAwesomeIcon icon={faRedoAlt} onClick={() => setModals({...modals, shuffleDrop: !modals.shuffleDrop})} />
        <FontAwesomeIcon icon={faRandom} onClick={() => setDeck(shuffle(deck, Math.floor((Math.random() * 100) + 1)))} />
        <FontAwesomeIcon icon={faArchive} />
        <FontAwesomeIcon icon={faQuestion} />
      </div>
      {setSpread()}
    </div>
  );
};

export default Spread;