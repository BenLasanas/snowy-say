import "./App.css";
import SayCard from "./components/SayCard";
import SnowyCard from "./components/SnowCard";

function App() {
  return (
    <div className="main-container">
      <SnowyCard />
      <SayCard />
    </div>
  );
}

export default App;
