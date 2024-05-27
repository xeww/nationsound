import "./PartnerCard.css";

export default function PartnerCard({
  logoSource,
  partnerType,
  partnerName,
  partnerWebsite,
}) {
  return (
    <div className="partner-card-container">
      <div className="partner-card-upper">
        <a target="_blank" href={partnerWebsite}>
          <img
            src={logoSource}
            alt={"Logo de notre partenaire: " + partnerName}
          />
        </a>
      </div>

      <div className="partner-card-bottom shadow">
        <p className="title-font">Partenaire {partnerType}</p>
      </div>
    </div>
  );
}
