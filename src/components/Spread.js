import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
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
import SpreadUtil from "./SpreadUtil";

const Spread = (props) => {
  const api = process.env.BACKEND + "/archives";
  const cookie = Cookie.get("tarot.io.deck");
  const fromPrevious = props.location.state;
  const { id } = useParams();
  const [user, updateUser] = useContext(UserContext);
  const [modals, setModals] = useState({
    data: {},
    shortDesc: false,
    longDesc: false,
  });

  const getImgs = (deck, length) => {
    const endpoint = process.env.CARDS;

    return deck.slice(0, length).map((card) => {
      return endpoint + card + ".png";
    });
  };

  const setSpread = () => {
    switch (session.spread) {
      case "Golden_Dawn":
        return (
          <GoldenDawn
            toggleShort={toggleShort}
            deck={session.deck}
            getImgs={getImgs}
          />
        );
      default:
        return "An error occurred";
    }
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

  const saveReading = (deck) => {
    const data = {
      user: user.email,
      deck,
    };

    Axios.put(api, data, { headers: { "Content-Type": "application/json" } })
      .then((response) => {
        updateUser({
          ...user,
          archived: JSON.stringify(
            JSON.parse(user.archived).push(response.data.archive)
          ),
        });
      })
      .catch((err) => {
        console.log(JSON.stringify(err));
      });
  };
  const [session, updateSession] = useState(() => {
    if (fromPrevious) {
      return {
        deck: JSON.parse(fromPrevious.deck),
        spread: fromPrevious.spread,
        archived: true,
      };
    }
    return {
      deck: shuffle(cookie ? JSON.parse(cookie) : defaultDeck),
      spread: id,
      archived: false,
    };
  });

  const previousDeck = usePrevious(session.deck);

  useEffect(() => {
    if (previousDeck !== session.deck) {
      Cookie.set("tarot.io.deck", session.deck);
    }
  }, [session.deck]);

  return (
    <div className="spreadWrapper">
      {modals.shortDesc && (
        <ShortDescription card={modals.data} toggleLong={toggleLong} />
      )}
      {modals.longDesc && (
        <LongDescription card={modals.data} toggleLong={toggleLong} />
      )}
      {setSpread()}
      {!session.archived && (
        <SpreadUtil deck={session.deck} saveReading={saveReading} shuffle={shuffle}/>
      )}
    </div>
  );
};

export default Spread;
