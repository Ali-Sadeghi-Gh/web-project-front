import "../styles/profile.css";

const Profile = () => {
  return (
    <div className="profile-main-div">
      <div className="profile-leftdiv">
          <img className='profile-img' src="../assets/images/amyimage.png" alt="my image"></img>
          <hr
            style={{
                color: "black",
                height: 2,
                width: '75%',
                marginLeft: '10%'
            }}
        />

        <div className="profile-text">
          birthday
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
          number of orders:
        </div>



      </div>


      <div className="profile-rightdiv">
        <br/>
        <div className="profile-text">
          First name
        </div>
        <input
          placeholder="first name"
          className={"profile-inputBox"} disabled/>
        
        <br/>
        <br/>
        <div className="profile-text">
          Last name
        </div>
        <input
          placeholder="last name"
          className={"profile-inputBox"} disabled/>
        

        <br/>
        <br/>
        <div className="profile-text">
          Phone
        </div>
        <input
          placeholder="phone"
          className={"profile-inputBox"} disabled/>


        <br/>
        <br/>
        <div className="profile-text">
          Address
        </div>
        <input
          placeholder="Address"
          className={"profile-inputBox"} disabled/>

      </div>
    </div>
  );
};


export default Profile;
