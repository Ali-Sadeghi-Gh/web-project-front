import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/forms.css'

const Login = (props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [usernameError, setUsernameError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const navigate = useNavigate();

    const onButtonClick = async () => {

        // Set initial error values to empty
        setUsernameError("")
        setPasswordError("")

        // Check if the user has entered both fields correctly
        if ("" === username) {
            setUsernameError("Please enter your username")
            return
        }

        if ("" === password) {
            setPasswordError("Please enter a password")
            return
        }

        if (password.length < 7) {
            setPasswordError("The password must be 8 characters or longer")
            return
        }
        
        try {
            const data = {
                username: username,
                password: password,
            };
            const main_url = process.env.REACT_APP_API_URI + ':' + process.env.REACT_APP_API_PORT
            const url = main_url + '/user/login/'
            const response = await fetch(url, {
              method: 'POST',
              body: JSON.stringify(data),
              headers: {
                'Content-Type': 'application/json'
              }
            });
            const result = await response.json();
            const token = result["token"]
            alert("You login successfully")
            localStorage.setItem("token", token);
            navigate('/home');
            window.location.reload(false);
        } 
        catch (error) {
            console.error('Error:', error);
        }

    }

    return <div className="mainContainer">

        <div className="titleContainer">
            <div>Login</div>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                value={username}
                placeholder="username"
                onChange={ev => setUsername(ev.target.value)}
                className={"inputBox"} />
            <label className="errorLabel">{usernameError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                type="password"
                value={password}
                placeholder="password"
                onChange={ev => setPassword(ev.target.value)}
                className={"inputBox"} />
            <label className="errorLabel">{passwordError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={onButtonClick}
                value={"Log in"} />
        </div>

        <div>
            Don't have an account?
            <Link className="signup_text" to="/signup">
                sign up
            </Link>
        </div>
    </div>
}

export default Login