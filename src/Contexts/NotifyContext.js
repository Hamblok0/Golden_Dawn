import React, { createContext, useState, useEffect } from "react";

export const NotifyContext = createContext();

export const NotifyProvider = (props) => {
  const [notification, notify] = useState(null);


  useEffect(() => {
    if (notification) {
        setTimeout(() => {
            notify(null)
        }, 4000)
    }
  }, [notification]);


  return (
    <NotifyContext.Provider value={[notification, notify]}>
      {props.children}
    </NotifyContext.Provider>
  );
};
