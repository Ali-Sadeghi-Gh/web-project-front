import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/forms.css'
import { useNavigate  } from 'react-router-dom';


const Signup = (props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [usernameError, setUsernameError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [passwordConfirmError, setPasswordConfirmError] = useState("")
    const [phoneError, setPhoneError] = useState("")
    const [addressError, setAddressError] = useState("")
    const navigate = useNavigate();

    const onButtonClick = async () => {
        
        // Set initial error values to empty
        setUsernameError("")
        setPasswordError("")
        setPasswordConfirmError("")
        setPhoneError("")
        setAddressError("")

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

        if ("" === passwordConfirm) {
            setPasswordConfirmError("Please confirm your password")
            return
        }

        if (password != passwordConfirm) {
            setPasswordConfirmError("The comfirmation doesn't match the password")
            return
        }

        if ("" === phone) {
            setPhoneError("Please enter your phone number")
            return
        }

        let phoneNumber = Number(phone)
        if (isNaN(phoneNumber)) {
            setPhoneError("Please enter a number")
            return
        }

        if (phoneNumber > 10000000000 || phoneNumber < 9000000000) {
            setPhoneError("Invalid phone number")
            return
        }

        if ("" === address) {
            setAddressError("Please enter your address")
            return
        }

        try {
            const data = {
                username: username,
                password: password,
                phone: phone,
                address: address,
            };
            const response = await fetch('http://127.0.0.1:8000/user/register/', {
              method: 'POST',
              body: JSON.stringify(data),
              headers: {
                'Content-Type': 'application/json'
              }
            });
            const result = await response.json();
            const token = result["token"]
            alert("You signed up successfully")
            console.log(token)
            localStorage.setItem("token", JSON.stringify(token));

            navigate('/home');

        } 
        catch (error) {
            console.error('Error:', error);
        }

    }

    return <div className="mainContainer">

        <div className="titleContainer">
            <div>Sign up</div>
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
                type="password"
                value={passwordConfirm}
                placeholder="password confirmation"
                onChange={ev => setPasswordConfirm(ev.target.value)}
                className={"inputBox"} />
            <label className="errorLabel">{passwordConfirmError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                value={phone}
                placeholder="phone number"
                onChange={ev => setPhone(ev.target.value)}
                className={"inputBox"} />
            <label className="errorLabel">{phoneError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                value={address}
                placeholder="address"
                onChange={ev => setAddress(ev.target.value)}
                className={"inputBox"} />
            <label className="errorLabel">{addressError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={onButtonClick}
                value={"Sign up"} />
        </div>

        <div>
            Have an account?
            <Link className="signup_text" to="/login">
                login
            </Link>
        </div>
    </div>
}

export default Signup