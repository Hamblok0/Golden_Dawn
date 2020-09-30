import React, { createContext, useEffect, useState } from "react";
import { usePrevious } from "../Hooks/usePrevious";
import Cookie from "js-cookie";
import decode from "jwt-decode";

const initUser = () => {
  const cookie = Cookie.get("tarot.io");

  if (cookie) {
    const data = decode(cookie);
    return data;
  }
};

export const UserContext = createContext();

export const UserProvider = props => {
  const [user, updateUser] = useState(initUser);


  const prevState = usePrevious(user);

  useEffect(() => {
    if (user && !Cookie.get("tarot.io") || (prevState && user) && (user.deck !== prevState.deck)) {
      Cookie.set("tarot.io", user);
    }
    if (!user && Cookie.get("tarot.io")) {
      Cookie.remove("tarot.io");
    }
  }, [user]);

  return (
    <UserContext.Provider value={[user, updateUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
