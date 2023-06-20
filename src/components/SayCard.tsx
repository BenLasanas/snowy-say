import "./SayCard.css";

function SayCard() {
  return (
    <div className="flex-container">
      <h1> What will Snowy say today?</h1>
      <div className="items-container">
        <div className="choice-container">
          <button>Click here for weather</button>
          <h2>Weather</h2>
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
}

export default SayCard;
