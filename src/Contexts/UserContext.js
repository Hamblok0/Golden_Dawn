import React, { createContext, useEffect, useState } from "react";
import Cookie from "js-cookie";

export const UserContext = createContext();

export const UserProvider = props => {
  const cookie = Cookie.get("tarot.io");
  const [user, updateUser] = useState(cookie ? JSON.parse(cookie) : undefined);

  useEffect(() => {
    if (user&& !Cookie.get("tarot.io")) {
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
