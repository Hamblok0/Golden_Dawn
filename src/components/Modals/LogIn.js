import React, {useState} from "react";

const LogIn = props => {
    const [type, setType] = useState("login");
    
    return (
        <div className="loginWrapper">
            {type === "login" &&
                <div className="loginBody">
                    <div className="loginContent">
                        <div className="loginTitle">
                            <h1>Sign In</h1>
                        </div>
                        <form>
                            <h2>Username:</h2>
                            <input type="text" name="username"/>
                            <h2>Password:</h2>
                            <input type="text" name="password"/>
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
                    <form>
                        <h2>Username:</h2>
                        <input type="text" name="username"/>
                        <h2>Password:</h2>
                        <input type="text" name="password"/>
                        <h2>Email:</h2>
                        <input type="text" name="email"/>
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