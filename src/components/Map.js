import { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

import L from "leaflet";

// Map marker icon

const icon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
});

// Positioning marker icons for all users and making them zoom in to realted user locations on marker click

function UserMarker({ marker, index }) {
  const map = useMap();

  return (
    <Marker
      eventHandlers={{
        click: () => {
          map.flyTo([marker.address.geo.lat, marker.address.geo.lng], 5);
        }
      }}
      key={index}
      position={{
        lat: marker.address.geo.lat,
        lng: marker.address.geo.lng
      }}
      icon={icon}
    >
      <Popup>
        <div className="map-popup">{marker.name}</div>
      </Popup>
    </Marker>
  );
}

function Markers({ users, user }) {
  console.log(user);
  if (user) return <UserMarker marker={user} index={0} />;
  return (
    users?.length > 0 &&
    users?.map((marker, index) => {
      return <UserMarker marker={marker} key={index} />;
    })
  );
}

// Zoom in to user location on corresponding user profile page

function SetMapView({ user }) {
  const map = useMap();

  useEffect(() => {
    if (!map || !user) return;

    const { lat, lng } = user?.address?.geo;

    map.flyTo([lat, lng], 5);
  }, [map, user]);

  return null;
}

// Setting and displaying map

export default function Map({ users, user }) {
  return (
    <div className="map-container">
      <MapContainer
        center={[0, 0]}
        zoom={1}
        style={{ height: "50vh" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Markers users={users} user={user} />
        {user && <SetMapView user={user} />}
      </MapContainer>
    </div>
  );
}
