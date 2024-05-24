import "./Map.css";
import CurrentLocationMarker from "./CurrentLocationMarker";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { getScenesURL } from "../../utils/utils";
import { useEffect, useState } from "react";

export default function Map() {
  const [markers, setMarkers] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(getScenesURL());
      const json = await response.json();

      setMarkers(
        json.map((object) => (
          <Marker
            key={object.id}
            position={[object.acf.latitude, object.acf.longitude]}
          >
            <Popup>{object.acf.nom_scene}</Popup>
          </Marker>
        ))
      );
    })();
  }, []);

  return (
    <MapContainer
      center={[48.857190090366146, 2.35133592697337]}
      zoom={10}
      scrollWheelZoom={true}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <CurrentLocationMarker />
      {markers};
    </MapContainer>
  );
}
