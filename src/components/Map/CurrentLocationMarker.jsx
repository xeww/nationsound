import { useEffect, useState } from "react";
import { Marker, Popup } from "react-leaflet";
import * as L from "leaflet";

const redMarker = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function CurrentLocationMarker() {
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
      <Marker
        position={[location.latitude, location.longitude]}
        icon={redMarker}
      >
        <Popup>
          Vous êtes ici.
          <br />
          (Position approximative)
        </Popup>
      </Marker>
    );
  } else {
    return null;
  }
}
