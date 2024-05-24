import "./Map.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";

export default function Map() {
  return (
    <MapContainer
      center={[50.635681, 3.063761]}
      zoom={8}
      scrollWheelZoom={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <CurrentLocationMarker />
    </MapContainer>
  );
}

function CurrentLocationMarker() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {}
      );
    }
  }, []);

  if (location) {
    return (
      <Marker position={[location.latitude, location.longitude]}>
        <Popup>Vous êtes ici</Popup>
      </Marker>
    );
  } else {
    return null;
  }
}
