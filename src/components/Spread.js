import React, { useState, useEffect, useContext } from "react";
import Cookie from "js-cookie";
import Axios from "axios";
import { UserContext } from "../Contexts/UserContext";
import { usePrevious } from "../Hooks/usePrevious";
import cardData from "../data/cardData.json";
import defaultDeck from "../data/newDeck.json";
import ShortDescription from "./Modals/ShortDescription";
import LongDescription from "./Modals/LongDescription";
// import ShuffleMain from "./Modals/ShuffleMain";
// import ShuffleDrop from "./Modals/ShuffleDrop";
import GoldenDawn from "./SpreadTemplates/GoldenDawn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArchive,
  faRedoAlt,
  faQuestion,
  faRandom,
} from "@fortawesome/free-solid-svg-icons";

const Spread = (props) => {
  const api = process.env.BACKEND + "/archives";
  const cookie = Cookie.get("tarot.io.deck");
  const deckInit = cookie ? JSON.parse(cookie) : defaultDeck;
  const [user, updateUser] = useContext(UserContext);
  const previous = usePrevious(deck);
  const setSpread = () => {
    return (
      <GoldenDawn toggleShort={toggleShort} deck={deck} getImgs={getImgs} />
    );
    // switch (fromPrevious.type) {
    //   case "Golden_Dawn":
    //     return <GoldenDawn toggleShort={toggleShort} deck={deck} imgs={imgs} />;
    //   default:
    //     return "An error occurred"
    // }
  };

  const shuffle = (deck) => {
    const shuffles = Math.floor(Math.random() * 100 + 1);
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

  const toggleLong = (card) => {
    if (card) {
      setModals({ ...modals, shortDesc: false, longDesc: true });
    } else {
      setModals({ ...modals, longDesc: false, data: {} });
    }
  };

  const getImgs = (deck, length) => {
    const endpoint = process.env.CARDS;

    return deck.slice(0, length).map((card) => {
      return endpoint + card + ".png";
    });
  };

  const saveReading = (deck) => {
    const data = {
      user: user.email,
      deck,
    };
    Axios.put(api, data, { headers: { "Content-Type": "application/json" } })
      .then((response) => {
        updateUser({
          ...user,
          archived: JSON.stringify(JSON.parse(user.archived).push(response.data.archive)),
        })
      })
      .catch((err) => {
        console.log(JSON.stringify(err));
      });
  };

  let modalInit = {
    data: {},
    shortDesc: false,
    longDesc: false,
  };

  const [modals, setModals] = useState(modalInit);
  const [deck, updateDeck] = useState(shuffle(deckInit));

  useEffect(() => {
    if (previous !== deck) {
      Cookie.set("tarot.io.deck", deck);
    }
  }, [deck]);

  return (
    <div className="spreadWrapper">
      {modals.shortDesc && (
        <ShortDescription card={modals.data} toggleLong={toggleLong} />
      )}
      {modals.longDesc && (
        <LongDescription card={modals.data} toggleLong={toggleLong} />
      )}
      <div className="utilBar">
        <FontAwesomeIcon
          icon={faRandom}
          onClick={() => updateDeck(shuffle(deck))}
        />
        <FontAwesomeIcon icon={faArchive} onClick={() => saveReading(deck)}/>
        <FontAwesomeIcon icon={faQuestion} />
      </div>
      {setSpread()}
    </div>
  );
};

export default Spread;
