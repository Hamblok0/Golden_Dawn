import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Cookie from "js-cookie";
import Axios from "axios";
import { UserContext } from "../Contexts/UserContext";
import { NotifyContext } from "../Contexts/NotifyContext";
import { usePrevious } from "../Hooks/usePrevious";
import cardData from "../data/cardData.json";
import defaultDeck from "../data/newDeck.json";
import ShortDescription from "./Modals/ShortDescription";
import GoldenDawn from "./SpreadTemplates/GoldenDawn";
import SpreadUtil from "./SpreadUtil";

const Spread = (props) => {
  const api = process.env.BACKEND + "/archives";
  const cookie = Cookie.get("tarot.io.deck");
  const fromPrevious = props.location.state;
  const { id } = useParams();
  const [user, updateUser] = useContext(UserContext);
  const [notification, notify] = useContext(NotifyContext);
  const [modals, setModals] = useState({
    data: {},
    shortDesc: false
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

  const toggleShort = (card) => {
    if (modals.data && modals.data.id === card) {
      setModals({ ...modals, shortDesc: false, data: {} });
    } else {
      const data = { ...cardData[card], id: card };
      setModals({ ...modals, shortDesc: true, data: data });
    }
  };

  const saveReading = () => {
    const data = {
      user: user.email,
      deck: session.deck,
    };

    Axios.put(api, data, { headers: { "Content-Type": "application/json" } })
      .then((response) => {
        if (user.archived) {
          updateUser({
            ...user,
            archived: [ ...user.archived, response.data.archive ]
          })
          updateSession({ ...session, saved: true})
        } else {
          updateUser({
            ...user,
            archived: [ response.data.archive ]
          });
          updateSession({ ...session, saved: true})
        }
        notify({msg: "Reading Saved!"})
      })
      .catch((err) => {
        console.log(JSON.stringify(err));
        notify({msg: "Error saving reading, try again in a minute!"})
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
      saved: false
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
        <ShortDescription card={modals.data} />
      )}
      {setSpread()}
      {!session.archived && (
        <SpreadUtil session={session} saveReading={saveReading} shuffle={shuffle} updateSession={updateSession}/>
      )}
    </div>
  );
};

export default Spread;
