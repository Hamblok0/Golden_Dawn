import React, {useState} from "react";
import { Link } from "react-router-dom";
import LogIn from "./Modals/LogIn";
import UserDrop from "./Modals/UserDrop";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = props => {
  const [logInToggle, toggleLogIn] = useState(false);
  const [userDrop, toggleUserDrop] = useState(false);

  return (
    <header>
      <div className="title">
        <Link to='/'>
          <h1>Tarot.io</h1>
        </Link>
      </div>
      <div className="headerNav">
        <Link to="/reading">
          <h1>Get A Reading</h1>
        </Link>
        <Link to='dictionary'>
          <h1>Card Dictionary</h1>
        </Link>
        {props.user ? (<FontAwesomeIcon icon={faBars} onClick={() => toggleUserDrop(!userDrop)}> </FontAwesomeIcon>) : 
        (<h1 onClick={() => toggleLogIn(true)}>Log In/Register</h1>)}
      </div>
      {logInToggle && <LogIn toggleLogIn={toggleLogIn} setUser={props.setUser} />}
      {userDrop && <UserDrop toggleDrop={toggleUserDrop} setUser={props.setUser}/>}
    </header>
  );
};

export default Header;
