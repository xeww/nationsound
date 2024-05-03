import "./ArtistCard.css";
import imgTest from "../assets/coldplay.jpg";
import Button1 from "./Button1.jsx";

export default function ArtistCard({ artist }) {
  return (
    <div className="artist-card">
      <img src={imgTest} alt={"Image de" + artist} />
      <div className="artist-card-bottom shadow">
        <p className="title-font">{artist}</p>
        <Button1 text="Voir" />
      </div>
    </div>
  );
}
