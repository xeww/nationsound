import icon from "../../assets/maximize.svg";

import "./FullscreenButton.css";

export default function FullscreenButton({ isFullScreen, setFullScreen }) {
  const handleFullscreenClick = () => {
    if (isFullScreen) {
      setFullScreen(false);
    } else {
      setFullScreen(true);
    }
  };

  return (
    <button className="map-fullscreen-button" onClick={handleFullscreenClick}>
      <img src={icon} alt="Icône représentant le plein écran" />
    </button>
  );
}
