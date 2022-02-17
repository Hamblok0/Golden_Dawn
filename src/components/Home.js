import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";
import Axios from "axios";
import decode from "jwt-decode";

const Home = () => {
  const history = useHistory();
  const api = process.env.BACKEND + "/user";
  const [user, setUser] = useContext(UserContext);
  const [type, setType] = useState("intro");
  const [logIn, updateLogin] = useState({
    email: "",
    password: "",
  });
  const [signUp, updateSignUp] = useState({
    name: "",
    email: "",
    password: "",
  });

  const createGuest = () => {
    setUser({
      email: "guest"
    })
  }

  const createUser = (e) => {
    Axios.put(api, signUp, { headers: { "Content-Type": "application/json" } })
      .then((response) => {
        const user = decode(response.data);
        setUser(user);
      })
      .catch((err) => {
        console.log(err);
      });
    e.preventDefault();
  };

  const signIn = (e) => {
    Axios.post(api, logIn, { headers: { "Content-Type": "application/json" } })
      .then((response) => {
        const user = decode(response.data);
        if (user.archived) {
          setUser({ ...user, archived: JSON.parse(user.archived)})
        } else {
          setUser(user);
        }
      })
      .catch((err) => {
        console.log(JSON.stringify(err));
      });
    e.preventDefault();
  };

  if (user) {
    history.push("/reading");
  }
  return (
    <div className="homeWrapper">
      {type === "intro" && (
        <div className="homeBody">
          <div className="introText">
            <h1>Welcome to Tarot.io</h1>
            <div className="introBodyText">
                <p>
                  This is an early version of this app, meaning that it’ll continue
                  to be updated with more features in the future.
                </p>
                <p>
                  Making an account is absolutely not necessary for readings but
                  recommended if you would like to archive and label your past
                  readings.
                </p>
                <p className="lastIntroBodyText">Enjoy!</p>
                <div className="introAccButtons">
                  <button onClick={() => setType("login")}>LOG IN</button>
                  <button onClick={() => setType("register")}>SIGN UP</button>
                </div>
                <div className="introGuestAccText">
                  <a href='javascript:;' onClick={() => createGuest()}>Continue to Tarot.io</a>
                </div>
              </div>
            </div>
          
        </div>
      )}
      {type === "login" && (
        <div className="loginBody" onClick={(e) => e.stopPropagation()}>
          <div className="loginContent">
            <div className="loginTitle">
              <h1>Log In</h1>
            </div>
            <form onSubmit={(e) => signIn(e)}>
              <h2>Username:</h2>
              <input
                type="text"
                name="email"
                value={logIn.email}
                onChange={(e) =>
                  updateLogin({ ...logIn, email: e.target.value })
                }
              />
              <h2>Password:</h2>
              <input
                type="text"
                name="password"
                value={logIn.password}
                onChange={(e) =>
                  updateLogin({ ...logIn, password: e.target.value })
                }
              />
              <div className="formBottom">
                <p onClick={() => setType("register")}>
                  Need to make an account?
                </p>
                <button type="submit">LOG IN</button>
              </div>
            </form>
          </div>
        </div>
      )}
      {type === "register" && (
        <div className="loginBody" onClick={(e) => e.stopPropagation()}>
          <div className="loginTitle">
            <h1>Register</h1>
          </div>
          <form onSubmit={(e) => createUser(e)}>
            <h2>Email:</h2>
            <input
              type="text"
              name="email"
              value={signUp.email}
              onChange={(e) =>
                updateSignUp({ ...signUp, email: e.target.value })
              }
            />
            <h2>Password:</h2>
            <input
              type="text"
              name="password"
              value={signUp.password}
              onChange={(e) =>
                updateSignUp({ ...signUp, password: e.target.value })
              }
            />
            <div className="formBottom">
              <p onClick={() => setType("register")}>Don't have an account?</p>
              <button type="submit">SIGN UP</button>    
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Home;
