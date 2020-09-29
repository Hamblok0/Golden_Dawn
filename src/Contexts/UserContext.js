import { createContext, useEffect, useState } from "react";
import Cookie from "js-cookie";

const initUser = () => {
  const user = Cookie.get("tarot.io");

  if (user) {
    return user;
  }
};

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, updateUser] = useState(initUser);

  useEffect(() => {
    if (user && !Cookie.get("tarot.io")) {
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
