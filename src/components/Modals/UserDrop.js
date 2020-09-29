import React, { useContext }from "react";
import { UserContext } from "../../Contexts/UserContext";
import { Link } from "react-router-dom";

const UserDrop = (props) => {
  const [user, setUser] = useContext(UserContext);

  return (
    <div className="userDrop">
      <div className="userDropBody">
        <Link to="/archive" onClick={() => props.toggleDrop(false)}>
          Reading History
        </Link>
        <Link onClick={() => props.toggleDrop(false)}>About Thoth Tarot</Link>
        <Link
          to="/"
          onClick={() => {
            props.toggleDrop(false);
            setUser();
          }}
        >
          Sign Out
        </Link>
      </div>
    </div>
  );
};

export default UserDrop;
