import React, { useState, useContext} from "react";
import { UserContext } from "../Contexts/UserContext";
import { NotifyContext } from "../Contexts/NotifyContext";
import { Link } from "react-router-dom";
import UserDrop from "./Modals/UserDrop";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [user] = useContext(UserContext);
  const [userDrop, toggleUserDrop] = useState(false);
  const [notification, notify] = useContext(NotifyContext);
  
  if (user) {
   return (
    <header>
      {notification && (
        <div className="notifyModal">
          {notification.msg}
        </div>
      )}
      <div className="title">
        <Link to='/'>
          <h1>Tarot.io</h1>
        </Link>
      </div>
      <div className="headerNav">
        <Link to="/reading">
          <h1>Get A Reading</h1>
        </Link>
        <Link to='/dictionary'>
          <h1>Card Dictionary</h1>
        </Link>
        {user ? (<FontAwesomeIcon icon={faBars} onClick={() => toggleUserDrop(!userDrop)}> </FontAwesomeIcon>) : 
        (<h1 onClick={() => toggleLogIn(true)}>Log In/Register</h1>)}
      </div>
      {userDrop && <UserDrop toggleDrop={toggleUserDrop} />}
    </header>
  );
  } else {
    return null
  }
};

export default Header;
