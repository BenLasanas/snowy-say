import "./styles/SnowCard.css";
import SnowyPNG from "../assets/snowysay.png";
function SnowyCard() {
  return (
    <div className="container">
      <img src={SnowyPNG} className="img-snow" />
      <div className="text-container">
        <h1>Snowy</h1>
        <h1>Say 💭</h1>
      </div>
    </div>
  );
}

export default SnowyCard;
