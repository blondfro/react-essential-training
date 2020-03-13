import React from "react";

function SkiDayCounter({ total, powder, backCountry, goal, skiDays }) {
  const getPercent = decimal => {
    return decimal * 100 + "%";
  };

  const calcGoalProgress = (total, goal) => {
    return getPercent(total / goal);
  };

  return (
    <div>
      <section>
        <div>Total Days: {total}</div>
        <div>Powder Days: {powder}</div>
        <div>Back Country Days: {backCountry}</div>
        <div>Goal Progress: {calcGoalProgress(total, goal)}</div>
        <ul>
          {skiDays.map((day, i) => (
            <li key={i}>{day.resort}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default SkiDayCounter;
