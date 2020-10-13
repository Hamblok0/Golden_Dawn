import React, { createContext, useEffect, useState } from "react";
import Cookie from "js-cookie";
import { usePrevious } from "../Hooks/usePrevious";

export const UserContext = createContext();

export const UserProvider = props => {
  const cookie = Cookie.get("tarot.io");
  const [user, updateUser] = useState(cookie ? JSON.parse(cookie) : undefined);
  const previous = usePrevious(user);

  useEffect(() => {
    if (user && !Cookie.get("tarot.io") || user && user !== previous) {
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
