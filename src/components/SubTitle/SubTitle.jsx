import "./SubTitle.css";

export default function SubTitle({ svgIcon, text }) {
  return (
    <div className="subtitle shadow">
      {svgIcon}
      <p className="title-font">{text}</p>
    </div>
  );
}
