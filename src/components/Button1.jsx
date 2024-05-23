import "./Button1.css";

export default function Button1({ text, onClick }) {
  return (
    <button className="button-reset button1 title-font" onClick={onClick}>
      {text}
    </button>
  );
}
