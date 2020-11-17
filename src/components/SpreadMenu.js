import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";
import cardSvg from "../img/card-edit.svg";

const SpreadMenu = () => {
  const [user, updateUser] = useContext(UserContext);
  const history = useHistory();

  if (!user) {
    history.push("/");
  }

  return (
    <div className="spreadMenuWrap">
      <div className="spreadCard">
        <div className="menuGD">
          <img src={cardSvg} />
        </div>
      </div>
    </div>
  );
};

export default SpreadMenu;
