import React from "react";

function SkiDayCounter({ total, powder, backCountry, goal }) {
  const getPercent = decimal => {
    return decimal * 100 + "%";
  };

  const caclGoalProgress = (total, goal) => {
    return getPercent(total / goal);
  };

  return (
    <div>
      <section>
        <div>Total Days: {total}</div>
        <div>Powder Days: {powder}</div>
        <div>Back Country Days: {backCountry}</div>
        <div>Goal Progress: {caclGoalProgress(total, goal)}</div>
      </section>
    </div>
  );
}

export default SkiDayCounter;
