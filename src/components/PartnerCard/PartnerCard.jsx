import "./PartnerCard.css";

export default function PartnerCard({
  logoSource,
  partnerType,
  partnerName,
  partnerWebsite,
}) {
  return (
    <div className="partner-card-container">
      {/** Upper part */}
      <div>
        <a target="_blank" href={partnerWebsite}>
          <img
            src={logoSource}
            alt={"Logo de notre partenaire: " + partnerName}
          />
        </a>
      </div>
      {/** Bottom part */}
      <div className="shadow">
        <p className="title-font">Partenaire {partnerType}</p>
      </div>
    </div>
  );
}
