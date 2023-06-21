import "./SayCard.css";
import Weather from "./Weather";

const SayCard: React.FC = () => {
  return (
    <div className="flex-container">
      <h1> What will Snowy say today?</h1>
      <div className="items-container">
        <div className="choice-container">
          <Weather />
        </div>
        <div className="choice-container">
          <button>Click here for Time</button>
          <h2>Time</h2>
        </div>
        <h2>Chat with Snowy</h2>
        <div className="coming-soon">
          <h2>Coming Soon!</h2>
        </div>
      </div>
    </div>
  );
};

export default SayCard;
