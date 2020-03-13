import React from "react";
import "./App.css";
import SkiDayCounter from "./components/SkiDayCounter";

function App() {
  let skiData = {
    total: 50,
    powder: 20,
    backCountry: 10,
    goal: 100
  };

  return (
    <div className="App">
      <header className="App-header">
        Ski Day Counter
        <SkiDayCounter
          total={skiData.total}
          powder={skiData.powder}
          backCountry={skiData.backCountry}
          goal={skiData.goal}
        />
      </header>
    </div>
  );
}

export default App;
