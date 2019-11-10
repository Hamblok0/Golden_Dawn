import React, {useState} from "react";
import LogIn from "./Modals/LogIn";
import UserDrop from "./Modals/UserDrop";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [loggedIn, setLogIn] = useState(true);
  const [logInToggle, toggleLogIn] = useState(false);
  const [userDrop, toggleUserDrop] = useState(false);
  return (
    <header>
      <div className="title">
        <h1>Tarot.io</h1>
      </div>
      <div className="headerNav">
        <h1>Get A Reading</h1>
        <h1>Card Dictionary</h1>
        {loggedIn ? (<FontAwesomeIcon icon={faBars} onClick={() => toggleUserDrop(!userDrop)}> </FontAwesomeIcon>) : 
        (<h1 onClick={() => toggleLogIn(true)}>Log In/Register</h1>)}
      </div>
      {logInToggle && <LogIn toggleLogin={toggleLogIn}/>}
      {userDrop && <UserDrop toggleDrop={toggleUserDrop}/>}
    </header>
  );
};

export default Header;
