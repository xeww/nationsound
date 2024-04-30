import "./SubTitle.css";

export default function SubTitle({ icon, text }) {
  return (
    <div className="subtitle">
      <img src={icon} alt="Une icône" />
      <p className="title-font">{text}</p>
    </div>
  );
}
