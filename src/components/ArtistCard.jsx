import "./ArtistCard.css";
import Button1 from "./Button1.jsx";

export default function ArtistCard({ artist, imageSource }) {
  return (
    <div className="artist-card">
      <img src={imageSource} alt={"Image de" + artist} />
      <div className="artist-card-bottom shadow">
        <p className="title-font">{artist}</p>
        <Button1 text="Voir" />
      </div>
    </div>
  );
}
