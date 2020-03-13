import React from "react";
import "./App.css";
import SkiDayCounter from "./components/SkiDayCounter";
import sampleData from "./data/sampleData";
import SkiDayForm from "./components/SkiDayForm";
import Navigation from "./components/Navigation";

function App() {
  let skiData = {
    total: 50,
    powder: 20,
    backCountry: 10,
    goal: 100
  };

  const skiDays = sampleData.allSkiDays;

  return (
    <div className="App">
      <header className="App-header">
        Ski Day Counter
        <Navigation />
        <SkiDayCounter
          total={skiData.total}
          powder={skiData.powder}
          backCountry={skiData.backCountry}
          goal={skiData.goal}
          skiDays={skiDays}
        />
        <SkiDayForm />
      </header>
    </div>
  );
}

export default App;
