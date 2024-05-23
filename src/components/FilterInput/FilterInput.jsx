import "./FilterInput.css";

export default function FilterInput({ id, svgIcon, placeholder, onChange }) {
  return (
    <div className="filter-input-container">
      {svgIcon}
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      ></input>
    </div>
  );
}
