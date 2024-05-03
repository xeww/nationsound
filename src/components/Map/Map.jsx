import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
// import { FullscreenButton } from "./FullscreenButton.jsx";
// import { FullscreenControl } from "react-leaflet-fullscreen";

import "./Map.css";

export default function Map() {
  const [isFullScreen, setFullScreen] = useState(false);

  // useEffect(() => {
  //   const mapContainer = document.querySelector(".leaflet-container");
  //   if (isFullScreen) {
  //     console.log("now is full screen");
  //     mapContainer.style.width = "100vw";
  //     mapContainer.style.height = "100vh";
  //     mapContainer.style.position = "fixed";
  //     mapContainer.style.top = "0";
  //     mapContainer.style.left = "0";
  //   } else {
  //     console.log("no longer full screen");
  //     mapContainer.style.width = "auto";
  //     mapContainer.style.height = "300px";
  //     mapContainer.style.position = "relative";
  //   }
  // }, [isFullScreen]);

  return (
    <MapContainer
      center={[50.635681, 3.063761]}
      zoom={8}
      scrollWheelZoom={false}
      fullscreenControl={true}
    >
      {/* <FullscreenButton
        isFullScreen={isFullScreen}
        setFullScreen={setFullScreen}
      /> */}
      {/* <FullscreenControl position="topright" /> */}

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
