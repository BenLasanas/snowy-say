import "./styles/SnowCard.css";
import SnowyPNG from "../assets/snowysay.png";
function SnowyCard() {
  return (
    <div className="container">
      <img src={SnowyPNG} className="img-snow" />
      <div className="text-container"></div>
    </div>
  );
}

export default SnowyCard;
