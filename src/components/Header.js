import React, {useState} from "react";
import LogIn from "./Modals/LogIn";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
  const [loggedIn, setLogIn] = useState(false);
  const [logInToggle, toggleLogIn] = useState(false);
  return (
    <header>
      <div className="title">
        <h1>Tarot.io</h1>
      </div>
      <div className="headerNav">
        <h1>Get A Reading</h1>
        <h1>Card Dictionary</h1>
        {loggedIn ? (<FontAwesomeIcon icon={faBars}/>) : (<h1 onClick={() => toggleLogIn(true)}>Log In/Register</h1>)}
      </div>
      {logInToggle && <LogIn toggle={toggleLogIn}/>}
    </header>
  );
};

export default Header;
