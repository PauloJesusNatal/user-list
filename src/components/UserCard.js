import "./UserCard.css";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

// Component responsible for generating user cards with a few user details and button to access user profile pages

const UserCard = ({ userData }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/pages/UserProfile/${userData.id}`);
  };

  return (
    <div className="card">
      <div className="card-name">{userData.name}</div>

      <div className="card-body">
        <div className="card-email">
        <b>Email:</b> {userData.email}
        </div>
        <div className="card-phone">
        <b>Phone:</b> {userData.phone}
        </div>
        <div className="card-website">
        <b>Website:</b> {userData.website}
        </div>
        <div className="card-company">
          <b>Company:</b> {userData.company.name}
        </div>
        <Button className="card-button" variant="primary" onClick={handleClick}>
          Full User Details
        </Button>
      </div>
    </div>
  );
};

export default UserCard;
