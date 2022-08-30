import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

import useGetUser from "../hooks/useGetUser";
import Map from "../components/Map";
import UserDetails from "../components/UserDetails";

// Display map and list and full user specific info

export default function UserProfile() {
  const { id } = useParams();

  const { user } = useGetUser(id);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return user && id ? (
    <>
    <div className="map-container">
        <Map user={user} />
    </div>
      <UserDetails userData={user} />
      <Button className="user-button" onClick={handleClick}>Go back</Button>
    </>
  ) : null;
}
