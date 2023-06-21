import "./styles/SayCard.css";
import Weather from "./Weather";

const SayCard: React.FC = () => {
  return (
    <div className="flex-container">
      <h1>Snowy Say! 💭</h1>
      <h1 className="upper-text"> What will Snowy say today?</h1>
      <div className="items-container">
        <div className="weather-container">
          <h2>Check the weather today!</h2>
          <Weather />
        </div>
        <div className="time-container">
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
