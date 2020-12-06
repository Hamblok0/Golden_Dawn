import React, { useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";
import GoldenDawnPreview from "./SpreadPreviews/GoldenDawn";
import RelationshipPreview from "./SpreadPreviews/Relationship";
import PPFPreview from "./SpreadPreviews/PPF";
import cardSvg from "../img/card-edit.svg";

const SpreadMenu = () => {
  const [user, updateUser] = useContext(UserContext);
  const history = useHistory();
  
  if (!user) {
    history.push("/");
  }

  return (
    <div className="spreadMenuWrap">
      <div className="spreadSelect">
        <Link to="/reading/Golden_Dawn"><GoldenDawnPreview card={cardSvg}/></Link>
        <RelationshipPreview card={cardSvg} />
        <PPFPreview card={cardSvg}/>
      </div>
    </div>
  );
};

export default SpreadMenu;
