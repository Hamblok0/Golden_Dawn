import React, {useState} from "react";
import Axios from "axios";

const LogIn = props => {
    const [type, setType] = useState("login");
    const [login, updateLogin] = useState({
        email: "",
        password: ""
    });
    const [signUp, updateSignUp] = useState({
        name: "",
        email: "",
        password: ""
    });

    const createUser = (e, state) => {
        console.log(state);
    }

    const logIn = (e, state) => {
        console.log(state)
    }
    
    return (
        <div className="loginWrapper">
            {type === "login" &&
                <div className="loginBody">
                    <div className="loginContent">
                        <div className="loginTitle">
                            <h1>Sign In</h1>
                        </div>
                        <form onSubmit={e => logIn(e, logIn)}>
                            <h2>Username:</h2>
                            <input type="text" name="email" value={login.email} onChange={e => updateLogin({ ...login, email: e.target.value })}/>
                            <h2>Password:</h2>
                            <input type="text" name="password" value={login.password} onChange={e => updateLogin({ ...login, password: e.target.value })}/>
                        </form>
                        <div className="loginChange">
                            <p onClick={() => setType("register")}>Don't have an account?</p>
                        </div>
                    </div>
                </div>
            }
            {type === "register" &&
                <div className="loginBody">
                    <div className="loginTitle">
                        <h1>Register</h1>
                    </div>
                    <form onSubmit={e => signUp(e, logIn)}>
                        <h2>Name:</h2>
                        <input type="text" name="username" value={ signUp.name } onChange={ e => updateSignUp({ ...signUp, name: e.target.value }) }/>
                        <h2>Email:</h2>
                        <input type="text" name="email" value={ signUp.email } onChange={ e => updateSignUp({ ...signUp, email: e.target.value }) }/>
                        <h2>Password:</h2>
                        <input type="text" name="password" value={ signUp.password } onChange={ e => updateSignUp({ ...signUp, password: e.target.value }) }/>
                    </form>
                    <div className="loginChange">
                        <p onClick={() => setType("login")}>Already have an account?</p>
                    </div>
                </div>
            }
        </div>
    );
}

export default LogIn;