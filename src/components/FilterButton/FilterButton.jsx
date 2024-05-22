import "./FilterButton.css";

export default function FilterButton({ icon, text, clickHandler }) {
  return (
    <div className="filter-button" onClick={clickHandler}>
      <img src={icon} alt="Une icône" />
      <p className="title-font">{text}</p>
    </div>
  );
}
