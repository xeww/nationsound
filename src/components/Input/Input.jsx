import "./Input.css";

export default function Input({ svgIcon, placeholder }) {
  return (
    <div className="input-container">
      {svgIcon}
      <input type="text" placeholder={placeholder}></input>
    </div>
  );
}
