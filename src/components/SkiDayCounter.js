import React from "react";

function SkiDayCounter({ total, powder, backCountry, goal }) {
  return (
    <div>
      <section>
        <div>Total Days: {total}</div>
        <div>Powder Days: {powder}</div>
        <div>Back Country Days: {backCountry}</div>
        <div>Goal: {goal}</div>
      </section>
    </div>
  );
}

export default SkiDayCounter;
