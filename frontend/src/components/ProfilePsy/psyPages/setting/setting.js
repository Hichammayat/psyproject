import "./setting.css";


export default function Setting() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="settingsForm">
        <div className="settingsPP">
          
          
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              update your profile picture
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <div className="divInput">
          <div className="div1">
          <label>firstname</label>
          <input type="text" placeholder="Hicham" name="Firstname" />
          <label>lastname</label>
          <input type="text" placeholder="Mayat" name="Lstname" />
          <label>Email</label>
          <input type="email" placeholder="hicham@gmail.com" name="email" />
          </div>
          <div className="div2">
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <label>occupation</label>
          <input type="text" placeholder="psychologue" name="occupation" />
          <label>description</label>
          <input type="text" placeholder="" name="description" />
          </div>
          </div>
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
      
    </div>
  );
}