import "./SnowCard.css";
import SnowyPNG from "../assets/snowysay.png";
function SnowyCard() {
  return (
    <div className="container">
      <img src={SnowyPNG} className="img-snow" />
      <div className="text-container">
        <h1 className="primary-color">Snowy</h1>
        <h1 className="primary-color">Say 💭</h1>
      </div>
    </div>
  );
}

export default SnowyCard;
