import "./PartnerCard.css";

export default function PartnerCard({ logoSource, partnerType, partnerName }) {
  return (
    <div className="partner-card-container">
      {/** Upper part */}
      <div>
        <img
          src={logoSource}
          alt={"Logo de notre partenaire: " + partnerName}
        />
      </div>
      {/** Bottom part */}
      <div className="shadow">
        <p className="title-font">Partenaire {partnerType}</p>
      </div>
    </div>
  );
}
