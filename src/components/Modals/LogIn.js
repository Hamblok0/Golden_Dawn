import React, {useState} from "react";

const LogIn = props => {
    const [type, setType] = useState("login");
    
    return (
        <div className="loginWrapper">
            {type === "login" &&
                <div className="loginBody">
                    <h1>Sign In</h1>
                    <form>
                        <label>
                            Username:
                            <input type="text" name="username"/>
                        </label>
                        <label>
                            Password:
                            <input type="text" name="password"/>
                        </label>
                    </form>
                    <div className="loginChange">
                        <p onClick={() => setType("register")}>Don't have an account?</p>
                    </div>
                </div>
            }
            {type === "register" &&
                <div className="loginBody">
                    <h1>Register</h1>
                    <form>
                        <label>
                            Username:
                            <input type="text" name="username"/>
                        </label>
                        <label>
                            Password:
                            <input type="text" name="password"/>
                        </label>
                        <label>
                            Email:
                            <input type="text" name="email"/>
                        </label>
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