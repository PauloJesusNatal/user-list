import UserCard from "../components/UserCard";
import "../App.css";
import useGetUsers from "../hooks/useGetUsers";
import Map from "../components/Map";

// Display map and list of users

export default function UserList() {
  const { users } = useGetUsers();

  return (
    <div className="App">
      <Map users={users} />
      <div className="cards-container">
        {users?.map((user, index) => (
          <UserCard userData={user} key={index} />
        ))}
      </div>
    </div>
  );
}
