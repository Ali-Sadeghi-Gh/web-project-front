import "../styles/profile.css";
import User from "../assets/images/user.png";
import { useEffect, useState } from "react";

const Profile = () => {
  const [datas, set_my_datas] = useState(
    {
      'first_name': '',
      'last_name': '',
      'last_login': '',
      'address': '',
      'phone': '',
      'date_joined': ''
    }
  )

  const getProfile = async () => {
  try {
    const user_token = localStorage.getItem("token");
    const main_url = process.env.REACT_APP_API_URI + ':' + process.env.REACT_APP_API_PORT
    const url = main_url + '/user/get-profile/'
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({}),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + user_token,
      }
    });
    const result = await response.json();
    set_my_datas(result)
  } 
  catch (error) {
    // Handle any error that occurred during the request
    console.error('Error:', error);
  }
}

const change_address = async (address) => {
  try {
    console.log(address)
    const user_token = localStorage.getItem("token");
    const main_url = process.env.REACT_APP_API_URI + ':' + process.env.REACT_APP_API_PORT
    const url = main_url + '/user/change-address/'
    const data = {
      address: address
    }
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + user_token,
      }
    });
  } 
  catch (error) {
    // Handle any error that occurred during the request
    console.error('Error:', error);
  }
}

useEffect(() => {
  getProfile();
}, []);


  return (
    <div className="profile-main-div">
      <div className="profile-leftdiv">
          <img className='profile-img' src={User} alt="my image"></img>
          <hr
            style={{
                color: "black",
                height: 2,
                width: '75%',
                marginLeft: '10%'
            }}
        />

        <div className="profile-text">
          Last login: {datas['last_login']}
        </div>

        <hr
            style={{
                color: "black",
                height: 2,
                width: '75%',
                marginLeft: '10%'
            }}
        />

        <div className="profile-text">
          Date joined: {datas['date_joined']}
        </div>



      </div>


      <div className="profile-rightdiv">
        <br/>
        <div className="profile-text">
          First name
        </div>
        <input
          placeholder={datas['first_name']}
          className={"profile-inputBox"} disabled/>
        
        <br/>
        <br/>
        <div className="profile-text">
          Last name
        </div>
        <input
          placeholder={datas['last_name']}
          className={"profile-inputBox"} disabled/>
        <br/>
        <br/>
        <div className="profile-text">
          Phone
        </div>
        <input
          placeholder={datas['phone']}
          className={"profile-inputBox"} disabled/>
        <br/>
        <br/>
        <div className="profile-text">
          Address
        </div>
        <input
          placeholder={datas['address']}
          className={"profile-inputBox"} onChange={(e) => change_address(e.target.value)}/>
      </div>
    </div>
  );
};


export default Profile;
