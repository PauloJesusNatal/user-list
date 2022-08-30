import "./UserDetails.css"

// Component responsible for generating full user information

const UserDetails = ({ userData }) => {
    if (!userData) return null;
  
    return (
      <div className="user-details">
        <div className="user-name">{userData.name}</div>
  
        <div className="user-body">
          <div className="user-username">
            <b>Username:</b> {userData.username}
          </div>
          <div className="user-email">
          <b>Email:</b>{userData.email}
          </div>
          <div className="user-address">
          <b>Address:</b> {userData.address?.street},{" "}
            {userData.address?.suite}, {userData.address?.city},{" "}
            {userData.address?.zipcode}, {userData.address?.geo.lat},{" "}
            {userData.address?.geo.lng}
          </div>
          <div className="user-phone">
          <b>Phone:</b> {userData.phone}
          </div>
          <div className="user-website">
          <b>Website:</b> {userData.website}
          </div>
          <div className="user-company">
          <b>Company:</b> {userData.company?.name} <br/>
          <b>CatchPhrase:</b> {userData.company?.catchPhrase}<br/>
          <b>Bs:</b> {userData.company?.bs}
          </div>
        </div>
      </div>
    );
  };
  
  export default UserDetails;
  