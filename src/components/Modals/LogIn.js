import React, {useState} from "react";
import Axios from "axios";

const LogIn = props => {
    const api = "https://r0pamrufoj.execute-api.us-east-2.amazonaws.com/dev" + "/user"
    const [type, setType] = useState("login");
    const [logIn, updateLogin] = useState({
        email: "",
        password: ""
    });
    const [signUp, updateSignUp] = useState({
        name: "",
        email: "",
        password: ""
    });

    const createUser = (e, state) => {
        Axios.put(api, signUp, { headers: { 'Content-Type': 'application/json' } })
        .then(response => {
            console.log(response)
        });
        e.preventDefault()
    }

    const signIn = (e, state) => {
        Axios.post(api, logIn)
        .then(response => {
            console.log(response)
        })
        e.preventDefault()
    }
    
    return (
        <div className="loginWrapper">
            {type === "login" &&
                <div className="loginBody">
                    <div className="loginContent">
                        <div className="loginTitle">
                            <h1>Sign In</h1>
                        </div>
                        <form onSubmit={e => signIn(e)}>
                            <h2>Username:</h2>
                            <input type="text" name="email" value={logIn.email} onChange={e => updateLogin({ ...logIn, email: e.target.value })}/>
                            <h2>Password:</h2>
                            <input type="text" name="password" value={logIn.password} onChange={e => updateLogin({ ...logI1n, password: e.target.value })}/>
                            <button type="submit">Submit</button>
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
                    <form onSubmit={e => createUser(e)}>
                        <h2>Name:</h2>
                        <input type="text" name="username" value={ signUp.name } onChange={ e => updateSignUp({ ...signUp, name: e.target.value }) }/>
                        <h2>Email:</h2>
                        <input type="text" name="email" value={ signUp.email } onChange={ e => updateSignUp({ ...signUp, email: e.target.value }) }/>
                        <h2>Password:</h2>
                        <input type="text" name="password" value={ signUp.password } onChange={ e => updateSignUp({ ...signUp, password: e.target.value }) }/>
                        <button type="submit">Submit</button>
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